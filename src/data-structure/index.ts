import { BinaryTree } from './1-binaryTree/binaryTree';

const newTree = new BinaryTree();
newTree.insert(10);
newTree.insert(5);
newTree.insert(15);
newTree.insert(3);
newTree.insert(7);
newTree.insert(12);

console.log('Binary Tree:');

console.log('DFS Traversal (In Order):');
newTree.traversalDFS();
// Output: 3 5 7 10 12 15

console.log('BFS Traversal (Pre Order):');
newTree.traversalBFS();
// Output: 10 5 15 3 7 12

console.log('DFS Traversal (Post Order):');
newTree.traversalDFSPostOrder();
// Output: 3 7 5 12 15 10

console.log('Number of nodes:', newTree.countNodes());

console.log('Minimum value:', newTree.findMin()?.val);

console.log('Maximum value:', newTree.findMax()?.val);

console.log('Find value 7:', newTree.find(7));

console.log('Is value 7 present:', newTree.isPresent(7));

export { BinaryTree };
