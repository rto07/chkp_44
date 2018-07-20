const arr = [2, 44, 6, 18, 40, 1, 11, 27, 5, 33, 56, 9];

function bubbleSort(arr) {
	const len = arr.length;
	let i, j, temp;
	for (i = len; i > 0; i--) {
		for (j = 0; j < i; j++) {
			if (arr[i] < arr[j]) {
				const temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
				};
			};
		};
				return arr;
};

console.log(bubbleSort(arr));