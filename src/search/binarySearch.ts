function binarySearch(nums: Array<number>, target: number): number | null {
	let [left, right] = [0, nums.length - 1];

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);

		if (nums[middle] === target) {
			return middle;
		}

		if (nums[middle] < target) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}

	return null;
}

// function binarySearchRecursive(
// 	nums: Array<number>,
// 	target: number,
// 	left: number = 0,
// 	right: number = nums.length - 1
// ): number | null {
// 	if (left > right) {
// 		return null;
// 	}

// 	const middle = Math.floor((left + right) / 2);

// 	if (nums[middle] === target) {
// 		return middle;
// 	}

// 	if (nums[middle] < target) {
// 		return binarySearchRecursive(nums, target, middle + 1, right);
// 	} else {
// 		return binarySearchRecursive(nums, target, left, middle - 1);
// 	}
// }

export { binarySearch };
