def openOrSenior(data)
    newData =[]
    for member in data
        if member[0] > 54 && member[1] > 7
            newData.push("Senior")
        else
            newData.push("Open")
        end
    end
    p newData
  end