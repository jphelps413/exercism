
class Cipher {
  constructor(key) {
    if( key !== undefined ) {
      if( key.length === 0 || key.match(/[^a-z]/)) throw new Error('Bad key')
    }
    this.wheel = 'abcdefghijklmnopqrstuvwxyz'
    this.base  = 'a'.charCodeAt()
    this.key   = key || this.randomKey()
  }

  randomKey( size = 100 ) {
    let rkey = ""
    for( let i = 0; i < size; i++ ) {
      rkey += this.wheel[Math.floor(Math.random()*this.wheel.length)]
    }
    return rkey
  }

  rotate(chin, rot) {
    const  shift = ((chin.charCodeAt() - this.base + rot) % this.wheel.length)
    return this.wheel[shift]
  }

  getKeyShift(i, encode = true) {
    const shift = this.key[i%this.key.length].charCodeAt() - this.base
    return encode ? shift : this.wheel.length - shift
  }

  coder(text, encode) {
    return [...text].map((p,idx) => {
      return this.rotate(p,this.getKeyShift(idx, encode))
    }).join('')
  }

  encode(clear) { return this.coder(clear,true ) }
  decode(clear) { return this.coder(clear,false) }
}

export default Cipher;
