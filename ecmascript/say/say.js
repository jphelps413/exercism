class Say {

  toWords(number,recursed=false){
    if(number == 0){ return recursed ? "" :"zero" }

    const lows = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen", "eighteen", "nineteen"]
    if(number < 20) return lows[number]

    const tens = ["","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]  
    let   rslt = lows[Math.floor(number/100)]

    if( rslt != "" ){
      return `${rslt + " hundred " + this.toWords(number%100,true)}`.trim()
    }

    rslt += ` ${tens[Math.floor(number/10)]}`

    return `${rslt}-${this.toWords(number%10,true)}`
                                   .replace(/[ -]*$/,'')
                                   .trim()
  }

  inEnglish(n) {
    if( n < 0 || n > 999999999999 )
      throw new Error('Number must be between 0 and 999,999,999,999.')

    if( !n ) return 'zero'      // cheat!

    const mag = [' billion ',' million ',' thousand ','']

    return `${n}`               // number to string
      .padStart(12,' ')         // pad to billions
      .match(/.{3}/g)           // turn into 3 character chunks
      .map(g=>+g)               // and convert those to integers
      .reduce((acc,num,i) => acc += (num ? this.toWords(num)+mag[i] : ''),'')
      .replace('  ','').trim()  // finally, eliminate the trash
  }
}

export default Say
