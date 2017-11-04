class Prime {

  isPrime(n) { // standard prime check
    for(let i = 2, end = Math.floor(Math.sqrt(n)); i<=end; i++ ){
      if(n % i === 0) return false
    }
    return true
  }

  nextPrime(n) {
    while(true) {
      n += 1
      if( this.isPrime(n) ) return n
    }
  }

  nth(tgt) {
    if( tgt === 0 ) throw new Error('Prime is not possible')
    let current = 1
    while( tgt-- ) { current = this.nextPrime( current ) }
    return current
  }
}

export default Prime
