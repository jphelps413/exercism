
class Hamming {
  compute(s1,s2){
    if(s1.length !== s2.length)
      throw new Error('DNA strands must be of equal length.')

    let ham = 0
    for(let i = 0; i < s1.length; i++){
      if(s1[i] !== s2[i] ) ham+=1
    }
    return ham
  }
}

export default Hamming
