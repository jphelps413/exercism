
class PrimeFactors {

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

  for(tgt) {
    let rem = tgt, div = 2, facts = []
    while( rem > 1 ) {
      if(rem % div === 0) {
        facts.push(div)
        rem /= div
      }
      else div = this.nextPrime(div)
    }
    return facts
  }
}

export default PrimeFactors
