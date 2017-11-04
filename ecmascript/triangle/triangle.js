
class Triangle {
  constructor(a,b,c) {
    this.invalid = (a+b<=c)||(b+c<=a)||(c+a<=b)
    this.sides   = new Set([a,b,c])
  }

  kind() {
    if( this.invalid ) throw new Error('Nope')
    switch( this.sides.size ) {
      case 1: return 'equilateral'
      case 2: return 'isosceles'
      case 3: return 'scalene'
    }
  }
}

export default Triangle
