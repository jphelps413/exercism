class Squares {
  constructor(n) {
    this.squareOfSums = ((n*(n+1))/2)**2
    this.sumOfSquares = 0
    for( let i = 1; i <= n; i++ ){ this.sumOfSquares += i**2 }
    this.difference = this.squareOfSums - this.sumOfSquares
  }
}

export default Squares
