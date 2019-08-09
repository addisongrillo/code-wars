# You have an array of numbers.
# Your task is to sort ascending odd numbers 
# but even numbers must be on their places.

# Zero isn't an odd number and you don't need to 
# move it. If you have an empty array, you need to return it.

# Example

# sort_array([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
# sort_array([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

def sort_array(source_array)
    odd=[]
    nArr=[]
    for x in source_array do
        if x != 0 && x % 2 != 0
            odd.push(x)
        end
    end
    odd.sort!
    i=0
    for x in source_array do
        if x != 0 && x %2 != 0
            nArr.push(odd[i])
            i += 1
        else
            nArr.push(x)
        end
    end
    p nArr
end

sort_array([5, 3, 2, 8, 1, 4])