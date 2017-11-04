
function Plant(country='Mexico',organic=true){
  this.country = country
  this.isOrganic = organic
  this.amIOrganic = () => {
    if(this.isOrganic) {
      console.log('I am organic, Baby!')
    }
    return this.isOrganic
  }
  this.wtf = () => {
    console.log('WTF:'+JSON.stringify(this))
  }
}

Plant.prototype.showNameAndColor = function() {
  console.log("I am a "+this.name+" and my color is "+this.color)
}

Plant.prototype.fatArrow = () => {
  console.log('Valid syntax, bit "this" is not BOUND')
}

function Fruit(name,color) {
  this.name = name
  this.color = color
  this.srsly = () => {
    return JSON.stringify(this)
  }
}
Fruit.prototype = new Plant()

let wtf = new Fruit('Banana','Yellow')

wtf.toString()

Plant.prototype.funcP = function() {
  console.log('funcP:'+this.amIOrganic())
}

Fruit.prototype.funcF = function() {
  console.log('funcF:'+this.srsly())
}
