/**
Problem: Optimizing Beer Production
A brewery produces two types of beer: Lager and Stout. The goal is to maximize profit while considering the availability of resources like malt, hops, and labor.Problem Details:
Profit per barrel:
  Lager: $10
  Stout: $15

Resource Requirements per barrel:
Malt:
  Lager: 3 units
  Stout: 4 units
Hops:
  Lager: 1 unit
  Stout: 2 units
Labor (in hours):
  Lager: 2 hours
  Stout: 3 hours

Resource Constraints:
  Total malt available: 60 units
  Total hops available: 30 units
  Total labor available: 36 hours
  
The objective is to determine how many barrels of Lager and Stout the brewery should produce to maximize profit, subject to the resource constraints.
 */

class SimplexSolver {
  constructor(cost, constraints, rhs) {
    this.cost = cost;
    this.constraints = constraints;
    this.rhs = rhs;
    this.rows = constraints.length;
    this.cols = cost.length;
    this.tableau = this.createTableau();
  }

  createTableau() {
    let tableau = [];

    // Add constraints rows
    for (let i = 0; i < this.rows; i++) {
      tableau.push([...this.constraints[i], this.rhs[i]]);
    }

    // Add the cost row
    tableau.push([...this.cost.map((c) => -c), 0]); // Negate cost for minimization

    return tableau;
  }

  pivot(column, row) {
    const pivotElement = this.tableau[row][column];

    // Scale the pivot row
    for (let j = 0; j < this.tableau[0].length; j++) {
      this.tableau[row][j] /= pivotElement;
    }

    // Update other rows
    for (let i = 0; i < this.tableau.length; i++) {
      if (i !== row) {
        const factor = this.tableau[i][column];
        for (let j = 0; j < this.tableau[i].length; j++) {
          this.tableau[i][j] -= factor * this.tableau[row][j];
        }
      }
    }
  }

  findPivotColumn() {
    const lastRow = this.tableau.length - 1;
    let minValue = 0;
    let pivotColumn = -1;

    for (let j = 0; j < this.cols; j++) {
      if (this.tableau[lastRow][j] < minValue) {
        minValue = this.tableau[lastRow][j];
        pivotColumn = j;
      }
    }

    return pivotColumn >= 0 ? pivotColumn : null;
  }

  findPivotRow(pivotColumn) {
    let minRatio = Infinity;
    let pivotRow = -1;

    for (let i = 0; i < this.rows; i++) {
      const ratio = this.tableau[i][this.cols] / this.tableau[i][pivotColumn];
      if (ratio >= 0 && ratio < minRatio) {
        minRatio = ratio;
        pivotRow = i;
      }
    }

    return pivotRow >= 0 ? pivotRow : null;
  }

  solve() {
    while (true) {
      const pivotColumn = this.findPivotColumn();
      if (pivotColumn === null) break; // Optimal solution found

      const pivotRow = this.findPivotRow(pivotColumn);
      if (pivotRow === null) throw new Error("Unbounded solution");

      this.pivot(pivotColumn, pivotRow);
    }

    return this.getSolution();
  }

  getSolution() {
    const solution = Array(this.cols).fill(0);
    for (let i = 0; i < this.rows; i++) {
      const basicVarIndex = this.tableau[i].findIndex(
        (x, j) => j < this.cols && x === 1
      );
      if (basicVarIndex >= 0) {
        solution[basicVarIndex] = this.tableau[i][this.cols];
      }
    }
    const optimalValue = this.tableau[this.tableau.length - 1][this.cols];
    return { solution, optimalValue: -optimalValue }; // Negate the optimal value for minimization
  }
}

// Problem Definition

const cost = [10, 15]; // Profit coefficients for Lager and Stout

// [Lager, Stout]
const constraints = [
  [3, 4], // Malt constraint coefficients
  [1, 2], // Hops constraint coefficients
  [2, 3], // Labor constraint coefficients
];

const rhs = [60, 30, 36]; // Three Resource Constraints

const simplex = new SimplexSolver(cost, constraints, rhs);
const result = simplex.solve();

console.log(
  "Optimal Solution:",
  result.solution.map((x) => Math.round(x * 100) / 100)
);
console.log("Optimal Value:", Math.round(result.optimalValue * 100) / 100);
