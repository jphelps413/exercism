
class Node {
  constructor(data, prev = null, next = null) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor() { this.reset() }

  reset() { this.len = this.head = this.tail = null }
  count() { return !this.len ? 0 : this.len }

  delete(val) {
    for( let p = this.head; p; p = p.next ) {
      if( p.data === val ) {
        if( p.prev ) { p.prev.next = p.next }
        if( p.next ) { p.next.prev = p.prev }
        this.len-=1
      }
    }
  }

  // insert value at back
  push(item) {
    let node = new Node(item)
    if( !this.head ) {
      this.head = this.tail = node
    } else {
      this.tail.next = node
      node.prev      = this.tail
      this.tail      = node
    }
    return this.len+=1
  }

  // insert value at front
  unshift(item) {
    let node = new Node(item)
    if( !this.head ) {
      this.head = this.tail = node
    } else {
      this.head.prev = node
      node.next      = this.head
      this.head      = node
    }
    return this.len+=1
  }

  // remove value at back
  pop() {
    if( this.tail === null ) return
    const data = this.tail.data
    if( this.tail === this.head ){
      this.reset()
    } else {
      this.tail      = this.tail.prev
      this.tail.next = null
      this.len-=1
    }
    return data
  }

  // remove value at front
  shift() {
    if( this.head === null ) return
    const data = this.head.data
    if( this.head === this.tail ){
      this.reset();
    } else {
      this.head      = this.head.next
      this.head.prev = null
      this.len-=1
    }
    return data
  }
}

export default LinkedList
