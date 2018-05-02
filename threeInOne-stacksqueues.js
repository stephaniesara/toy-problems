// CTCI 3.1
// Describe how you could use a single arr to implement three stacks

// One approach: fixed sizes

// 1) could divide arr into n sections, one for each stack

// 2) OR could say that every n elems belongs to a single stack
// init: init n, init storage, init ind for each num up to n
// push: add elem at that stack's pointer; increment pointer by n
// pop: if size > 0, decrement ind by n and return elem at new ind
// size: return (ind - stackNum) / n

// the downside of the methods above is they could lead to unused space
// especially if the diff stacks are wildly difference sizes

// Second approach: dynamic sizing, very involved!
