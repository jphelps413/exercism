const encode = (str) => {
  if(str === '') return str
  return str
    .match(/(.)\1*/g)
    .reduce((acc,s) => acc += (s.length === 1 ? s :`${s.length+s[0]}`),[])
}

const decode = (str) => {
  if(str === '') return str
  return str.match(/\d*\D/g).reduce((acc,s) => {
    const [w,c] = s.match(/\d+|\D/g)
    return acc += c === undefined ? w : c.padStart(+w,c)
  },'')
}

module.exports = { encode, decode }
