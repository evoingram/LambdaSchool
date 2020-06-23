# Problem 1:  Two Sum

class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        # Given an array of integers, return indices of the two numbers such that they add up to a specific target.

        # You may assume that each input would have exactly one solution, and you may not use the same element twice.

        # total = 0
        # for key, value in nums
            # total = total + value 
            # for key1, value1 in nums
                # if key != key1
                    # total = total + value1
                    # if total == target
                        # return [key, key1]
        
        total = 0
        for x in range(0, len(nums)):
            total = 0
            for y in range(0, len(nums)):
                if x != y:
                    total = nums[x] + nums[y]
                    if total == target:
                        return [x, y]

# Problem 2:  Implement a Queue Using Stacks
class MyQueue(object):

        # Implement the following operations of a queue using stacks.

        # push(x) - Push element x to the back of queue.
        # pop() - Removes the element from in front of queue.
        # peek() - Get the front element.
        # empty() - Return whether the queue is empty.

        # You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.

        # Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque(double-ended queue), as long as you use only standard operations of a stack.

        # You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

    def __init__(self):
        """
        Initialize your data structure here.
        """
        

    def push(self, x):
        """
        Push element x to the back of queue.
        :type x: int
        :rtype: None
        """
        

    def pop(self):
        """
        Removes the element from in front of queue and returns that element.
        :rtype: int
        """
        

    def peek(self):
        """
        Get the front element.
        :rtype: int
        """
        

    def empty(self):
        """
        Returns whether the queue is empty.
        :rtype: bool
        """
        


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()

