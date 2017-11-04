class Hexadecimal {
  constructor(hex) { this.hex = hex.toLowerCase() }

  toDecimal(){
    const h2d = (h) => { return '0123456789abcdef'.indexOf(h) }
    return this.hex.match(/[^[0-9a-f]/g) ? 0 :
           this.hex.split('')
                   .reverse()
                   .reduce((acc,h,e) => acc += Number(h2d(h))*16**e,0)
  }
}

export default Hexadecimal
