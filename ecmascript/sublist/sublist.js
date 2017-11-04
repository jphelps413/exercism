// CAVEAT: IMHO, turning an array into a string is not a production solution,
//         but it meets the simple test requirements of this problem.
class List {
  constructor(ary){
    this.str = (ary||[]).join('_')
  }

  compare(that){
    if(this.str === that.str ) return 'EQUAL'
    if(!this.str || !that.str ){
      return this.str.length > that.str.length ? 'SUPERLIST' : 'SUBLIST'
    }
    if( this.str.indexOf(that.str) > -1 ) return 'SUPERLIST'
    if( that.str.indexOf(this.str) > -1 ) return 'SUBLIST'
    return 'UNEQUAL'
  }
}

export default List
