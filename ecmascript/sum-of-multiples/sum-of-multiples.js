const SumOfMultiples = (ary) => {
  const mults = ary

  return {
    to(lim) {
      let sum = 0
      for( let n = mults[0]; n < lim; n++ ) {
        for( let m = 0, done = false; !done && m < mults.length; m++ ) {
          if( n%mults[m] === 0 ) {
            sum += n
            done = true // avoid adding in twice
          }
        }
      }
      return sum
    }
  }
}

export default SumOfMultiples
