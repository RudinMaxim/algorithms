function binarySearch<T>(array: Array<T>, target: T): number | null {
	let [left, right] = [0, array.length - 1];

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);

		if (array[middle] === target) {
			return middle;
		}

		if (array[middle] < target) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}

	return null;
}

function viewBinarySearch() {
	const NumArray = [1, 2, 4, 5, 6];
	const result = binarySearch(NumArray, 2);
	console.log(result);

	const StrArray = ['apple', 'banana', 'map'];
	const result2 = binarySearch(StrArray, 'map');
	console.log(result2);
}

export { binarySearch, viewBinarySearch };
