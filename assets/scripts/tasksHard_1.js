'use strict';

const findMin = (n, m) => {
    if (m !== 0) {
        const k = n % m;
        return findMin(m, k);
    }
    return n;
};

console.log(findMin(11, 71))