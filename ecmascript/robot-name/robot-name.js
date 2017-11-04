
let _used = new Set()

class Robot {
  constructor() { this.reset() }

  reset() {
    const randNum = (r) => Math.floor(Math.random()*r)
    const randChr = ( ) => String.fromCharCode(65+randNum(26))

    this._name = randChr()+randChr()+randNum(1000).toString().padStart(3,'0')
    if( _used.has(this._name) ) this.reset()
    _used.add( this._name )
  }

  get name() { return this._name }
}

export default Robot
