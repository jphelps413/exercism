
class Bob {
  hey(message) {
    if(!message.replace(/ /g,'')) return 'Fine. Be that way!'

    if(message.match(/[a-z]/i) &&
       message === message.toUpperCase()) return 'Whoa, chill out!'

    if(message.match(/\?$/)) return 'Sure.'

    return 'Whatever.'
  }
}

export default Bob;

