class Acronyms {
  static parse(str) {
    return str
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/\W/g, ' ')
      .split(/\W+/)
      .reduce((acc, word) => acc + word[0], '')
      .toUpperCase();
  }
}

export default Acronyms;
