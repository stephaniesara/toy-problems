// CTCI 8.6

// pseudocode:
const towersOfHanoi = (nDisks, origin, destination, buffer) => {
  if (n <= 0) {
    return;
  }
  towersOfHanoi(nDisks - 1, origin, buffer);
  moveSingleDisk(origin, destination); // move top disk from one peg to the other
  towersOfHanoi(nDisks - 1, buffer, destination);
};
