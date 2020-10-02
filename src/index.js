module.exports = function towelSort(matrix) {
    let srtd = [];
    if (matrix) {
        for (let el of matrix) {
            if (matrix.indexOf(el) % 2 == 0) {
                srtd.push(...el);
            } else {
                srtd.push(...el.reverse());
            }
        }
    }
    return srtd;
};
