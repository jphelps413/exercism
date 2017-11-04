class CustomSet {
  constructor(stuff) {
    this._set = {}
    for( let i = 0; stuff && i < stuff.length; i++ ) {
      this._set[stuff[i]] = stuff[i]
    }
  }

  add(item) {
    this._set[item] = item
    return this
  }
  contains(item) { return this._set[item] !== undefined }
  disjoint(that) { return !Object.keys(this._set).some(e => that._set[e]) }
  empty() { return this.length() === 0 }
  eql(that) { return this.subset(that) && that.subset(this) }

  difference(that) {
    if( this.empty() || that.empty() ) return this

    let diff = new CustomSet()
    Object.keys(this._set).forEach( key => {
      if( !this._set[key] || !that._set[key] ) diff.add(key)
    })
    return diff
  }

  intersection(that) {
    if( this.empty() ) return this
    if( that.empty() ) return that

    let intr = new CustomSet()
    Object.keys(this._set).forEach( key => {
      if( this._set[key] && that._set[key] ) intr.add(key)
    })
    return intr
  }

  length() { return Object.keys(this._set).length }
  subset(that) { return Object.keys(this._set).every(e => that._set[e]) }

  union(that) {
    if( this.empty() && that.empty() ) return this

    let uniq = new CustomSet()
    Object.keys(this._set).forEach( k => uniq._set[k] = this._set[k])
    Object.keys(that._set).forEach( k => uniq._set[k] = that._set[k])
    return uniq
  }
}

export default CustomSet
