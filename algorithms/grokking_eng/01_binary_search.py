# Binary Search. [O(log n)]

# Finds the index of number in a sorted (!) array

def binary_search_nocomments(search_list, number):
    low_index = 0
    high_index = len(search_list) - 1

    while low <= high:
        mid_index = (low_index + high_index) // 2
        guess = search_list[mid]

        if guess == number:
            return mid_index

        if guess > number:
            high_index = mid_index - 1

        else:
            low_index = mid_index + 1

    return None


# Create the function "binary_search" that accepts two parameters: the number to find "number"
# and the list "search_list" that contains this number.
# This function returns the index of the element that is the number to find "number".
def binary_search(search_list, number):

    # The variables "low" and "high" store the bounds of the search area in the list "search_list".
    # The function "len()" returns the number of elements in a list.
    low = 0
    high = len(search_list) - 1

    # Create the while loop that works as long as
    # the lower bound of the search area is equal to or less than the upper bound of the search area.
    # If one of the conditions below is true, then the search area decreases
    # and the while loop continues its work from the beginning.
    while low <= high:

        # Find a middle element of the list "search_list". The variable "mid" is the index of this middle element.
        # The variable "guess" is the value of this middle element. The value of the variable "mid" is rounded down.
        mid = (low + high) // 2
        guess = search_list[mid]

        # If the value of the middle element of the list "search_list" is equal to the number to find,
        # then the function "binary_search" returns the index of this middle element.
        # The keyword "return" is to exit a function and return a value.
        if guess == number:
            return mid

        # If the value of the middle element of the list "search_list" is greater than the number to find,
        # then the upper bound of the search area is one position less
        # than the index of this middle element.
        if guess > number:
            high = mid - 1

        # Otherwise, if the value of the middle element of the list "search_list" is less than the number to find,
        # then the lower bound of the search area is one position greater
        # than the index of this middle element.
        else:
            low = mid + 1

    # If the number to find is not in the list "search_list" (the condition "low <= high" is false,
    # this fact means that the search area is empty), then the function "binary_search" returns "None".
    # "None" means nil (nothing) in Python. We use it to define that the number to find is not in the list.
    return None

# Create the list of numbers "my_list".
my_list = [1, 3, 5, 7, 9]


# Try to find the index of the element that is in the list "my_list".
# The function "print()" prints the specified message to the screen, or other standard output device.
print(binary_search(my_list, 7))


# Try to find the index of the element that is not in the list "my_list".
print(binary_search(my_list, 8))
