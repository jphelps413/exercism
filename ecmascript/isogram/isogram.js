
class Isogram {
  constructor(word){
    const clean = word.replace(/[- ]/g,'')
    this.itIs = (clean.length ===
                 clean.replace(/(.)(?=.*\1)/gi,'').length)
  }
  isIsogram() { return this.itIs }
}

export default Isogram


