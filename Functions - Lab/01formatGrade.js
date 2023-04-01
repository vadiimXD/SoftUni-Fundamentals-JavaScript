function formatGrade(grade) {
    let gradeRate = "";

    if (grade < 3) {
        gradeRate = "Fail";
        grade = 2;
    } else if (grade < 3.50) {
        gradeRate = "Poor";
       grade = grade.toFixed(2);
    } else if (grade < 4.50) {
        gradeRate = "Good";
        grade = grade.toFixed(2);
    } else if (grade < 5.50) {
        gradeRate = "Very good";
        grade = grade.toFixed(2);
    } else if (grade >= 5.50) {
        gradeRate = "Excellent";
        grade = grade.toFixed(2);
    }

    console.log(`${gradeRate} (${grade})`)

}
formatGrade(4.50)