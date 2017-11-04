const jcopy = (o) => JSON.parse(JSON.stringify(o||[]))

class School {
  constructor() { this.students = {} }

  add( name, grade ) {
    this.students[grade] = this.students[grade] || []
    this.students[grade].push(name)
    this.students[grade].sort()
  }

  roster( ) { return jcopy(this.students) }
  grade (g) { return jcopy(this.students[g]) }
}

export default School
