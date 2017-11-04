
class Anagram {
  constructor(base) { this.base = base.toLowerCase() }

  matches(words) {
    if( typeof arguments[0] === 'string' ) return this.matches([...arguments])

    const gramify = (w) => [...w.toLowerCase()].sort().join('')

    return words.reduce((anagrams,word) => {
      if( word.toLowerCase() != this.base &&
          gramify(word) === gramify(this.base) ) anagrams.push(word)
      return anagrams
    },[])
  }
}

export default Anagram
