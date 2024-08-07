class QuickFindUF {
  static list = [];
  constructor(number) {
    this.list = [...Array(number).keys()];
  }

  connected(p, q) {
    return this.list[p] === this.list[q];
  }

  union(p, q) {
    if (this.list[p] !== this.list[q]) {
      const pid = this.list[p];
      const qid = this.list[q];

      this.list.forEach((item, index) => {
        if (item === pid) {
          this.list[index] = qid;
        }
      });
    }
  }
}

/**
 * Algorithm  |init|union|find
 * Quick-find | N  |  N  | 1
 *
 * Defect: Union too expensive (Quadratic algorithms do not scale)
 */

module.exports = QuickFindUF;
