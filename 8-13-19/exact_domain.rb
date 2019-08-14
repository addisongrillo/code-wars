# Write a function that when given a URL as a string, parses out just 
# the domain name and returns it as a string. For example:

# domain_name("http://github.com/carbonfive/raygun") == "github" 
# domain_name("http://www.zombie-bites.com") == "zombie-bites"
# domain_name("https://www.cnet.com") == "cnet"

def domain_name(url)
  if url.match(/^www/)
    p url.split(".")[1]
  elsif url.match(/^http/)
    x = url.split("/")[2]
    if x.match(/^www/)
        p x.split(".")[1]
    else
        p x.split(".")[0]
    end
  else
    p url.split(".")[0]
  end
end


domain_name("")
domain_name("http://github.com/carbonfive/raygun")
domain_name("www.zombie-bites.com")
domain_name("cnet.com")