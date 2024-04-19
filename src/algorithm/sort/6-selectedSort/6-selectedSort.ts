function selectedSort<T>(array: Array<T>): Array<T> {
	for (let index = 0; index < array.length; index++) {
		let min = index;

		for (let index_2 = index + 1; index_2 < array.length; index_2++) {
			if (array[min] > array[index_2]) {
				min = index_2;
			}
		}

		[array[index], array[min]] = [array[min], array[index]];
	}

	return array;
}

function viewSelectedSort() {
	const sortArrayNum = [1, 5, 4, 6, 33, -14, 2];
	const resultNum = selectedSort(sortArrayNum);
	console.log(resultNum);
}

export { selectedSort, viewSelectedSort };
