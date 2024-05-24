from database import Base
from sqlalchemy import Table, Column, Integer, String

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    name = Column(String(500))
    email = Column(String(500), unique=True, index=True)
    password = Column(String(500))