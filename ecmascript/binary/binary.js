
class Binary {
  constructor(bin) {
    this.decimal = ( !/^[01]+$/.test(bin) ? 0 :
      [...bin].reverse().reduce((d,v,i) => d+(+v*Math.pow(2,i)),0) )
  }

  toDecimal() { return this.decimal }
}

export default Binary
