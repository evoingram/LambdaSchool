cache = {}


def search_files(x, y, result):
    result.append(x)
    cache.update({y: x})

def finder(files, queries):
    result = []
    for y in queries:
        if y in cache.items():
            result.append(cache(y))
        else:
            for x in files:
                if y == x[-len(y):]:
                    search_files(x, y, result)
                    break
    return result

if __name__ == "__main__":
    files = [
        '/bin/foo',
        '/bin/bar',
        '/usr/bin/baz'
    ]
    queries = [
        "foo",
        "qux",
        "baz"
    ]
    print(finder(files, queries))
