def get_middle(s)
    l = s.length
    oe = l % 2 === 0
    if oe === false
        p s[l / 2]
    else
        p s[(l / 2) - 1] + s[l / 2]
    end
  end

  get_middle("supercalifragilisticexpialidocious")