def dirReduc(arr)
    nArr=arr
    arr.length.times do
        nArr.each_with_index do |d, index|
            case
            when d === "NORTH" && nArr[index+1] === "SOUTH"
                nArr.delete_at(index)
                nArr.delete_at(index)
                break
            when d === "SOUTH" && nArr[index+1] === "NORTH"
                nArr.delete_at(index)
                nArr.delete_at(index)
                break
            when d === "EAST" && nArr[index+1] === "WEST"
                nArr.delete_at(index)
                nArr.delete_at(index)
                break
            when d === "WEST" && nArr[index+1] === "EAST"
                nArr.delete_at(index)
                nArr.delete_at(index)
                break
            end
        end      
   end
   p nArr
end

a = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]

dirReduc(a)