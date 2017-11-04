class Queens {
  constructor( { white = [0,3], black = [7,3] } = {} ) {
    if( white[0] === black[0] && white[1] === black[1] )
      throw 'Queens cannot share the same space'

    this.white = white
    this.black = black
  }

  canAttack() {
    if( this.white[0] === this.black[0] ||
        this.white[1] === this.black[1] )  return true

    return Math.abs(this.white[0] - this.black[0]) ===
           Math.abs(this.white[1] - this.black[1])
  }

  toString() {
    const BoardDim = 8 // square
    let genRow = (piece='',pos=-1) => {
      return [...Array(BoardDim).keys()].reduce((row,r) => {
        row += (r === pos ? piece : '_') + ' '
        return row
      },'').trim()
    }

    let board = []
    for( let r = 0; r < BoardDim; r++ ) {
      if( r === this.white[0] )
        board.push( genRow('W',this.white[1]) )
      else if( r === this.black[0] )
        board.push( genRow('B',this.black[1]) )
      else
        board.push( genRow() )
    }
    return board.join("\n")+"\n"
  }
}

export default Queens
