class Series {
  constructor(digits){
    if( digits.match(/\D/ ) ) throw new Error('Invalid input.')
    this.digits = digits.split('').map(d=>+d)
  }

  largestProduct(w){
    if( w < 0 ) throw new Error('Invalid input.')
    if( w > this.digits.length ) throw new Error('Slice size is too big.')

    let mults = []
    for( let i = 0; i <= this.digits.length-w; i++ ){
      mults.push( this.digits.slice(i,i+w) )
    }
    return Math.max(...mults.map( d => d.reduce((acc,m) => acc *= m, 1 )))
  }
}

export default Series
