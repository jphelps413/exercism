const encode = (str) => {
  const CIPHER = 'zyxwvutsrqponmlkjihgfedcba'
  const NEWORD = (c) => c.charCodeAt(0)-97 // 97 = 'a' ordinal
  return str
    .toLowerCase()
    .match(/[\w\d]/g)
    .reduce((acc,l,i) => {
      acc += (l.match(/\d/) ? l : CIPHER[NEWORD(l)]) + ((i+1)%5===0?' ':'')
      return acc
    },[]).trim()
}

module.exports = { encode }
