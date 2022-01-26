
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let array = [];

	if (!matrix || matrix.length === 0) return array;

	matrix.forEach((elem, index) => {
		if (index % 2 === 0) {
			array = array.concat(elem.sort((a, b) => a - b));
		} else {
			array = array.concat(elem.sort((a, b) => b - a));
		}
	});

	return array;
}
