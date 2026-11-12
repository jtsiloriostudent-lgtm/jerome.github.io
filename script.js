

function calculateGrades() {
    const errorContainer = document.getElementById("gradeError");
    errorContainer.innerText = "";

  
    const studentName = document.getElementById("studentName").value.trim();
    const studentID = document.getElementById("studentID").value.trim();
    const subject = document.getElementById("subject").value.trim();

    if (!studentName || !studentID || !subject) {
        errorContainer.innerText = "Error: All student information fields are required.";
        return;
    }

    
    const gradeFieldIds = [
        "prelimQuiz", "prelimActivity", "prelimExam",
        "midtermQuiz", "midtermActivity", "midtermExam",
        "finalQuiz", "finalActivity", "finalExam"
    ];

    const gradeValues = {};

    for (let id of gradeFieldIds) {
        const rawValue = document.getElementById(id).value;

        if (rawValue === "") {
            errorContainer.innerText = "Error: Please fill in all grade input fields.";
            return;
        }

        const numericValue = parseFloat(rawValue);

        if (isNaN(numericValue) || numericValue < 0 || numericValue > 100) {
            errorContainer.innerText = "Error: Grades must be numbers between 0 and 100.";
            return;
        }

        gradeValues[id] = numericValue;
    }

   
    const prelimGrade = (gradeValues.prelimQuiz + gradeValues.prelimActivity + gradeValues.prelimExam) / 3;
    const midtermGrade = (gradeValues.midtermQuiz + gradeValues.midtermActivity + gradeValues.midtermExam) / 3;
    const finalGrade = (gradeValues.finalQuiz + gradeValues.finalActivity + gradeValues.finalExam) / 3;

   
    const overallGrade = (prelimGrade + midtermGrade + finalGrade) / 3;
    const remarks = overallGrade >= 75 ? "PASSED" : "FAILED";

    
    document.getElementById("outPrelim").innerText = prelimGrade.toFixed(2);
    document.getElementById("outMidterm").innerText = midtermGrade.toFixed(2);
    document.getElementById("outFinal").innerText = finalGrade.toFixed(2);
    document.getElementById("outOverall").innerText = overallGrade.toFixed(2);
    document.getElementById("outRemarks").innerText = remarks;
}

function clearGradeOutputs() {
    document.getElementById("gradeError").innerText = "";
    document.getElementById("outPrelim").innerText = "-";
    document.getElementById("outMidterm").innerText = "-";
    document.getElementById("outFinal").innerText = "-";
    document.getElementById("outOverall").innerText = "-";
    document.getElementById("outRemarks").innerText = "-";
}