
# MVP:
# A ring buffer is a non-growable buffer with a fixed size.
# When the ring buffer is full and a new element is inserted, the oldest element in the ring buffer is overwritten with the newest element.
# This kind of data structure is very useful for use cases such as storing logs and history information, where you typically want to store information up until it reaches a certain age, after which you don't care about it anymore and don't mind seeing it overwritten by newer data.
# Implement this behavior in the RingBuffer class.
# RingBuffer has two methods, `append` and `get`.
# The `append` method adds the given element to the buffer.
# The `get` method returns all of the elements in the buffer in a list in their given order.
# It should not return any `None` values in the list even if they are present in the ring buffer.

class RingBuffer:
    def __init__(self, capacity):
        pass

    def append(self, item):
        pass

    def get(self):
        pass
