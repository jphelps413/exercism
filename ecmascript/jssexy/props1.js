
let wtf = {
  prop1: 1,
  prop2: 2,
  prop99: 99,
  funky: function() {
    console.log('wtf',this.prop1,this.prop2,this.prop99)
  }
}

for( let item in wtf ){
  console.log(item)
}
