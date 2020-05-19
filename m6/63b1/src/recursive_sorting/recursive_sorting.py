# TO-DO: complete the helper function below to merge 2 sorted arrays
def merge(arrA, arrB):
    '''
    procedure merge( var arrA as array, var arrB as array )
        var merged_arr as array
        while ( arrA and arrB have elements )
            if ( arrA[0] > arrB[0] )
                add arrB[0] to the end of merged_arr
                remove arrB[0] from arrB
            else
                add arrA[0] to the end of merged_arr
                remove arrA[0] from arrA
    end while

    while ( arrA has elements )
            add arrA[0] to the end of merged_arr
            remove arrA[0] from arrA
    end while  

    while ( arrB has elements )
            add arrB[0] to the end of merged_arr
            remove arrB[0] from arrB
    end while   

    return merged_arr

    end procedure
    '''
    elements = len(arrA) + len(arrB)
    merged_arr = [0] * elements

    while len(arrA) > 0 and len(arrB) > 0:
        if arrA[0] > arrB[0]:
            # add arrB[0] to the end of merged_arr
            merged_arr.append(arrB[0])
            # remove arrB[0] from arrB
            del arrB[0]
        else:
            # add arrA[0] to the end of merged_arr
            merged_arr.append(arrA[0])
            # remove arrA[0] from arrA
            del arrA[0]

    while len(arrA) > 0:
        # add arrA[0] to the end of merged_arr
        merged_arr.append(arrA[0])
        # remove arrA[0] from arrA
        del arrA[0]

    while len(arrB) > 0:
        # add arrB[0] to the end of merged_arr
        merged_arr.append(arrB[0])
        # remove arrB[0] from arrB
        del arrB[0]

    return merged_arr


# TO-DO: implement the Merge Sort function below USING RECURSION
def merge_sort(arr):

    # Your code here
    '''
    procedure mergesort( var a as array )
        if ( n == 1 ) return a
        var l1 as array = a[0] ... a[n/2]
        var l2 as array = a[n/2+1] ... a[n]
        l1 = mergesort( l1 )
        l2 = mergesort( l2 )
        return merge( l1, l2 )
    end procedure
    '''
    if len(arr) == 1:
        return arr
    

    return arr


# implement an in-place merge sort algorithm
def merge_in_place(arr, start, mid, end):
    # Your code here


    return arr


def merge_sort_in_place(arr, l, r):
    # Your code here


    return arr


'''
Merge Sort Pseudocode:

procedure mergesort( var a as array )
    if ( n == 1 ) return a
    var l1 as array = a[0] ... a[n/2]
    var l2 as array = a[n/2+1] ... a[n]
    l1 = mergesort( l1 )
    l2 = mergesort( l2 )
    return merge( l1, l2 )
end procedure

procedure merge( var a as array, var b as array )
    var c as array
    while ( a and b have elements )
        if ( a[0] > b[0] )
            add b[0] to the end of c
            remove b[0] from b
        else
            add a[0] to the end of c
            remove a[0] from a
        end if
   end while

   while ( a has elements )
        add a[0] to the end of c
        remove a[0] from a
   end while  

   while ( b has elements )
        add b[0] to the end of c
        remove b[0] from b
   end while   

   return c

end procedure

'''

# STRETCH: implement the Timsort function below
# hint: check out https://github.com/python/cpython/blob/master/Objects/listsort.txt
def timsort(arr):
    # Your code here

    return arr

'''
We consider size of run as 32.
We one by one sort pieces of size equal to run using Insertion Sort.
After sorting individual pieces, we merge them one by one using merge sort. We double the size of merged subarrays after every iteration.
'''
