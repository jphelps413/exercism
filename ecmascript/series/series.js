class Series {
  constructor(series){
    this.digits = series.split('').map(n => +n)
  }

  slices(w){
    if(w > this.digits.length) throw new Error('Slice size is too big.')

    let rslt = []
    for( let i = 0; i <= this.digits.length-w; i++ ){
      rslt.push( this.digits.slice(i,i+w) )
    }
    return rslt
  }
}

export default Series
