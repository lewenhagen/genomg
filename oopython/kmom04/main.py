#!/usr/bin/env python3
"""
whatever
"""

from sqlalchemy import *
from sqlalchemy.orm import sessionmaker
from animals import Animals

engine = create_engine("sqlite:///flask/db/farm.sqlite")

Session = sessionmaker(bind=engine)
session = Session()

animal1 = Animals(name="Emil2", species="Goat", nr_of_legs=4)

session.add(animal1)

print(session.new)
# session.commit()

# for row in session.query(Animals):
#     print(row)
