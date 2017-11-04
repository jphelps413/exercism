function proverb() {
  let qual = arguments[arguments.length-1].qualifier || ''
  if(qual) qual+=' '

  const forWant = (w,l) => { return `For want of a ${w} the ${l} was lost.\n` }
  let pverb = ''
  for(let i = 0; i < arguments.length-(qual?2:1); i++){
    pverb += forWant(arguments[i],arguments[i+1])
  }
  return pverb+`And all for the want of a ${qual}${arguments[0]}.`
}

export default proverb
