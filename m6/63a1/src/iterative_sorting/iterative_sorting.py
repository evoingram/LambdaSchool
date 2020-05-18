# TODO: Complete the selection_sort() function below

# os.chdir("E:\\projects\\LambdaSchool\\m6\\63a1\\src\\iterative_sorting\")
# exec(open("iterative_sorting.py").read())


def selection_sort(arr):
    '''
        procedure selection sort 
            arr         : array of items
            arraylength : size of arr

            for i = 1 to arraylength - 1:
                /* set current element as minimum*/
                smallest_index = i    
            
                /* check the element to be minimum */

                for j = i+1 to arraylength:
                    if arr[j] < arr[smallest_index]:
                        smallest_index = j;

                /* swap the minimum element with the current element*/
                if smallest_index != i:
                    swap arr[smallest_index] and arr[i]

        end procedure
    '''
    # loop through n-1 elements
    for i in range(0, len(arr) - 1):
        cur_index = i
        # set current element as minimum
        smallest_index = cur_index

        # check the element to be minimum
        for j in range(i+1, len(arr)):
            if arr[j] < arr[smallest_index]:
                smallest_index = j;

        # swap the minimum element with the current element
        if smallest_index != i:
            # swap arr[smallest_index] and arr[i]
            si_value = arr[smallest_index]
            i_value = arr[i]
            arr[smallest_index] = i_value
            arr[i] = si_value
            
    return arr

# TO-DO:  implement the Bubble Sort function below
def bubble_sort(arr):
    '''
        procedure bubbleSort( arr : array of items )
        length = arr.count;
        for i = 0 to length-1 do:
            swapped = false
            for j = 0 to length-1 do:
                /* compare the adjacent elements */
                if arr[j] > arr[j+1] then
                    /* swap them */
                    swap( arr[j], arr[j+1] )
                    swapped = true
            # if no number was swapped that means array is sorted now, break the loop.*/
            if(not swapped):
                break
        return arr
        end procedure 
    '''
    length = arr.count
    for i in range(0, len(arr) - 1):
        swapped = False
        for j in range(0, len(arr)-1):
            # compare the adjacent elements
            if arr[j] > arr[j+1]:
                # swap them
                # swap(arr[j], arr[j+1])
                j_value = arr[j]
                j1_value = arr[j+1]
                arr[j] = j1_value
                arr[j+1] = j_value
                swapped = True
        # if no number was swapped that means array is sorted now, break the loop.*/
        if swapped is False:
            break
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
