class QuickUnionUF {
  static list = [];

  // maintain number of node in the tree
  static rootNodes = [];

  constructor(number) {
    this.list = [...Array(number).keys()];
    this.rootNodes = [...Array(number).keys()].map(() => 1);
  }

  __root(i) {
    while (i !== this.list[i]) {
      // flatten the tree
      this.list[i] = this.list[this.list[i]];

      i = this.list[i];
    }

    return i;
  }

  connected(p, q) {
    return this.__root(p) === this.__root(q);
  }

  union(p, q) {
    if (this.__root(p) === this.__root(q)) return;

    // Weighted Quick-union
    if (this.rootNodes[this.__root(p)] < this.rootNodes[this.__root(q)]) {
      this.list[this.__root(p)] = this.__root(q);
      this.rootNodes[this.__root(q)] += this.rootNodes[this.__root(p)];
    } else {
      this.list[this.__root(q)] = this.__root(p);
      this.rootNodes[this.__root(p)] += this.rootNodes[this.__root(q)];
    }
  }
}

/**
 * Algorithm   |init|union|find
 * Quick-union | N  |  N  | N
 *
 * Defect:
 * 1. Trees can get tall.
 * 2. Find too expensive (N array accesses)
 */

/**
 * Algorithm            |init|union|find
 * Weighted Quick-union | N  | lgN | lgN
 *
 * 1. takes time proportional to depth of p and q
 * 2. take constant time, given roots
 * 3. depth of any node x is at most lgN
 */

/**
 * Algorithm                                  |init| union| find
 * Weighted Quick-union with Path Compression | N  | lg*N | lg*N
 *
 * 1. iterate log function (lg*N)
 * 2. no linear time algorithm for the union find problem.
 * 3. WQUPC reduces time from 30 years to 6 seconds
 *
 */

module.exports = QuickUnionUF;
