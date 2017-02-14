#!/usr/bin/env python3
import time
import random

def quick_sort(items):
    """ Quicksort """
    if len(items) > 1:
        pivot_index = len(items) // 2
        smaller_items = []
        larger_items = []

        for i, val in enumerate(items):
            if i != pivot_index:
                if val < items[pivot_index]:
                    smaller_items.append(val)
                else:
                    larger_items.append(val)

        quick_sort(smaller_items)
        quick_sort(larger_items)
        items[:] = smaller_items + [items[pivot_index]] + larger_items

    return items

def bubble_sort(items):
    """ Bubble sort """
    for i in range(len(items)):
        for j in range(len(items)-1-i):
            if items[j] > items[j+1]:
                items[j], items[j+1] = items[j+1], items[j]     # Byt plats

    return items

n = 20000 ## Ta stegen 1, 10, 100, 1000, 10000, 20000

print("n={}".format(n))
print("==================================")

start = time.time()
random_numbers = random.sample(range(n), n)
end = time.time()
print("The time in seconds for random sample : {}s".format(end - start))

start = time.time()
sum_of_numbers = 0
for i in random_numbers:
    sum_of_numbers += i * 2

end = time.time()
print("The time in seconds for sum: {} is {}s".format(sum_of_numbers, end - start))

start = time.time()
quick_sort(random_numbers)
end = time.time()
print("The time in seconds for quick sort: {}s".format(end - start))

start = time.time()
bubble_sort(random_numbers)
end = time.time()
print("The time in seconds for bubble sort: {}s".format(end - start))
