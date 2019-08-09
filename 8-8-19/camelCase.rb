# Write simple .camelCase method (camel_case function 
#     in PHP, CamelCase in C# or camelCase in Java) f
#     or strings. All words must have their first letter capitalized without spaces.

# For instance:

# 'hello case'.camelcase => HelloCase
# 'camel case word'.camelcase => CamelCaseWord

class String
    def camelcase
        newStr=''
        strArr=self.split(' ')
        for x in strArr do
            newStr += x.capitalize
        end
        p newStr
    end
end


"hello world".camelcase