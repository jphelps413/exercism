
class ArgumentError extends Error { constructor(e) { super(e) } }

class WordProblem {
  constructor(problem) {
    this._problem = problem
    this._answer  = 0
  }

  parse(question) {
    const problem = question.match(/What is (-?\d+\s+\S+.*)\?$/)
    if( !problem ) throw new ArgumentError()
    let cmd = problem[1].replace(/ by/g,'').split(' ').reverse() // because pop
    let acc = +cmd.pop()
    while( cmd.length > 0 ) {
      switch( cmd.pop() ){
        case 'plus'       : acc += +cmd.pop(); break
        case 'minus'      : acc -= +cmd.pop(); break
        case 'multiplied' : acc *= +cmd.pop(); break
        case 'divided'    : acc /= +cmd.pop(); break
        case 'cubed'      : acc = Math.pow(acc,3); break

        default: throw new ArgumentError(); break
      }
    }
    return acc
  }

  answer() {
    return this.parse(this._problem)
  }
}

module.exports = { ArgumentError, WordProblem }
