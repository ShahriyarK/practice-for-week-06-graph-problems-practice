function getNeighbors(row, col, graph) {
  const neighbors = [];
  const possibleNeighbors = [
    [row - 1, col], //top
    [row + 1, col], //bottom
    [row, col - 1], //left
    [row, col + 1], //right
  ];
  possibleNeighbors.forEach((node) => {
    const [row, col] = node;
    if (graph[row] !== undefined && graph[row][col] !== undefined) {
      if (graph[row][col] === 1) {
        neighbors.push([row, col]);
      }
    }
  });
  return neighbors;
}

function islandSize(row, col, graph) {
  if (graph[row][col] !== 1) return 0;
  // Create a visited set to store visited nodes
  const visited = new Set();
  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];
  // Put the stringified starting node in visited
  const stringifiedNode = getStringifiedNode([row, col]);
  visited.add(stringifiedNode);
  // Initialize size to 0
  let size = 0;
  while (stack.length > 0) {
    // While the stack is not empty,

    // Pop the first node
    const currentNode = stack.pop();
    // DO THE THING (increment size by 1)
    size++;
    const neighbors = getNeighbors(currentNode[0], currentNode[1], graph);
    for (const node of neighbors) {
      if (visited.has(getStringifiedNode(node))) continue;
      // Then push all the UNVISITED neighbors on top of the stack
      stack.push(node);
      visited.add(getStringifiedNode(node));
      // and mark them as visited

      // HINT: This is what your helper function `getNeighbors` is for
      // HINT: Remember, you're storing your visited nodes as strings!
    }
  }
  // return size
  return size;
  // Your code here
}

const getStringifiedNode = (node) => {
  const [row, col] = node;
  return `${row}, ${col}`;
};

module.exports = [getNeighbors, islandSize];
