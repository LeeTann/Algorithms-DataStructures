// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1, and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

var allPathsSourceTarget = function (graph) {
  let lastNode = graph.length - 1
  let output = []
  // put the first node in currentPath
  let currentPath = [0]

  // create DFS helper function which takes in the current node
  function dfs(node) {
    // start by checking if we made it to the end of the graph....current node === lastnode, then we found a valid path.
    if (node === lastNode) {
      // So then want to create a copy of that currentPath and store it in our output
      let copy = [...currentPath]
      output.push(copy)
      console.log('output', output)
    }
    // if we are not at the end of the graph, then we want to loop over and check all the connected neighbors of that node.
    for (let neighbors of graph[node]) {
      // and add the neighbor to the currentPath
      currentPath.push(neighbors)
      console.log(currentPath)
      // and do a DFS on the neighbors one by one
      dfs(neighbors)
      // then pop off the last neighbor
      currentPath.pop()
    }
  }

  // do a DFS on the first node
  dfs(0)

  return output
}

// console.log(allPathsSourceTarget([[1, 2], [3], [3], []])) //[[0,1,3],[0,2,3]]
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []])) //[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
