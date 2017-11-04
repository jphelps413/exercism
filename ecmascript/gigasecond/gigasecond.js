
class Gigasecond {
  constructor(date) {
    this.born = date
  }

  date() {
    return new Date( this.born.valueOf()+1000000000000 )
  }
}

export default Gigasecond;
