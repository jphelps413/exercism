"use strict"

class WordSearch {
  constructor(grid) { this.grid = grid }

  // Maps the coordinates of each letter in the grid.
  // This:   ['aaa','bcd','zyx']
  // Yields: { a: [ [0,0],[0,1],[0,2] ],
  //           b: [ [1,0] ],
  //           c: [ [1,1] ],
  //           d: [ [1,2] ],
  //           z: [ [2,0] ],
  //           y: [ [2,1] ],
  //           x: [ [2,2] ] }
  getCharMap(grid) {
    let cMap = {}
    for( let r = 0; r < grid.length; r++ ) {
      for( let c = 0; c < grid[0].length; c++ ) {
        const ch = grid[r][c]
        cMap[ch] = cMap[ch] || []
        cMap[ch].push([r,c])
      }
    }
    return cMap
  }

  // Generates the search coordinate 'spokes' centered on the given
  // coordinate, for the specified length. This method will not include
  // 'spokes' with any coords outside the boundary of the grid.
  //
  // Example: spokes from [0,0], length 3, on a 3x3 grid yields:
  //    [ [0,0], [0,1], [0,2] ]  <= horizontal
  //    [ [0,0], [1,0], [2,0] ]  <= vertical
  //    [ [0,0], [1,1], [2,2] ]  <= diagonal up left to low right
  //
  getSpokes(origin,length) {
    const Offsets = [
      [-1,-1],[-1, 0],[-1, 1],  // up left, up, up right
      [ 0,-1],        [ 0, 1],  // left, right
      [ 1,-1],[ 1, 0],[ 1, 1],  // down left, down, down right
    ]
    const [oR,oC] = [...origin] // origin row and col
    const wid = this.grid[0].length
    const hgt = this.grid.length

    let spokes = []
    for( let o = 0; o < Offsets.length; o++ ) {
      const [dR,dC] = [...Offsets[o]]
      let spoke = []
      for( let k = 0; k < length; k++ ) {
        const [row,col] = [oR+dR*k,oC+dC*k]
        if( row > -1 && row < hgt &&
            col > -1 && col < wid ) spoke.push([row,col])
      }
      if( spoke.length === length ) spokes.push(spoke)
    }
    return spokes
  }
  
  find(words) {
    // helper to generate resulting coords at +1
    const getStartEnd = (spoke) => {
      return {
        "start": spoke[0].map(a=>a+1),
        "end"  : spoke[spoke.length-1].map(a=>a+1)
      }
    }

    const cMap = this.getCharMap( this.grid )

    // prefill results to not found
    let found = words.reduce((acc,w) => {
      acc[w]=undefined
      return acc
    },{})

    words.forEach( word => {
      const firstCh = word[0]
      for( let ci = 0; cMap[firstCh] && ci < cMap[firstCh].length; ci++ ) {
        const spokes = this.getSpokes( cMap[firstCh][ci], word.length )
        for( let sp = 0; sp < spokes.length; sp++ ) {
          // reduce the chars at the coords along the spoke to make the word
          const srch = spokes[sp].reduce((acc,rc) => {
            const [row,col] = [...rc]
            acc += this.grid[row][col]
            return acc
          },"")

          if( word === srch ) {
            found[word] = getStartEnd(spokes[sp])
          }
        }
      }
    })

    return found
  }
}

export default WordSearch
