from fastapi import APIRouter, Header
from typing import Annotated
from database import engine, SessionLocal
from sqlalchemy.orm import Session
from fastapi import FastAPI,HTTPException, Depends,status
from schemas.recipe_schema import RecipeBase
from models.recipe_model import Recipe
from auth import bycrypt_context, Token, decode_token_id
from datetime import datetime
from schemas.user_schema import UserBase, UserLogin
from models.user_model import User


recipe_route = APIRouter()
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]


@recipe_route.post("/create-recipe/{access_token}", status_code=status.HTTP_201_CREATED)
async def create_recipe(recipe: RecipeBase,  db: db_dependency, access_token: str):
    user_id = decode_token_id(access_token)
    if user_id == 'Unable to decode token':
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")

    db_recipe = Recipe(**recipe.model_dump())
    db_recipe.user_id = user_id
    db_recipe.set_ingredients(recipe.ingredients)
    db_user = db.query(User).filter(User.id== user_id).first()
    db_recipe.author = db_user.name
    db.add(db_recipe)
    db.commit()
    return db_recipe



@recipe_route.get("/get-recipe/{recipe_id}", status_code = status.HTTP_200_OK)
async def get_user(recipe_id:int, db:db_dependency):
    db_recipe = db.query(Recipe).filter(Recipe.recipe_id == recipe_id).first()
    if db_recipe is None:
        raise HTTPException(status_code=404, detail='User not found')
    else:
        db_recipe.ingredients = db_recipe.get_ingredients()
        return db_recipe
    

@recipe_route.get("/get-all-recipes", status_code = status.HTTP_200_OK)
async def get_user(db:db_dependency):
    latest_recipes = db.query(Recipe).order_by(Recipe.created_at).limit(10).all()
    if latest_recipes is None:
        raise HTTPException(status_code=404, detail='User not found')
    else:
        for recipe in latest_recipes:
            recipe.ingredients = recipe.get_ingredients()
        return latest_recipes