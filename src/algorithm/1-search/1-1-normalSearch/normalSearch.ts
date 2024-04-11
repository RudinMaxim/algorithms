function normalSearch(nums: Array<number>, target: number): number | null {
	for (let i of nums) {
		if (nums[i] === target) {
			return i;
		}
	}

	return null;
}

export { normalSearch };
