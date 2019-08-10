# For building the encrypted string:
# Take every 2nd char from the string, then the other chars, that 
# are not every 2nd char, and concat them as new String.
# Do this n times!

# Examples:

# "This is a test!", 1 -> "hsi  etTi sats!"
# "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

def encrypt(text, n)
    en = text
    n.times do
        tArr=en.split('')
        odd = tArr.values_at(* tArr.each_index.select {|i| i.odd?}).join("")
        even = tArr.values_at(* tArr.each_index.select {|i| i.even?}).join("")
        en = ''
        en += odd
        en += even
    end
    p en
end

def decrypt(encrypted_text, n)
    en = encrypted_text
    n.times do
        tArr=en.split('')
        mid = tArr.length / 2
        len = tArr.length
        en = ''
        i = mid
        j = len
        while i < j do
            en += tArr[i]
            en += tArr[i-mid]
            i += 1
        end
        if  encrypted_text.length % 2 != 0
            en=en[0...-1]
        end
    end
    p en
end

encrypt("This is a test!", 1)

encrypt("This is a test!", 2)

decrypt("hskt svr neetn!Ti aai eyitrsig", 1)

decrypt("hsi  etTi sats!", 1)

decrypt(" Tah itse sits!", 3)

decrypt("cmFF3Vh !q,T", 1)


