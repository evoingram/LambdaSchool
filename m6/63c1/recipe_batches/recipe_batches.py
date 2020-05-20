#!/usr/bin/python

import math

def recipe_batches(recipe, ingredients):
  pass
  # compare each object1 key's value to each object2 key's value
  # if object2 key's value < object1 key's value, return 0
  # else divide object2 key's value by object1 key's value
  # store result in new array
  # return minimum number from new array 


if __name__ == '__main__':
  # Change the entries of these dictionaries to test 
  # your implementation with different inputs
  recipe = { 'milk': 100, 'butter': 50, 'flour': 5 }
  ingredients = { 'milk': 132, 'butter': 48, 'flour': 51 }
  print("{batches} batches can be made from the available ingredients: {ingredients}.".format(batches=recipe_batches(recipe, ingredients), ingredients=ingredients))
