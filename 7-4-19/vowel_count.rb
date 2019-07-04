def getCount(inputStr)
  vCount=0
  chars = inputStr.split('')
  for letter in chars
    if letter === 'a' || \
       letter === 'e' || \
       letter === 'i' || \
       letter === 'o' || \
       letter === 'u' || \
       letter === 'A' || \
       letter === 'E' || \
       letter === 'I' || \
       letter === 'O' || \
       letter === 'U'
       vCount += 1
    end
  end
  p vCount
end
getCount("abracadabrauE")