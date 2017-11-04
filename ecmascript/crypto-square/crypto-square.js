class Crypto {
  constructor(clear) {
    this.norm = clear.toLowerCase().match(/\w/g).join('')
    this.cols = Math.ceil( Math.sqrt( this.norm.length ))
    const rex = new RegExp(`(\\w{${this.cols}})`,'g')
    this.plain= this.norm.replace(rex,'$1 ').trim().split(' ')

    this.cipher = []
    for( let r = 0; r < this.cols; r++ ) {
      this.cipher[r] = ""
      for( let c = 0; c < this.plain.length; c++ ) {
        this.cipher[r] += this.plain[c][r] || " "
      }
    }
  }

  size() { return this.cols }

  normalizePlaintext() { return this.norm }
  plaintextSegments()  { return this.plain }
  ciphertext()         { return this.cipher.join('').replace(/ /g,'') }
}

export default Crypto
