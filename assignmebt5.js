// User Input=======================================
const prompt = require('prompt-sync')({ sigint: true });
// let input = parseInt(prompt('Enter your number '));



// // Task-1========================================

// const mark = [10, 30, 20, 50, 40];

// let highestMark = mark[0];
// let lowestMark = mark[0];
// let sum = 0;

// for (let i = 0; i < mark.length; i++) {
//     if (highestMark < mark[i]) {
//         highestMark = mark[i]
//     }

//     if (lowestMark > mark[i]) {
//         lowestMark = mark[i]
//     }

//     sum = sum + mark[i]
// }

// console.log("Highest " + highestMark);
// console.log("Lowest " + lowestMark);
// console.log("Avarage " + sum / mark.length);





// // Task-2========================================

// const mark = [10, 30, 20, 50, 40];

// let passMark = [];
// let sum = 0;
// let totalPass = 0;

// for (let i = 0; i < mark.length; i++) {
//     sum = sum + mark[i]
// }

// const avarageMark = sum / mark.length;

// for (let i = 0; i < mark.length; i++) {
//     if (mark[i] > avarageMark) {
//         passMark.push(mark[i]);
//         totalPass++
//     }
// }

// console.log(passMark, "  " + totalPass);




// // Task-3========================================

// const mark = [10, 30, 20, 50, 40];

// let highestMark = mark[0];
// let location = 0;

// for (let i = 0; i < mark.length; i++) {
//     if (highestMark < mark[i]) {
//         highestMark = mark[i]
//         location = i;
//     }
// }

// // const location = mark.indexOf(highestMark)

// console.log("Highest " + highestMark + " And " + "Location of highest " + location);




// // Task-4========================================

// let mark = [10, 30, 20, 50, 40];

// let highestMark = mark[0];

// let location = 0;

// for (let i = 0; i < mark.length; i++) {
//     if (highestMark < mark[i]) {
//         highestMark = mark[i];
//         location = i;
//     }
// }

// // const location = mark.indexOf(highestMark)


// mark[location] = mark[0];
// mark[0] = highestMark;

// console.log(mark);




// // Task-5========================================

// let mark = [50, 30, 20, 10, 40];

// let highestMark = mark[0];
// let location = 0;



// for (let i = 1; i < mark.length; i++) {
//     highestMark = mark[1]
//     if (highestMark < mark[i]) {
//         highestMark = mark[i]
//         location = i;
//     }
// }


// mark[location] = mark[1];
// mark[1] = highestMark;

// console.log(mark);





// // Task-6========================================

// let mark = [10, 30, 20, 50, 40];
// let highestMark;

// let n = parseInt(prompt("Enter the number "));

// if (n > mark.length) {
//     n = mark.length;
// }

// for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < mark.length; j++) {
//         if (mark[i] < mark[j]) {
//             highestMark = mark[j];
//             mark[j] = mark[i];
//             mark[i] = highestMark;
//         }
//     }
// }

// console.log(mark);





// // Task-7========================================

// let mark = [10, 30, 20, 50, 40];
// let highestMark;


// for (let i = 0; i < mark.length; i++) {
//     for (let j = i + 1; j < mark.length; j++) {
//         if (mark[i] < mark[j]) {
//             highestMark = mark[j];
//             mark[j] = mark[i];
//             mark[i] = highestMark;
//         }
//     }
// }

// console.log(mark);





// // Task-8========================================

// let mark = [10, 30, 20, 50, 40, 60];
// let highestMark;
// let median;


// for (let i = 0; i < mark.length; i++) {
//     for (let j = i + 1; j < mark.length; j++) {
//         if (mark[i] < mark[j]) {
//             highestMark = mark[j];
//             mark[j] = mark[i];
//             mark[i] = highestMark;
//         }
//     }
// }

// if (mark.length % 2 === 0) {
//     median = (mark[mark.length / 2 - 1] + mark[mark.length / 2]) / 2;
// }

// else {
//     median = mark[Math.floor(mark.length / 2)];
// }

// console.log(median);







