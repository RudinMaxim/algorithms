const { binarySearch } = require('./binarySearch');
const { normalSearch } = require('./normalSearch');

describe('normalSearch', () => {
	test('should return the index of the target number in the sorted array', () => {
		const nums = [1, 2, 3, 4, 5, 6];
		const target = 3;
		expect(normalSearch(nums, target)).toBe(2);
	});

	test('should return null if the target number is not found in the array', () => {
		const nums = [1, 2, 4, 5, 6];
		const target = 3;
		expect(normalSearch(nums, target)).toBeNull();
	});
});

describe('binarySearch', () => {
	test('should return the index of the target number in the sorted array', () => {
		const nums = [1, 2, 3, 4, 5, 6];
		const target = 3;
		expect(binarySearch(nums, target)).toBe(2);
	});

	test('should return null if the target number is not found in the array', () => {
		const nums = [1, 2, 4, 5, 6];
		const target = 3;
		expect(binarySearch(nums, target)).toBeNull();
	});
});
