
class SecretHandshake {
  constructor(bits) {
    if( isNaN( bits )) throw new Error('Handshake must be a number')

    const shakes = ['wink','double blink','close your eyes','jump']
    this.cmds = []
    for( let bit = 0; bit < shakes.length; bit++ ) {
      if( bits&Math.pow(2,bit) ) { this.cmds.push( shakes[bit] ) }
    }
    if( bits&0x10 ) this.cmds = this.cmds.reverse()
  }
  commands() { return this.cmds }
}

export default SecretHandshake
