var gameController = {
  name    :'gameC',
  scores  :[20, 34, 55, 46, 77],
  avgScore:null,
  players :[
    {name:"Tommy", playerID:987, age:23},
    {name:"Pau", playerID:87, age:33}
  ]
}
var appController = {
  name    :'appC',
  scores  :[900, 845, 809, 950],
  avgScore:null,
  avg     :function () {
    console.log('appC')
    var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {
      return prev + cur;
    });
    console.log(`sum ${sumOfScores}`)
    this.avgScore = sumOfScores / this.scores.length;
    console.log(this.avgScore,this.name)
    return this.avgScore
  }
}

//gameController.avgScore = appController.avg();
