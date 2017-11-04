class Trinary {
  constructor(tri) { this.tri = tri }
  toDecimal() {
    return this.tri.match(/[^012]/g) ? 0 :
           this.tri.split('')
                   .reverse()
                   .reduce((acc,t,i) => acc += Number(t)*3**i,0)
  }
}

export default Trinary
