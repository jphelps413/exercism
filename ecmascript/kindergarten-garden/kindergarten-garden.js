class Garden {
  constructor(diagram,students=['alice','bob','charlie','david',
                                'eve','fred','ginny','harriet',
                                'ileana','joseph','kincaid','larry']) {

    const plants = {'C':'clover','G':'grass','R':'radishes','V':'violets'}
    const layout = diagram.match(/[A-Z]{1,2}/g)
    const offset = layout.length/2
    const kids   = students.sort().map(k=>k.toLowerCase())

    for( let i = 0; i < offset; i++ ){
      this[kids[i]] =
        [layout[i],layout[i+offset]].join('').split('').map(c=>plants[c])
    }
  }
}

export default Garden
