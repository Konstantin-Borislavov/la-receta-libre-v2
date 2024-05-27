from database import Base
from sqlalchemy import Table, Column, Integer, String, Text, ForeignKey, DateTime
from sqlalchemy.orm import relationship
import json
from datetime import datetime

class Recipe(Base):
    __tablename__ = "recipes"

    recipe_id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(500), nullable=False)
    description = Column(Text, nullable=True)
    recipe = Column(Text, nullable = True)
    ingredients = Column(Text, nullable=False)  # Almacenamos la lista como un JSON serializado
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    created_at = Column(DateTime, default=datetime.now())
    author = Column(String(255))

    def get_ingredients(self):
        return json.loads(self.ingredients)
    

    def set_ingredients(self, ingredients_list):
        self.ingredients = json.dumps(ingredients_list)
        
'''
class RecipeImage(Base):
    __tablename__ = "recipe_images"

    id = Column(Integer, primary_key=True)
    recipe_id = Column(Integer, ForeignKey('recipes.id'))
    image_url = Column(String(500))

    # Define a relationship to the Recipe class
    recipe = relationship("Recipe", back_populates="images")
'''