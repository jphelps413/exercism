
class Transcriptor {
  toRna(dna) {
    const D2R = {'G':'C', 'C':'G',
                 'T':'A', 'A':'U'}
    return [...dna].map(d => {
      if( D2R[d] === undefined) throw new Error('Invalid input DNA.')
      return D2R[d]
    }).join('')
  }
}

export default Transcriptor;
