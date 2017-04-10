#!/usr/bin/env python3

""" Main module """

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
        
session.add(Actor("Greta Garbo", 131, 200000))

# a1 = Actor("Mia", 45, 233333)
# session.add(a1)
# session.commit()

# a1 = Actor("Greta Garbo", 111, 200000)
# a2 = Actor("Charlie Sheen", 55, 150000)
# a3 = Actor("Ben Affleck", 45, 3000)
# a4 = Actor("Andreas", 23, 5000)
# 
# all_actors = [a1, a2, a3, a4]
# 
# session.add_all(all_actors)
# session.commit()
for actor in session.query(Actor):
    print(actor)


# tables.add_actor("Bruce Willis", 60, 100000)
# tables.add_actor("Greta Garbo", 111, 200000)
# tables.add_actor("Charlie Sheen", 55, 150000)
# tables.add_actor("Ben Affleck", 45, 3000)
# tables.add_actor("Andreas", 23, 5000)


# print(tables.get_cheap_actors())