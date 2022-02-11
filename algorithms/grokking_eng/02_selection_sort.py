# Selection sort. [O(n*n)]
# Here we create two functions:
# the first function finds the smallest element in a list,
# and the second function sorts the list by comparing each element in the list with the smallest element.


def find_smallest_nocomments(list_to_sort):
    smallest = list_to_sort[0]
    smallest_index = 0

    for i in range(1, len(list_to_sort)):
        if list_to_sort[i] < smallest:
            smallest_index = i
            smallest = list_to_sort[i]

    return smallest_index

def selection_sort_nocomments(list_to_sort):
    new_list = []

    for i in range(len(list_to_sort)):
        smallest = find_smallest(list_to_sort)
        new_list.append(list_to_sort.pop(smallest))

    return new_list



# Create the function "find_smallest" that accepts one parameter:
# the list "list_to_sort" that contains numbers.
# This function returns the index of the smallest number in the list.
def find_smallest(list_to_sort):

    # The variable "smallest" is used to store the smallest element in the list.
    # Initially the variable "smallest" stores the very first element in the list - the element at index "0".
    smallest = list_to_sort[0]

    # The variable "smallest_index" is used to store the index of the smallest element in the list.
    # Initially the variable "smallest_index" stores the index of the very first element in the list - "0".
    smallest_index = 0

    # Create the for loop in which we iterate over all the elements of the list, except for the element at index "0",
    # and compare these elements with the element at index "0".
    # The function "range()" returns a sequence of numbers excluding the last number.
    # The function "len()" returns the number of elements in a list.
    for i in range(1, len(list_to_sort)):

        # If we find the element that is less than the element at index "0",
        # then this element becomes the new smallest element in the list.
        # The rest elements of the list are compared with this new smallest element of the list.
        if list_to_sort[i] < smallest:
            smallest_index = i
            smallest = list_to_sort[i]

    # As a result of the for loop, the function "find_smallest" returns the index of the smallest element in the list.
    # The keyword "return" is to exit a function and return a value.
    return smallest_index

# Create the function "selection_sort" that accepts one parameter:
# the list "search_list" that contains numbers.
# This function returns this list sorted in ascending order.
def selection_sort(list_to_sort):

    # The variable "new_list" is used to store the list sorted in ascending order.
    # Initially this variable contains an empty list.
    new_list = []

    # Create the for loop in which we iterate over all the elements of the list "list_to_sort".
    for i in range(len(list_to_sort)):

        # Call the function "find_smallest" to find the index of the smallest element in the list.
        # The variable "smallest" stores this index of the smallest element in the list.
        smallest = find_smallest(list_to_sort)

        # Remove the element at index "smallest" from the list "list_to_sort" using the method "pop".
        # Also the method "pop" returns the removed element.
        # Add the element received from the method "pop" to the end of the list "new_list" using the method "append".
        # Then the for loop continues its work from the beginning with the reduced list "list_to_sort".
        new_list.append(list_to_sort.pop(smallest))

    # As a result of the for loop, the function "selection_sort" returns the variable "new_list"
    # that stores the list sorted in ascending order.
    return new_list


# Try to sort the list [5, 3, 6, 2, 10] in ascending order.
# The function "print()" prints the specified message to the screen, or other standard output device.
print(selection_sort([5, 3, 6, 2, 10]))
