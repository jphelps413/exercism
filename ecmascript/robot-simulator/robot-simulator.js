
const compass  = [
  { label: 'north', dx: 0, dy: 1}, { label: 'east',  dx: 1, dy: 0},
  { label: 'south', dx: 0, dy:-1}, { label: 'west',  dx:-1, dy: 0},
]

class Robot {
  constructor() { this.place({direction:'north',x:0,y:0}) }

  orient(dir) {
    const dIdx = compass.findIndex((d) => d.label === dir)
    if( dIdx === -1 ) throw 'Invalid Robot Bearing'
    this.dirIdx  = dIdx
  }

  get bearing()     { return compass[this.dirIdx].label }
  get coordinates() { return [this.x,this.y] }

  turn(d)     { this.dirIdx  = (this.dirIdx+d) % compass.length }
  turnRight() { this.turn(1) }
  turnLeft()  { this.turn(3) }

  at(x,y) { [this.x,this.y] = [x,y] }
  place({x,y,direction}) {
    this.at(x,y)
    this.orient(direction)
  }

  instructions(moves) {
    return [...moves].map(m => {
      return ({ 'A':'advance', 'L':'turnLeft', 'R':'turnRight', }[m])
    })
  }
  evaluate(ins) { this.instructions(ins).map(i => this[i]()) }

  advance() {
    this.x += compass[this.dirIdx].dx
    this.y += compass[this.dirIdx].dy
  }
}

export default Robot
