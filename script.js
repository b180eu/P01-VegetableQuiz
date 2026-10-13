// Checking the connection with html file
console.log("The quiz brain is alive");

const quizForm = document.getElementById('quizForm1');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Submitted!");

    const questionNames = ['question1', 'question2', 'question3', 'question4'];
    let picks = [];

    const resultDiv = document.getElementById("quizForm1results");
    if (!question1 || !question2 || !question3 || !question4) {
    resultDiv.textContent = "Please answer every question!";
     return;
    }

    for (let i = 0; i < questionNames.length; i++) {
        let selected = quizForm.querySelector('input[name="' + questionNames[i] + '"]:checked');
        if (selected) {
            picks.push(selected.value);
        }
    }
    console.log(picks);
});
