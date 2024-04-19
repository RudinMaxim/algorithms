import { quickSort } from './quickSort';

describe('quickSort', () => {
	test('test 1', () => {
		const nums = [1, 2, 3, 4, 5, 6];
		expect(quickSort(nums)).toBe(nums);
	});

	test('test 2', () => {
		const nums = [-1, -3, 1, 2, 4];
		expect(quickSort(nums)).toBe([-3, -1, 1, 2, 4]);
	});

	test('test 3', () => {
		const nums = [1];
		expect(quickSort(nums)).toBe([1]);
	});

	test('test 4', () => {
		const strs = ['adaw', '212e', '2'];
		expect(quickSort(strs)).toBe(['2', '212e', 'adaw']);
	});
});
