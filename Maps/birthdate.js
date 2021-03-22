let birthMonthMap = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0]]);
for (let i = 1; i <= 50; i++) {
    let randomMonth = Math.floor(Math.random() * 12) + 1;
    let count = birthMap.get(randomMonth);
    birthMonthMap.set(randomMonth, ++count);
}
// Prints map 
console.log(birthMonthMap);