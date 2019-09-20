function songDecoder(song){
    return song.replace(/WUB/g, " ").split(/\s+/).join(" ").trim()
  }