
class SpaceAge {
  constructor(age) {
    this.seconds = age
  }

  onEarth(factor = 1.0) {
    return +(this.seconds/86400/(365.25*factor)).toFixed(2)
  }

  onMercury() { return this.onEarth(0.2408467) }
  onVenus  () { return this.onEarth(0.61519726)}
  onMars   () { return this.onEarth(1.8808158) }
  onJupiter() { return this.onEarth(11.862615) }
  onSaturn () { return this.onEarth(29.447498) }
  onUranus () { return this.onEarth(84.016846) }
  onNeptune() { return this.onEarth(164.79132) }
}

export default SpaceAge
