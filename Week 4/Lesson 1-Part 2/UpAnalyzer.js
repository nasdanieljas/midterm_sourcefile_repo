class Student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }

    getAverage() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        return sum / this.scores.length;
    }

    getLetterGrade() {
        let avg = this.getAverage();
        if (avg >= 90) return "A";
        else if (avg >= 80) return "B";
        else if (avg >= 70) return "C";
        else if (avg >= 60) return "D";
        else return "F";
    }
}

function analyzeClass(students) {
    console.log("------- STUDENT REPORT -------");

    let totalAverage = 0;
    let topStudent = null;

    students.forEach(student => {
        let avg = student.getAverage();
        let grade = student.getLetterGrade();
        console.log(`${student.name} - Average: ${avg.toFixed(1)} | Grade: ${grade}`);

        totalAverage += avg;

        if (!topStudent || avg > topStudent.getAverage()) {
            topStudent = student;
        }
    });

    let classAverage = totalAverage / students.length;

    console.log("------------------------------------");
    console.log(`Class Average: ${classAverage.toFixed(1)}`);
    console.log(`Top Student: ${topStudent.name} with ${topStudent.getAverage().toFixed(1)}`);
}

// Test data
const studentData = [
  { name: "Boda", scores: [99, 92, 95] },
  { name: "Maring", scores: [89, 81, 86] },
  { name: "luters", scores: [95, 98, 92] },
  { name: "tot", scores: [50, 69, 55] }
];

const students = studentData.map(data => new Student(data.name, data.scores));
analyzeClass(students);
