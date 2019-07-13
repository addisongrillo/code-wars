def square_digits num
    snum = num.to_s.chars.map(&:to_i)
    sqa = []
    for x in snum do
       sqa.push(x*x)
      end
    p sqa.join.to_i
  end