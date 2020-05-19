# TO-DO: complete the helper function below to merge 2 sorted arrays
def merge(arrA, arrB):
    elements = len(arrA) + len(arrB)
    merged_arr = [0] * elements

    # Your code here


    return merged_arr


# TO-DO: implement the Merge Sort function below USING RECURSION
def merge_sort(arr):
    # Your code here


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
