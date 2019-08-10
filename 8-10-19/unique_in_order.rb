# Implement the function unique_in_order which takes as argument a 
# sequence and returns a list of items without any elements with the 
# same value next to each other and preserving the original order of elements.

# For example:

# unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
# unique_in_order('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
# unique_in_order([1,2,2,3,3])       == [1,2,3]

def unique_in_order(iterable)
    iterable = iterable.split('') if iterable.kind_of?(Array) === false
    nArr = []
    iterable.each_with_index do |x, index|
        if index === 0
            nArr.push(x)
        else
            nArr.push(x) if x != iterable[index - 1]
        end
    end
    p nArr
end

unique_in_order('AAAABBBCCDAABBB')
unique_in_order('ABBCcAD')
unique_in_order([1,2,2,3,3])
unique_in_order('A')