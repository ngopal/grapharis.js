function findNeighboringNodes(graph, node) {
  return graph.edges.filter(function(e) { 
    return e.source.name === node || e.target.name === node;
  }).map(function(d) { 
    return graph.edges.indexOf(d);
  });
}
