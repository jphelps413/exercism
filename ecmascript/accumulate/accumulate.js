const accumulate = (coll,pred) => {
  let rslt = []
  for( let i = 0; i < coll.length; i++ ) {
    rslt.push( pred(coll[i]) )
  }
  return rslt
}

export default accumulate
