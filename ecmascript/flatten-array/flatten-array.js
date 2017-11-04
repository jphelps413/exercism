class Flattener {
  flatten(ary,flats=[]){
    for(let i = 0; i < ary.length; i++){
      if(ary[i] === null || ary[i] === undefined) continue
      if( typeof ary[i] === 'object' ){
        this.flatten(ary[i],flats)
      }
      else {
        flats.push( ary[i] )
      }
    }
    return flats
  }
}

export default Flattener
