# The main idea is to count all the occuring characters(UTF-8) 
# in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

# What if the string is empty ? Then the result should be empty object literal { }

def count_chars(s)
    h={}
    sArr=s.split("")
    for x in sArr
        h[x] = sArr.count(x)
    end
    p h
end

count_chars("aba")