
from pydantic import BaseModel
from datetime import datetime


class RecipeBase(BaseModel):
    title:  str
    description: str
    recipe :str
    ingredients: list[str]
    created_at: datetime
    author: str


