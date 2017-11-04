
const rdigits = (s) => (typeof s === "number") ? rdigits(`${s}`) :
                        s.split('').map(Number).reverse()
const rjoin = (a) => a.reverse().join('').replace(/^0+/, '')

class Grains {
  multiply(s1,s2){
    let f1 = rdigits(s1), f2 = rdigits(s2)
    let fx = new Array(f1.length+f2.length).fill(0)
    f2.forEach((m2,exp) => {
      f1.forEach((m1,i1) => fx[i1]+=m1*m2*Math.pow(10,exp))
      fx.forEach((n,idx) => {
        if(!fx[idx] || idx == fx.length-1) return
        fx[idx]   = n%10
        fx[idx+1]+= Math.floor(n/10)
      })
    })  
    return rjoin(fx)
  }

  // this method needs a better greater than test
  subtract(minuend,subtrahend){
    let m = rdigits(minuend), s = rdigits(subtrahend)
    if(s.length > m.length) return( `-${this.subtract(subtrahend,minuend)}` )
    for( let i = 0; i < s.length; i++ ){
      if(m[i] >= s[i]) {
        m[i] -= s[i] // no need to borrow
      }
      else {
        m[i] = 10+m[i] - s[i]
        m[i+1] -= 1
      }
    }
    return rjoin(m)||'0'
  }

  pow(b,e){
    if(e===0) return '1'
    if(e===1) return `${b}`

    let tot = `${b}`
    for(let i = 0; i < e-1; i++) {
      tot = this.multiply(tot,b)
    }
    return tot
  }

  square(n) { return this.pow(2,n-1) }
  total() { return this.subtract(this.pow(2,64),1) }
}

export default Grains
