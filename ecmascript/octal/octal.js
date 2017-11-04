class Octal {
  constructor(oct) { this.oct = oct }
  toDecimal() {
    return this.oct.match(/[^0-7]/g) ? 0 :
           this.oct.split('')
                   .reverse()
                   .reduce((acc,t,i) => acc += Number(t)*8**i,0)
  }
}

export default Octal
