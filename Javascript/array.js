pop
// let arr = [1, 2, 3];
// arr.pop(3); // Removes the last element
// console.log(arr); // Output: [1, 2]
//push
// let arr = [1, 2, 3];
// arr.push(4); // Adds 4 to the end
// console.log(arr); // Output: [1, 2, 3, 4]
//shift
// let arr = [1, 2, 3];
// arr.shift(1); // Removes the first element
// console.log(arr); // Output: [2, 3]
//unshift
// let arr = [2, 3];
// arr.unshift(1); // Adds 1 to the beginning
// console.log(arr); // Output: [1, 2, 3]
//splice
// let arr = [1, 2, 3, 4];
// arr.splice(1, 2, 8, 9); // Removes 2 elements from index 1 and adds 8, 9
// console.log(arr); // Output: [1, 8, 9, 4]

//slice
// let arr = [1, 2, 3, 4];
// let newArr = arr.slice(1, 3); // Selects elements from index 1 to 2
// console.log(newArr); // Output: [2, 3]
//for each 
// let arr = [1, 2, 3];
// arr.forEach(num => console.log(num * 2)); // Output: 2, 4, 6


//map
// let arr = [1, 2, 3];
// let doubled = arr.map(num => num * 2);
// console.log(doubled); // Output: [2, 4, 6]

//filter
// let arr = [1, 2, 3, 4];
// let even = arr.filter(num => num % 2 === 0);
// console.log(even); // Output: [2, 4]

//reduce
// let arr = [1, 2, 3, 4];
// let sum = arr.reduce((acc, num) => acc + num, 0);
// console.log(sum); // Output: 10

//sort
// let arr = [3, 1, 2];
// arr.sort();
// console.log(arr); // Output: [1, 2, 3]

//every
// let arr = [1, 2, 3];
// console.log(arr.every(num => num > 0)); // Output: true
// console.log(arr.every(num => num > 2)); // Output: false


//some
// let arr = [1, 2, 3];
// console.log(arr.some(num => num > 2)); // Output: true
// console.log(arr.some(num => num > 5)); // Output: false

//indexof
// let arr = [1, 2, 3, 2];
// console.log(arr.indexOf(2)); // Output: 1
// console.log(arr.indexOf(5)); // Output: -1

//last indexof
// let arr = [1, 2, 3, 2];
// console.log(arr.lastIndexOf(2)); // Output: 3


//reverse
// let arr = [1, 2, 3];
// arr.reverse();
// console.log(arr); // Output: [3, 2, 1]

//join
// let arr = [1, 2, 3];
// let str = arr.join('-');
// console.log(str); // Output: "1-2-3"


//includes
// let arr = [1, 2, 3];
// console.log(arr.includes(2)); // Output: true
// console.log(arr.includes(5)); // Output: false


//find
// let arr = [1, 2, 3, 4];
// let found = arr.find(num => num > 2);
// console.log(found); // Output: 3

//find index
//let arr = [1, 2, 3, 4];
//let index = arr.findIndex(num => num > 2);
//console.log(index); // Output: 2