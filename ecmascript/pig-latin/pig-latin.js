class PigLatin {
  translate(words) {
    const pigOut = (word,rex) => {
      return word.split(new RegExp(rex)).reverse().join('')+'ay'
    }

    return words.split(' ').map(pig => {
      if( pig.match(/^[aeiou]/)){
        pig += 'ay'
      }
      else if( pig.match(/.*qu/) ) {
        pig = pigOut( pig, "(.*qu)" )
      }
      else {
        pig = pigOut( pig, "(^[bcdfghjklmnpqrstvwxyz]*)" )
      }
      return pig
    }).join(' ')
  }
}

export default PigLatin
