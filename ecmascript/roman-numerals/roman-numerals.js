export default function(number) {
  const friends= [1000, 900,500, 400,100,  90, 50,  40, 10,   9,  5,   4, 1 ]
  const romans = [ 'M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  let   countrymen = number
  let   ears   = ''
  for( let i = 0; i < friends.length; i++ ){
   while( Math.floor(countrymen/friends[i]) > 0) {
     ears += romans[i]
     countrymen -= friends[i]
   }
  }
  return ears
}
