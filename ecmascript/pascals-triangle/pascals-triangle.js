
class Triangle {
  constructor(count) {
    this.rows = [[1]]
    for( let n = 1; this.rows.length < count; n++ ) {
      let row = [1]
      for( let k = 0; k < n; k++ ) {
        row.push(row[k] * (n-k) / (k+1))
      }
      this.rows.push(row)
    }
    this.lastRow = this.rows[this.rows.length-1]
  }

}

export default Triangle
