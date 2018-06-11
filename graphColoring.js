// interview cake https://www.interviewcake.com/question/javascript/graph-coloring

function graphColoring(graph, colors) {
  graph.forEach(node => {
    if (node.neighbors.has(node)) {
      throw new Error("graph has a loop, legal coloring not possible");
    }

    var illegalColors = new Set();

    node.neighbors.forEach(neighbor => {
      if (neighbor.color !== null) {
        illegalColors.add(neighbor.color);
      }
    });

    for (let i = 0; i < colors.length; i++) {
      let color = colors[i];
      if (!illegalColors.has(color)) {
        node.color = color;
        break;
      }
    }
  });

  return graph;
}

// run your function through some test cases here
// remember: debugging is half the battle!
function GraphNode(label) {
  this.label = label;
  this.neighbors = new Set();
  this.color = null;
}

var a = new GraphNode("a");
var b = new GraphNode("b");
var c = new GraphNode("c");

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

var graph = [a, b, c];

const colors = ["blue", "red", "orange"];

console.log(myFunction(graph, colors));
