def linear_search(arr, target):
    # Your code here
    '''
    procedure linear_search (list, value)
for each item in the list
      if match item == value
         return the item's location
      end if
   end for
end procedure
    '''

    return -1   # not found


# Write an iterative implementation of Binary Search
def binary_search(arr, target):

    # Your code here
    '''
    Procedure binary_search
   A ← sorted array
   n ← size of array
   x ← value to be searched
Set lowerBound = 1
   Set upperBound = n
while x not found
      if upperBound < lowerBound 
         EXIT: x does not exists.
      set midPoint = lowerBound + ( upperBound - lowerBound ) / 2      
      if A[midPoint] < x
         set lowerBound = midPoint + 1         
      if A[midPoint] > x
         set upperBound = midPoint - 1
if A[midPoint] = x 
         EXIT: x found at location midPoint
   end while   
end procedure
    '''

    return -1  # not found
