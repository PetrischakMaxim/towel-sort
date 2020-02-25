
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length == 0) return [];
    const arr = [...matrix];
    return arr.map((el, i) => {
      if (i % 2 !== 0) el.reverse();
      return el;
    }).flat();
}
