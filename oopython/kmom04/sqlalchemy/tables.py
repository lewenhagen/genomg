#!/usr/bin/env python3

""" Table mapping module """

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, Float, String
from sqlalchemy.orm import sessionmaker

engine = create_engine("sqlite:///db/humans.sqlite")
Session = sessionmaker(bind=engine)
session = Session()

Base = declarative_base()

class Actor(Base):
    """ Actor mapping """
    __tablename__ = "actors"
    
    id = Column(Integer, primary_key=True)
    name = Column(String)
    age = Column(Integer)
    price = Column(Float)
    
    def __init__(self, name, age, price):
        """ init method """
        self.name = name
        self.age = age
        self.price = price
    
    def __str__(self):
        """ overloading str """
        return "Name: {}, Age: {}, price: {}".format(self.name, self.age, self.price)
    

def add_actor(self, new_name, new_age, new_price):
    """ ads actor to db """
    session.add(Actor(name=new_name, age=new_age, price=new_price))
    session.commit()
#     
def add_actor(new_actor):
    """ ads actor to db """
    session.add(new_actor)
    session.commit()

def get_actors():
    """ returns actors from db """
    result = ""
    for actor in session.query(Actor):
        result += str(actor) + "\n"
    return result

def get_cheap_actors():
    """ returns cheap actors """
    result = ""
    for actor in session.query(Actor).filter(Actor.price < 100000):
        result += str(actor) + "\n"
    return result
    