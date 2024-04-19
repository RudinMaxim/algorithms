import { bubbleSort } from './bubbleSort';

describe('bubbleSort', () => {
	test('test 1', () => {
		const nums = [1, 2, 44, 0, -2.2, -21];
		expect(bubbleSort(nums)).toBe([-21, -2.2, 0, 1, 2, 44]);
	});

	test('test 2', () => {
		const nums = [1, 2, 44, 0, -2.2, -21];

		expect(bubbleSort(nums)).not.toBe(nums);
	});
});
