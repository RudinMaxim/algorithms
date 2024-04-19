function bubbleSort<T>(array: Array<T>): Array<T> {
	for (let index = 0; index < array.length; index++) {
		for (let index2 = 0; index2 < array.length - index; index2++) {
			if (array[index2] > array[index2 + 1]) {
				[array[index2], array[index2 + 1]] = [array[index2 + 1], array[index2]];
			}
		}
	}

	return array;
}

function viewBubbleSort() {
	const nums = [1, 2, 44, 0, -2.2, -21];

	const result = bubbleSort(nums);
	console.log(result);
}

export { bubbleSort, viewBubbleSort };
