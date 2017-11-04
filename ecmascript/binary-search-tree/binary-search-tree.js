class BinarySearchTree {
  constructor(d) { this.data = d }

  insert(d) {
    const dir = (d <= this.data ? 'left' : 'right')
    this[dir] ? this[dir].insert(d) : this[dir] = new BinarySearchTree(d)
  }

  each(fn) {
    if( this.left ) this.left.each(fn)
    fn( this.data )
    if( this.right) this.right.each(fn)
  }
}

export default BinarySearchTree
