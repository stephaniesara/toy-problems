// CTCI 4.1
// Given an undirected graph, find out whether there is a route between two nodes

const Graph = require("./Graph.js");

const routeBetweenNodes = (graph, node1, node2) => {
  let q = []; // mimic queue using push + unshift
  q.push(node1);
  graph.nodes[node1].visited = true;

  while (q.length > 0) {
    let curr = q.shift();
    if (String(curr) === String(node2)) {
      return true;
    }
    for (let node in graph.nodes[curr]) {
      if (node === "visited") {
        continue;
      }
      if (!graph.nodes[node].visited) {
        graph.nodes[node].visited = true;
        q.push(node);
      }
    }
  }
  return false;
};

// TESTS ------------------------------

const clearVisited = graph => {
  for (node in graph.nodes) {
    graph.nodes[node].visited = false;
  }
};

const expect = (actual, expected) => {
  console.log(actual === expected, "expected", actual, "to be", expected);
};

let graph = new Graph();
graph.addNode(1);
graph.addNode(2);
expect(routeBetweenNodes(graph, 1, 2), false);
clearVisited(graph);

graph.addEdge(1, 2);
expect(routeBetweenNodes(graph, 1, 2), true);
clearVisited(graph);

graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
graph.addEdge(1, 3);
expect(routeBetweenNodes(graph, 1, 3), true);
clearVisited(graph);
expect(routeBetweenNodes(graph, 1, 5), false);
clearVisited(graph);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
expect(routeBetweenNodes(graph, 1, 4), true);
clearVisited(graph);
expect(routeBetweenNodes(graph, 4, 1), true);
clearVisited(graph);
expect(routeBetweenNodes(graph, 1, 5), true);
clearVisited(graph);
expect(routeBetweenNodes(graph, 5, 1), true);
clearVisited(graph);
// console.log(graph);
