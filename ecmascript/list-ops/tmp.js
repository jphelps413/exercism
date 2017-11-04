
  append(l){
    this.last().add(l.root())
    return this
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

