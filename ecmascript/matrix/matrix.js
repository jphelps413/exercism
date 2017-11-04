
class Matrix {
  constructor(mtx) {
    this.rows    = mtx.split('\n').map(line => line.split(' ').map(v=>+v))
    this.columns = this.rows[0].map((_,col) => this.rows.map(row => row[col]));
  }
}

export default Matrix
