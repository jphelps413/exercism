
class Raindrops {
  convert(d) {
    return `${d%3===0?'Pling':''}${d%5===0?'Plang':''}${d%7===0?'Plong':''}` ||
                                                                      `${d}`
  }
}

export default Raindrops
