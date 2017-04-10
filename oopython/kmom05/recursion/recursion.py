def flattenList(nList, resList):
    print("Start: " + str(nList))
    for obj in nList:
        if isinstance(obj, (list, tuple)):
            flattenList(obj, resList)
            # print("returned: " + str(resList))
        else:
            resList.append(obj)
            print("add: " + str(resList))

    print("Done: " + str(resList))

res = []
flattenList([2,3, (4, 5, [12], 5), [2, 3], 5], res)
print(res)
