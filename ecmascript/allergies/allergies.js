const ALLERGENS = [ 'eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats', ]

class Allergies {
  constructor(n) {
    this.allergies = []
    for( let i = 0; i < ALLERGENS.length; i++ ) {
      if( n & 2**i ) this.allergies.push(ALLERGENS[i])
    }
  }
  list() { return this.allergies }
  allergicTo(allergy){ return this.allergies.indexOf(allergy) != -1 }
}

export default Allergies
