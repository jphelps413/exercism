const isPythagorean = (a,b,c) => { return a*a + b*b === c*c }

class Triplets {
  constructor(params){
    this.trips = []

    let min = params.minFactor || 1
    let max = params.maxFactor || this.min+1
    let sum = params.sum || 0

    for(let a = min; a < max; a++){
      for(let b = a+1; b <=max; b++){
        for(let c = b+1; c <= max; c++){
          if( isPythagorean(a,b,c) && (!sum || a+b+c === sum) ){
            this.trips.push( new Triplet(a,b,c) )
          }
        }
      }
    }
  }
}

class Triplet {
  constructor(a,b,c) {
    this._sum = a+b+c
    this._prd = a*b*c
    this._isTrip = isPythagorean(a,b,c)
  }

  sum(){ return this._sum }
  product(){ return this._prd }
  isPythagorean(){ return this._isTrip }

  static where(params){ return new Triplets(params).trips }
}

export default Triplet
