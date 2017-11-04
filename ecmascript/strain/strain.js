const doit = (coll,pred,cond) => {
  let rslt = []
  for( let i = 0; i < coll.length; i++ ){
    if( pred(coll[i]) === cond ) rslt.push(coll[i])
  }
  return rslt
}

const keep    = (coll,pred) => { return doit(coll,pred,true) }
const discard = (coll,pred) => { return doit(coll,pred,false) }

module.exports = { keep, discard }
