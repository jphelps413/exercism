class Words {
  count(str){
    return str
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .reduce((acc,w) => {
        acc[w] = typeof acc[w] !== 'number' ? 1 : acc[w]+1
        return acc
      }, {})
  }
}

export default Words
