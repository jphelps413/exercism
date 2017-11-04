class Sieve {
  constructor(s) {
    let sieve = new Array(s+1).fill(true); sieve[0] = sieve[1] = false

    for(let n = 2; n <= s; n++){
      if( sieve[n] ) {
        for(let f = n*2; f <= s; f+=n) sieve[f] = false
      }
    }

    this.primes = sieve.reduce((acc,b,n) => {
      if(b) acc.push(n)
      return acc
    },[])
  }
}

export default Sieve
