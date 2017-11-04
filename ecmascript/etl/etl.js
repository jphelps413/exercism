
const transform = (old) => {
  let xform = {}
  Object.keys(old).forEach( key => {
    old[key].forEach( letter => { xform[letter.toLowerCase()] = +key })
  })
  return xform
}

module.exports = transform 
