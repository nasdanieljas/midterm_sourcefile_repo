// Part A
`use strict`;
console.log(`STUDENT SCORE ARRAY ANALYZER`);

const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const originalNames = Array.from(studentNames);
const studentScores = [85, 72, 91, 64, 78];
const activityScores = [
    [80, 85, 90],
    [70, 72, 74],
    [88, 92, 91],
    [60, 65, 67],
    [75, 78, 81]
]; 

console.log('\nPART A: ORIGINAL RECORDS');
function displayRecords() {
    console.log("===Student Records===");
    for (let i = 0; i < studentNames.length; i++) {
        console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
    }
}

displayRecords();

//Part B
//insert
console.log('\nPART B: ADD NEW STUDENTS');
studentNames.push('Faith');
studentScores.push(88);

studentNames.push('Aaron');
studentScores.push(76);

displayRecords();
console.log(`Total number of students: ${studentNames.length}`);

//Part C
//remove
console.log('\nPART C: REMOVE AND REPLACE RECORDS');
studentNames.shift();
studentNames.pop();

const danielIndex = studentNames.indexOf("Daniel");

studentNames.splice(danielIndex, 1);
studentScores.splice(danielIndex, 1);

//insert splice
studentNames.splice(2, 0, "Grace");
studentScores.splice(2, 0, 82);

displayRecords();

//Part d
//total score
console.log('\nPART D: CLASS STATISTICS');
const totalScore = studentScores.reduce((sum, score) => sum + score, 0);

//ave
const averageScore = totalScore / studentScores.length;

//highest
const highestScore = Math.max(...studentScores);

//lowest
const lowestScore = Math.min(...studentScores);

//display
console.log(`Current Student Scores: ${studentScores}`);
console.log(`Total Score: ${totalScore}`);
console.log(`Average Score: ${averageScore}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);

//Part E
console.log('\nPART E: PASSING-SCORE ANALYSIS');

const passingScore = 75;

const passingScores =  studentScores.filter(score => score >= passingScore);

const passFailLables = studentScores.map(score => score >= passingScore ? "Passed" : "Failed");

//check failed
const someoneFailed = studentScores.some(score => score > passingScore);

//check pass
const everyonePassed = studentScores.every(score => score >= passingScore);

console.log("");
console.log("Passing Score:", passingScore);
console.log("Pass/Fail Lables:", passFailLables);
console.log("At least one student failed:", someoneFailed);
console.log("All students passed", everyonePassed);
console.log("");

//Part F
console.log('\nPART F: SORT AND SEARCH');
const copiedScore = Array.from(studentScores);
copiedScore.sort((a, b) => b - a);

console.log("Sorted Scores (High to low):", copiedScore);
//search
const has91 = copiedScore.includes(91);
console.log("Does the score 91 exist?", has91);

const index91 = copiedScore.indexOf(91);
console.log("Index of 91: ", index91);
console.log(copiedScore);

//Part G
//const originalNames = Array.from(studentNames);
console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverage = [];

console.log("=== Activity Scores ==="); 
for (let i = 0; i < activityScores.length; i++) {
    let row = activityScores[i];
    let sum = 0;

    for (let j = 0; j < row.length; j++) {
        console.log(`${originalNames[i]} score ${j + 1}: ${row[j]}`);
        sum += row[j];
    }

    let average = sum / row.length;
    activityAverage.push(average.toFixed(2));
    console.log(`${originalNames[i]}'s activity average: ${average.toFixed(2)}`)
}

console.log("=== Acitvity Average ===");
console.log(activityAverage);

//Part H
console.log('\nPART H: TEXT SUMMARY');
console.log("");
console.log("Students: " + studentNames.join(" | "));

