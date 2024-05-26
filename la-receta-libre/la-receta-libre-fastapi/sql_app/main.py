from fastapi import FastAPI,HTTPException, Depends,status
from database import engine,Base
import models
from fastapi.middleware.cors import CORSMiddleware
from routes.user_routes import user_route



app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"], 
)

Base.metadata.create_all(bind= engine)

app.include_router(user_route)



    
    