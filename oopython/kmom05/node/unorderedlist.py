#!/usr/bin/env python3

""" Unordered list class """

from node import Node

class UnorderedList:
    """
    Unordered list
    """

    def __init__(self):
        """ init """
        self.head = None

    def is_empty(self):
        """
        Checks if list is empty
        """
        return self.head is None

    def add(self, item):
        """
        Add item to list
        """
        temp = Node(item)
        temp.set_next(self.head)
        self.head = temp

    def size(self):
        """
        Return size of list
        """
        current = self.head
        count = 0
        while current != None:
            count = count + 1
            current = current.get_next()

        return count

    def print_list(self):
        """ prints list """
        current = self.head
        while current != None:
            print(current.data)
            current = current.get_next()
