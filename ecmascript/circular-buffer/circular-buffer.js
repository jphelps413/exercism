class BufferFullError  extends Error {}
class BufferEmptyError extends Error {}

class CircularBuffer {
  constructor(size=10){
    this.mod = size
    this.clear()
  }

  nextIdx(idx) { return (idx+1)%this.mod }
  isFull() { return this.buffer[this.wdx] !== undefined }
  clear() {
    this.rdx = this.wdx = 0
    this.buffer = []
  }

  read() {
    if( !this.buffer[this.rdx] ) throw new BufferEmptyError()
    const v = this.buffer[this.rdx]
    this.buffer[this.rdx] = undefined
    this.rdx = this.nextIdx(this.rdx)
    return v
  }

  write(v, force = false) {
    if( !v ) return
    if( force ){
      if( this.isFull() ) this.rdx = this.nextIdx(this.rdx)
    }
    else if( this.isFull() ) throw new BufferFullError()
    this.buffer[this.wdx] = v
    this.wdx = this.nextIdx(this.wdx)
  }

  forceWrite(v) { this.write(v,true) }
}

export default function(size) {
  return new CircularBuffer(size)
}
