class Heap {
  constructor() {
    this.values = [];
  }

  add(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let cur = this.values.length - 1;

    while (cur > 0) {
      let p = Math.floor((cur - 1) / 2); // Find parent index
      if (this.values[p] <= this.values[cur]) break; // If parent is smaller or equal, stop

      // Swap values with parent
      [this.values[p], this.values[cur]] = [this.values[cur], this.values[p]];

      cur = p; // Move up
    }
  }

  getMin() {
    if (!this.values.length) return null; // Handle empty heap

    let minVal = this.values[0];
    let last = this.values.pop(); // Remove the last element
    if (this.values.length > 0) {
      this.values[0] = last; // Replace root with last
      this.bubbleDown(); // Fix the heap
    }
    return minVal; // Return the minimum
  }

  bubbleDown() {
    let cur = 0;

    while (true) {
      let l = 2 * cur + 1; // Left child index
      let r = 2 * cur + 2; // Right child index
      let swap = null; // Index to swap with

      // Check left child
      if (l < this.values.length) {
        if (this.values[l] < this.values[cur]) {
          swap = l;
        }
      }

      // Check right child
      if (r < this.values.length) {
        if (
          (swap === null && this.values[r] < this.values[cur]) ||
          (swap !== null && this.values[r] < this.values[l])
        ) {
          swap = r;
        }
      }

      if (swap === null) break; // If no swap is needed, we're done

      // Swap the current node with the smaller child
      [this.values[cur], this.values[swap]] = [
        this.values[swap],
        this.values[cur],
      ];

      cur = swap; // Move down
    }
  }
}
