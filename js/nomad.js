class Nymand {
  constructor(name) {
    this.name = name;
  }

  roamAndRamble() {
    return `${this.name} roams around aimlessly, rambling about the humor of life.`;
  }
}

class Nomad extends Nymand {
  wanderlustWittiness() {
    return `${this.name} embodies wanderlust, sprinkled with a dash of witty banter.`;
  }
}
