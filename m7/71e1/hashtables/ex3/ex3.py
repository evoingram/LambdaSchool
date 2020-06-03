intersection_array = []
cache = {}

def arrays_length_two(arrays, intersection_array):
    arrays[0].sort()
    arrays[1].sort()
    for x in arrays[0]:
        for y in arrays[1]:
            if x == y and x not in intersection_array:
                intersection_array.append(x)
    return arrays, intersection_array

def arrays_length_three(arrays, x, intersection_array):
    if len(intersection_array) > 0:
        intersection_list = list(intersection_array)
        last_array_item = max(intersection_list)
    if x != None:
        for y in x:
            if y <= last_array_item:
                if y not in x:
                    intersection_array.remove(y)
            elif y > last_array_item:
                break
        arrays.remove(x)
    return arrays, x, intersection_array

def intersection(arrays):
    global intersection_array
    original_arrays = arrays.copy()
    if str(arrays) in cache.items():
        return cache[str(arrays)]
    # double nested loops to compare first two arrays
    if len(arrays) < 2:
        return None
    elif len(arrays) == 2:
        arrays_length_two(arrays, intersection_array)
        cache.update({str(original_arrays): intersection_array})
        return intersection_array
    # in remaining arrays only check for same between first two
    elif len(arrays) > 2:
        arrays_length_two(arrays, intersection_array)
        arrays.remove(arrays[1])
        arrays.remove(arrays[0])
        # dwindle down search with each remaining array
        for x in arrays:
            x.sort()
            arrays_length_three(arrays, x, intersection_array)
        # return result
        cache.update({str(original_arrays): intersection_array})
        return intersection_array

if __name__ == "__main__":
    arrays = []

    arrays.append(list(range(1000000, 2000000)) + [1, 2, 3])
    arrays.append(list(range(2000000, 3000000)) + [1, 2, 3])
    arrays.append(list(range(3000000, 4000000)) + [1, 2, 3])

    print(intersection(arrays))
