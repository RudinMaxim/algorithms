class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

export class BinaryTree {
	root: TreeNode | null;

	constructor(root?: TreeNode | null) {
		this.root = root || null;
	}

	// Insert a new node into the binary tree
	insert(value: number): void {
		const newNode = new TreeNode(value);

		if (!this.root) {
			this.root = newNode;
			return;
		}

		let currentNode = this.root;

		while (currentNode) {
			if (newNode.val < currentNode.val) {
				if (!currentNode.left) {
					currentNode.left = new TreeNode(value);
					return;
				}

				currentNode = currentNode.left;
			} else {
				if (!currentNode.right) {
					currentNode.right = new TreeNode(value);
					return;
				}

				currentNode = currentNode.right;
			}
		}
	}

	remove(value: number) {
		const removeNode = function (
			node: TreeNode | null,
			value: number
		): TreeNode | null {
			if (!node) return null;

			if (!node.left && !node.right) {
				return null;
			}

			if (value == node.val) {
				if (!node.left) {
					return node.right;
				}

				if (!node.right) {
					return node.left;
				}

				let tempNode = node.right;

				while (tempNode.left !== null) {
					tempNode = tempNode.left;
				}
				node.val = tempNode.val;
				node.right = removeNode(node.right, tempNode.val);
				return node;
			} else if (value < node.val) {
				node.left = removeNode(node.left, value);
				return node;
			} else {
				node.right = removeNode(node.right, value);
				return node;
			}
		};

		this.root = removeNode(this.root, value);
	}

	// ============

	// Depth-First Search (DFS) traversal. In Order
	traversalDFS(node: TreeNode | null = this.root): void {
		if (node === null) return;
		this.traversalDFS(node.left);
		console.log(node.val); // Visit the node
		this.traversalDFS(node.right);
	}

	// Breadth-First Search (BFS) traversal. Pre Order
	traversalBFS(node: TreeNode | null = this.root): void {
		if (node === null) return;
		const queue: TreeNode[] = [node];
		while (queue.length > 0) {
			const currentNode = queue.shift()!;
			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
		}
	}

	// Depth-First Search (DFS) traversal. Post Order
	traversalDFSPostOrder(node: TreeNode | null = this.root): void {
		if (node === null) return;
		this.traversalDFSPostOrder(node.left);
		this.traversalDFSPostOrder(node.right);
		console.log(node.val); // Visit the node
	}

	// =============

	countNodes(node: TreeNode | null = this.root): number {
		if (node === null) return 0;
		const leftCount = this.countNodes(node.left);
		const rightCount = this.countNodes(node.right);
		return leftCount + rightCount + 1;
	}

	findMin(node: TreeNode | null = this.root): TreeNode | null {
		if (!node || !node.left) return node;
		return this.findMin(node.left);
	}

	findMax(node: TreeNode | null = this.root): TreeNode | null {
		if (!node || !node.right) return node;
		return this.findMax(node.right);
	}

	find(value: number): TreeNode | null {
		let currentNode: TreeNode | null = this.root;

		while (currentNode !== null && currentNode.val !== value) {
			if (value < currentNode.val) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}
		return currentNode;
	}

	// isPresent(value: number): boolean {
	// 	return this.find(value) !== null;
	// }

	isPresent(value: number): boolean {
		let currentNode = this.root;

		while (currentNode) {
			if (value === currentNode.val) {
				return true;
			}

			if (value > currentNode.val) {
				currentNode = currentNode.right;
			} else {
				currentNode = currentNode.left;
			}
		}

		return false;
	}
}
