
const lyrics = require('./lyrics.js')

class Song {
  verse(v) {
    return lyrics.stanza[v]
  }

  verses(start,stop) {
    let verses = []
    for( let v = start; v <= stop; v++ ){
      verses.push( `${lyrics.stanza[v]}\n` )
    }
    return verses.join('')
  }
}

export default Song
