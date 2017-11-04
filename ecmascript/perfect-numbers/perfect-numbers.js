class PerfectNumbers {
  classify(n){
    if(n<=0) throw Error('Classification is only possible for natural numbers.')

    let aliquot = 0
    for( let d = 1; d <= n/2; d++ ){
      if( n%d === 0 ) aliquot+=d
    }
    return aliquot === n ? 'perfect' : (aliquot < n ? 'deficient' : 'abundant')
  }
}

export default PerfectNumbers
