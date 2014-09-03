function parseToAdjacencyMatrix(graph) {
  var grid =  graph.nodes.map(function(x) {
    return Array.apply(null, new Array(graph.nodes.length)).map(Number.prototype.valueOf,0);
  });
  graph.edges.map(function(x) {
    grid[graph.nodes.indexOf(graph.nodes.filter(function(d) {
      return d.name === x.source.name;
    })[0])][graph.nodes.indexOf(graph.nodes.filter(function(d) {
      return d.name === x.target.name;
    })[0])] = 1;
    grid[graph.nodes.indexOf(graph.nodes.filter(function(d) {
      return d.name === x.target.name;
    })[0])][graph.nodes.indexOf(graph.nodes.filter(function(d) {
      return d.name === x.source.name;
    })[0])] = 1;
  });
  return grid;
}




