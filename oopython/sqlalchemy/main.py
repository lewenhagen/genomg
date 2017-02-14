#!/usr/bin/env python3

""" Main module """

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, String, Float, Integer
from sqlalchemy.orm import sessionmaker

engine = create_engine("sqlite:///db/humans.sqlite")
Session = sessionmaker(bind=engine)
session = Session()

Base = declarative_base()

class Actor(Base):
    """ Actor mapper """
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
        """ overload str """
        return "Name: {}, Age: {}, Price: {}".format(self.name, self.age, self.price)


for actor in session.query(Actor).filter(Actor.price < 30000):
    print(actor)


# a2 = Actor("Charlie Sheen", 56, 150000)
# a3 = Actor("Bruce Willis", 64, 450000)
# a4 = Actor("Ben Affleck", 45, 5000)
# a5 = Actor("Andreas", 24, 5500)
#
# all_actors = [a2, a3, a4, a5]
#
# session.add_all(all_actors)
# session.commit()



# session.add(Actor("Greta Garbo", 111, 100000))

# session.commit()

# for actor in session.query(Actor):
#     print(actor)
