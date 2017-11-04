
class Year {
  constructor( year ) {
    this.year = year  // store it for bookkeeping
    if     ( year %   4 !== 0 ) this.leap = false
    else if( year % 100 !== 0 ) this.leap = true
    else this.leap = (year % 400 === 0)
  }

  isLeap() { return this.leap }
}

export default Year;
