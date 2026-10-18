// Define student scores
let scores = [90, 79, 81, 74, 88];

// Function to interpret grade
function interpretGrade(score) {
    if (score >= 90) return "Excellent";
    else if (score >= 80) return "Very Good";
    else if (score >= 75) return "Good";
    else return "Failed";
}

// Display all scores
console.log("Student Scores:");
scores.forEach(score => console.log(score));

// Display each student's evaluation
console.log("\nStudent Results:");
scores.forEach((score, index) => {
    let remark = interpretGrade(score);
    let status = score >= 75 ? "Passed" : "Failed";
    if (status === "Failed") {
        console.log(`Student ${index + 1}: ${score} - ${status}`);
    } else {
        console.log(`Student ${index + 1}: ${score} - ${remark} - ${status}`);
    }
});

// Calculate statistics
let total = scores[0] + scores[1] + scores[2] + scores[3] + scores[4];
let average = total / scores.length;
let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let passedCount = scores.filter(s => s >= 75).length;
let failedCount = scores.length - passedCount;

// Display statistics
console.log("\nTotal Score:", total);
console.log("Average Score:", average.toFixed(0));
console.log("Highest Score:", highest);
console.log("Lowest Score:", lowest);
console.log("Passed:", passedCount);
console.log("Failed:", failedCount);
