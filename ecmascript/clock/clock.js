class Clock {
  constructor(hours=0,minutes=0) {
    this.h = ((hours+Math.floor(minutes/60))%24)
    this.h+= this.h<0?24:0
    this.m = minutes%60
    this.m+= this.m<0?60:0
  }

  plus (minutes) { return new Clock(this.h,this.m+minutes) }
  minus(minutes) { return this.plus(-minutes) }
  equals(that)   { return this.h === that.h && this.m === that.m }
  
  toString() {
    return `${this.h}`.padStart(2,0)+':'+`${this.m}`.padStart(2,0)
  }
}

export default function(hours=0,minutes=0) {
  return new Clock(hours,minutes)
}
