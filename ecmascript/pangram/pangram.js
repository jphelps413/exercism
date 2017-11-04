
class Pangram {
  constructor(text) {
    this.pan = text || ""
  }

  isPangram() {
    return this.pan.toLowerCase()
               .replace(/[^a-z]/g,'') // strip garbage
               .split('')             // split it
               .sort()                // to sort it
               .join('')              // rejoin and squeeze out dups
               .replace(/(.)(?=.*\1)/g, '') === 'abcdefghijklmnopqrstuvwxyz'
  }
}

export default Pangram
