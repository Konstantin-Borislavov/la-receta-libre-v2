from fastapi import APIRouter
from typing import Annotated
from database import engine, SessionLocal
from sqlalchemy.orm import Session
from fastapi import FastAPI,HTTPException, Depends,status
from schemas.user_schema import UserBase, UserLogin
from models.user_model import User
from auth import bycrypt_context, create_token
from datetime import timedelta, datetime


user_route = APIRouter()
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]


@user_route.post("/create-user", status_code = status.HTTP_201_CREATED)
async def create_user(user: UserBase, db: db_dependency):
    db_user = User(**user.model_dump())
    db_user.password = bycrypt_context.hash(db_user.password)
    db.add(db_user)
    db.commit()


@user_route.post("/login-user", status_code = status.HTTP_200_OK)
async def get_user(user: UserLogin, db:db_dependency):
    login_user = UserLogin(**user.model_dump())
    db_user = db.query(User).filter(User.email== login_user.email).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail='User not found')
    if bycrypt_context.verify(login_user.password,db_user.password):
        token = create_token(db_user.name, db_user.id, timedelta(minutes=60))
        return {'access_token': token, 'token_type': 'bearer'}
    else:
        return'Correo y/o contraseña incorrectos'