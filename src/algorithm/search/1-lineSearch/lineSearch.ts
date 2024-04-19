function lineSearch<T>(array: Array<T>, target: T): number | null {
	for (let index = 0; index < array.length; index++) {
		const element = array[index];

		if (element === target) {
			return index;
		}
	}

	return null;
}

function viewLineSearch() {
	const NumArray = [1, 2, 4, 5, 6];
	const result = lineSearch(NumArray, 2);
	console.log(result);

	const StrArray = ['apple', 'banana', 'map'];
	const result2 = lineSearch(StrArray, 'map');
	console.log(result2);
}

export { lineSearch, viewLineSearch };
