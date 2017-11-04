export default function(word) {
  if( !word || word === '' ) return 0
  const lVals = { 1:'AEIOULNRST', 2:'DG', 3:'BCMP', 4:'FHVWY', 5:'K', 8:'JX', 10:'QZ', }
  return word
    .toUpperCase()
    .split('')
    .reduce((acc,l) => {
      return acc += +Object.keys(lVals).filter((score) => {return lVals[score].includes(l)})
  },0)
}
