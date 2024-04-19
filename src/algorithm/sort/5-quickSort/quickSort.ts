function quickSort<T>(array: Array<T>): Array<T> {
	if (array.length < 2) return array; // [ any T]

	let pivot: T = array[0]; // опорный элемент
	const left: Array<T> = []; // массив элементов меньше опроного
	const right: Array<T> = []; // массив элементов больше опроного

	for (let index = 1; index < array.length; index++) {
		const element = array[index];

		if (pivot > element) {
			left.push(element);
		} else {
			right.push(element);
		}
	}

	// return [...quickSort(left), pivot, ...quickSort(right)];
	return quickSort(left).concat(pivot, quickSort(right)); // рекурсивно меньшего и большего элемента
}

function viewQuickSort() {
	const sortArrayNum = [1, 5, 4, 6, 22, -14, 2];
	const resultNum = quickSort(sortArrayNum);
	console.log('input Num: ', sortArrayNum, 'output Num: ', resultNum);

	const sortArrayStr = ['apple', 'map', 'banana'];
	const resultStr = quickSort(sortArrayStr);
	console.log('input Str: ', sortArrayStr, 'output Str: ', resultStr);
}

export { quickSort, viewQuickSort };
