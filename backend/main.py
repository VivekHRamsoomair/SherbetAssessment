from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import uuid

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Link(BaseModel):
    id: str
    title: str
    url: str

links = []

@app.get("/api/links")
def get_links():
    return links

@app.post("/api/links")
def add_link(link: Link):
    links.append(link)
    return {"message": "Link added"}

@app.delete("/api/links/{link_id}")
def delete_link(link_id: str):
    global links
    links = [link for link in links if link.id != link_id]
    return {"message": "Link deleted"}
