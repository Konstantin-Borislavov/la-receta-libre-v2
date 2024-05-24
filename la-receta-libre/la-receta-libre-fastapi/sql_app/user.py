from database import Base
from sqlalchemy import Table, Column, Integer, String
from pydantic import BaseModel
from fastapi import APIRouter
from typing import Optional


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    name = Column(String(500))
    email = Column(String(500), unique=True, index=True)
    password = Column(String(500))
  



    '''
user_route = APIRouter()


@user_route.post("/create-user")
async def create_user_route(user_data: User):
    print(user_data)

 
    conn.execute(UserTable.insert().values())
    '''
