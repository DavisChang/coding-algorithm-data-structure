class Edge {
  constructor(v, w, weight) {
    this.v = v;
    this.w = w;
    this.weight = weight;
  }

  either() {
    return this.v;
  }

  other(v) {
    if (v === this.v) {
      return this.w;
    }
    return this.v;
  }

  compareTo(edge) {
    if (this.weight < edge.weight) {
      return -1;
    } else if (this.weight > edge.weight) {
      return 1;
    } else {
      return 0;
    }
  }
}

module.exports = Edge;
