// I'm including the node and edge objects in case there is some data modification I'd like to do in between parsing and loading it into the graph structure
function node(obj) {
  return obj;
}

function edge(node1,node2) {
  return {
    source : node1,
    target : node2,
    // should be able to add variable number of attributes here
  };
}

// Graph structure that the rest of the code will expect to see. This is going to be my standardized structure throughout.
function graph(nods,edgs) {
  return {
    nodes : nods,
    edges : edgs,
    add : function(list, items) {
      return _.union(list, items);
    },
    remove : function(list, items) {
      return _.difference(list.map(function(d) {
        return list.indexOf(d);
      }), items).map(function(r) {
        return list[r];
      });
    },
    find : function(list, attr, val) {
      return list.filter(function(a) { return a[attr] === val;}).map(function(i) {
        return list.indexOf(i);
      });
    },
    findRegex : function(list, attr, valReg) {
      return list.filter(function(a) { return a[attr].match(valReg);}).map(function(i) {
        return list.indexOf(i);
      });
    }
  };
}


// Helper functions and toy examples below
function randomItem() {
  var items = ['protein', 'smallmolecule', 'rna', 'dna', 'gene', 'snp'];
  return items[Math.floor(Math.random() * 6)];
}

function randomGraph(numberNodes,numberEdges) {
  var nodes = [];
  var edges = [];

  for (n = 0; n < numberNodes; n++) {
    nodes.push(node({name:n.toString(), type:randomItem()}));
  }

  for (e = 0; e < numberEdges; e++) {
    var rand1 = Math.floor(Math.random() * (nodes.length-0));
    var rand2 = Math.floor(Math.random() * (nodes.length-0));
    if (rand1 !== rand2) {
      edges.push(edge(nodes[rand1],nodes[rand2]));
    }
  }
  return graph(nodes,edges);
}

