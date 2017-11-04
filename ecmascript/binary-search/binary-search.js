class BinarySearch {
  constructor(ary) {
    for( let i = 0; i < ary.length-1; i++ ) if(ary[i] > ary[i+1]) return
    this.array = ary
  }

  indexOf(v,lo=0,hi=this.array.length-1,md=Math.floor((hi+lo)/2)) {
    if(this.array[md] === v) return md
    if(lo===hi) return -1
    return( v < this.array[md] ? this.indexOf(v,lo,md) :
                                 this.indexOf(v,md+1,hi))
  }
}

export default BinarySearch
