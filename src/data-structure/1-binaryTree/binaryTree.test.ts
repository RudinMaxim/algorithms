import { BinaryTree } from './binaryTree';

describe('BinaryTree', () => {
	let binaryTree: BinaryTree;

	beforeEach(() => {
		binaryTree = new BinaryTree();
		binaryTree.insert(10);
		binaryTree.insert(5);
		binaryTree.insert(15);
		binaryTree.insert(3);
		binaryTree.insert(7);
		binaryTree.insert(12);
	});

	test('insert', () => {
		binaryTree.insert(20);
		expect(binaryTree.isPresent(20)).toBe(true);
	});

	test('remove', () => {
		binaryTree.remove(5);
		expect(binaryTree.isPresent(5)).toBe(false);
	});

	test('countNodes', () => {
		expect(binaryTree.countNodes()).toBe(6);
	});

	test('findMin', () => {
		const minNode = binaryTree.findMin();
		expect(minNode?.val).toBe(3);
	});

	test('findMax', () => {
		const maxNode = binaryTree.findMax();
		expect(maxNode?.val).toBe(15);
	});

	test('find', () => {
		const foundNode = binaryTree.find(7);
		expect(foundNode?.val).toBe(7);
	});

	test('isPresent', () => {
		expect(binaryTree.isPresent(15)).toBe(true);
		expect(binaryTree.isPresent(25)).toBe(false);
	});

	test('isBalanced', () => {
		expect(binaryTree.isBalanced()).toBe(true);
	});

	test('findMinHeight', () => {
		expect(binaryTree.findMinHeight()).toBe(1);
	});

	test('findMaxHeight', () => {
		expect(binaryTree.findMaxHeight()).toBe(2);
	});

	test('traversalDFS', () => {
		expect(binaryTree.traversalDFS()).toEqual([3, 5, 7, 10, 12, 15]);
	});

	test('traversalBFS', () => {
		expect(binaryTree.traversalBFS()).toEqual([10, 5, 3, 7, 15, 12]);
	});

	test('traversalDFSPostOrder', () => {
		expect(binaryTree.traversalDFSPostOrder()).toEqual([3, 7, 5, 12, 15, 10]);
	});
});
