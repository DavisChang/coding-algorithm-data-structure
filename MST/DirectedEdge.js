class DirectedEdge {
  constructor(v, w, weight) {
    this.v = v;
    this.w = w;
    this.weight = weight;
  }

  from() {
    return this.v;
  }

  to() {
    return this.w;
  }

  getWeight() {
    return this.weight;
  }
}

module.exports = DirectedEdge;
