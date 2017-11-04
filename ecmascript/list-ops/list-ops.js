
class Node {
  constructor(data, prev = null) {
    this.data = data
    this.next = null
    if( prev ) prev.next = this
  }

  last() {
    let p = this
    while(p.next) p = p.next
    return p
  }
}

class List {
  constructor(ary) {
    let runner = this._root = new Node('_root_')
    if(ary) ary.forEach( item => runner = new Node(item,runner) )
  }
  root() { return this._root }
  first(){ return this.root().next }
  last() { return this.root().last() }

  get values(){
    let vals = []
    for( let p = this.first(); p; p = p.next ){
      vals.push(p.data)
    }
    return vals
  }

  *iter() {
    for( let p = this.first(); p; p = p.next ){
      yield p.data
    }
  }

  get ivals() {
    let vals =[], it = this.iter(), p = it.next()
    while( !p.done ){
      vals.push(p.value)
      p = it.next()
    }
    return vals
  }

  append(list){
    let to = this.last()
    for( let from = list.first(); from; from = from.next ){
      to = new Node(from.data,to)
    }
    return this
  }

  concat(list){
    return new List(this.values).append(list)
  }

  length(){
    return this.values.length
  }

  filter(func){
    let els = []
    this.values.forEach( el => {
      if( arguments[0](el) ) els.push(el)
    })
    return new List(els)
  }

  map(){
    let els = []
    this.values.forEach( el => els.push( arguments[0](el)) )
    return new List(els)
  }

  reverse(){
    // is it cheating to use Array.reverse here?
    //   return new List(this.values.reverse())
    const vals = this.values
    let   rary = []
    for( let i = vals.length; i-- > 0; ){
      rary.push(vals[i])
    }
    return new List(rary)
  }

  foldl(func){
    let acc = arguments[1]
    this.values.forEach(val => acc = arguments[0](acc,val))
    return acc
  }

  foldr(){
    let acc = arguments[1]
    this.reverse().values.forEach(val => acc = arguments[0](acc,val))
    return acc
  }
}

export default List
