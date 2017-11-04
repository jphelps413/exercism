
class Beer {
  static verse(left) {
    if(left === 0) return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n"
    if(left === 1) return `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`
    return `${left} bottles of beer on the wall, ${left} bottles of beer.\nTake one down and pass it around, ${left-1} bottle${left-1>1?'s':''} of beer on the wall.\n`
  }

  static sing(...verses) {
    switch( verses.length ) {
      case 0: return this.sing(99,0)
      case 1: return this.sing(verses[0],0)
      default:
        let song = ""
        for(let v = verses[0]; v >= verses[1]; v-- ) {
          song += `${Beer.verse(v)}${v>verses[1]?'\n':''}`
        }
        return song
    }
  }
}

export default Beer
