class Luhn {
  constructor(l){
    this.valid = (l.length <= 1? false :
      [...l.replace(/ /g,'')]
      .reverse()
      .reduce((acc,d,i) => acc += +(i%2===0 ? d : ((d*2)%9)),0) % 10 === 0)
  }
}

export default Luhn
