# TO-DO: Complete the selection_sort() function below
def selection_sort(arr):
    # loop through n-1 elements
    for i in range(0, len(arr) - 1):
        cur_index = i
        smallest_index = cur_index
        # TO-DO: find next smallest element
        # (hint, can do in 3 loc)
        # Your code here

        
        # TO-DO: swap
        # Your code here
    return arr
    '''
        procedure selection sort 
            list  : array of items
            n     : size of list

            for i = 1 to n - 1

                /* set current element as minimum*/
                min = i 

                /* check the element to be minimum */
                for j = i+1 to n 
                    if list[j] < list[min] then
                        min = j;
                    end if
                end for

                /* swap the minimum element with the current element*/
                if indexMin != i  then
                    swap list[min] and list[i]
                end if

            end for        

        end procedure
    '''


# TO-DO:  implement the Bubble Sort function below
def bubble_sort(arr):
    # Your code here
    return arr
    '''
        procedure bubbleSort( list : array of items )
        loop = list.count;
        for i = 0 to loop-1 do:
            swapped = false
            for j = 0 to loop-1 do:
                /* compare the adjacent elements */
                if list[j] > list[j+1] then
                    /* swap them */
                    swap( list[j], list[j+1] )
                    swapped = true
                end if
            end for
            /*if no number was swapped that means
            array is sorted now, break the loop.*/
            if(not swapped) then
                break
            end if
        end for
        end procedure return list
    '''


# STRETCH: implement the Count Sort function below
def count_sort(arr, maximum=-1):
    # Your code here
    '''
        CountingSort(A)

            //A[]-- Initial Array to Sort
            //Complexity: O(k)
            for i = 0 to k do
            c[i] = 0

            //Storing Count of each element
            //Complexity: O(n)
            for j = 0 to n do
            c[A[j]] = c[A[j]] + 1

            // Change C[i] such that it contains actual
            //position of these elements in output array
            ////Complexity: O(k)
            for i = 1 to k do
            c[i] = c[i] + c[i-1]

            //Build Output array from C[i]
            //Complexity: O(n)
            for j = n-1 downto 0 do
            B[ c[A[j]]-1 ] = A[j]
            c[A[j]] = c[A[j]] - 1

        end func
    '''

    return arr
