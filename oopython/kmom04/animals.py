#!/usr/bin/env python3

""" Mapping of class """

from sqlalchemy import Column, Float, String, Integer
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()

class Animals(Base):
    __tablename__ = "animals"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    species = Column(String)
    nr_of_legs = Column(Integer)

    def __str__(self):
        return "Name: {m}, Species: {s}, Nr of legs: {l}".format(m=self.name, s=self.species, l=self.nr_of_legs)
