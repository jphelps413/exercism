
class PhoneNumber {
  constructor(num) {
    this.num = num.replace(/[ \.\-()]/g,'')
    this.num = this.num.match(/[^0-9]/) ? '' : this.num
    if( this.num.length === 11 ) this.num = this.num.replace(/^1/,'')
    if( this.num.length !== 10 ) this.num = null
  }

  number() {
    return this.num
  }
}

export default PhoneNumber
