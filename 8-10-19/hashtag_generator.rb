def generateHashtag(str)
    if str.split(" ") === [] || str.split(" ").join.length > 139
        p false
    else
        nArr=[]
        str.split(" ").each do |word| nArr.push(word.capitalize) end
        p "#" + nArr.join
    end
end

generateHashtag(" Hello there thanks for trying my Kata")
generateHashtag("    Hello     World   ")
generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")