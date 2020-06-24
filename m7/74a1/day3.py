# Problem 1:  Merge Two Sorted Lists 

# Merge two sorted linked lists and return it as a new sorted list.
# The new list should be made by splicing together the nodes of the first two lists.

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def mergeTwoLists(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        # Merge two sorted linked lists and return it as a new sorted list.
        # The new list should be made by splicing together the nodes of the first two lists.

        if not l1:
            return l2
        elif not l2:
            return l1
        elif l1 and l2:
            if l1.val > l2.val:
                l1, l2 = l2, l1
            if l1.next:
                return ListNode(l1.val, self.mergeTwoLists(l1.next, l2))
            else:
                return ListNode(l1.val, l2)

# Problem 2:  Decode String


def decodeString(s):
    """
    :type s: str
    :rtype: str
    """
    # Given an encoded string, return its decoded string.

    # The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

    # You may assume that the input string is always valid
    # No extra white spaces, square brackets are well-formed, etc.

    # Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

    # start at end of encoded string
    # if current item is letter, add to beginning of decoded
    # if current item is ]:
        # find [
        # save string in between []
        # get number before [
        # repeat-add to beginning of decoded the string in between [] as many times as number
    decoded = ""
    close_brackets = [position for position, letter in enumerate(s) if letter == str("]")]
    open_brackets = [position for position, letter in enumerate(s) if letter == str("[")]
    for letter in reversed(s):
        if letter.isalpha():
            decoded = letter + decoded
        elif letter == str("]"):
            last_close_bracket = close_brackets[-1]
            print("last close bracket = " + str(last_close_bracket))
            del close_brackets[-1]
            print("close brackets = " + str(close_brackets))
            # find [
            last_open_bracket = open_brackets[-1]
            print("last open bracket = " + str(last_open_bracket))
            del open_brackets[-1]
            print("open brackets = " + str(open_brackets))
            # save string in between []
            end_sub = last_close_bracket
            start_sub = last_open_bracket + 1
            print("start:end = " + str(start_sub) + " : " + str(end_sub))
            substring = s[start_sub:end_sub]
            print("substring = " + substring)
            # get number before [
            repeat_times = int(s[last_open_bracket-1])
            print("repeat number of times:  " + str(repeat_times))
            # repeat-add to beginning of decoded the string in between [] as many times as number
            for x in range(0, repeat_times-1):
                decoded = substring + decoded
    print(decoded)
    print('-------------------------------')
    return decoded


decodeString("3[a]2[bc]")
decodeString("3[a2[c]]")

