
let score = Number(prompt("Enter your test score (0-100):"));
let grade;

// Evaluate the score using if...else
if (score < 0 || score > 100) {
    console.log("Invalid score! Please enter a score between 0 and 100.");
} else {
    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Determine the letter grade using switch
    switch (grade) {
        case "A":
            grade = "A";
            break;
        case "B":
            grade = "B";
            break;
        case "C":
            grade = "C";
            break;
        case "D":
            grade = "D";
            break;
        default:
            grade = "F";
    }

    // Determine pass or fail using a ternary operator
    let status = score >= 40 ? "Passed" : "Failed";

    console.log(`Score: ${score}`);
    console.log(`Grade: ${grade}`);
    console.log(`Status: ${status}`);
}
