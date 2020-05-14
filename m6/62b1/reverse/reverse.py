
# MVP:
# Inside of the `reverse` directory, you'll find a basic implementation of a Singly Linked List.
# Without making it a Doubly Linked List (adding a tail attribute), complete the `reverse_list()` function within `reverse/reverse.py`.
# Reverse the contents of the list using recursion, *not a loop.*

# Rubric:
# 2:  Student's solution in reverse.py is able to correctly print out the contents of the Linked List in reverse order, passing all tests, BUT, the runtime of their solution is not optimal (requires looping through the list more than once)
# 3:  Student's solution in reverse.py is able to correctly print out the contents of the Linked List in reverse order, passing all tests AND it has a runtime of O(n) or better

class Node:
    def __init__(self, value=None, next_node=None):
        self.value = value
        self.next_node = next_node

    def get_value(self):
        return self.value

    def get_next(self):
        return self.next_node

    def set_next(self, new_next):
        self.next_node = new_next

class LinkedList:
    def __init__(self):
        self.head = None

    def add_to_head(self, value):
        node = Node(value)

        if self.head is not None:
            node.set_next(self.head)

        self.head = node

    def contains(self, value):
        if not self.head:
            return False

        current = self.head

        while current:
            if current.get_value() == value:
                return True

            current = current.get_next()

        return False

    def reverse_list(self, node, prev):
        pass
