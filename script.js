// Checking the connection with html file
console.log("The quiz brain is alive");

const quizForm = document.getElementById('quizForm1');
const resultsBox = document.getElementById('quizForm1results');
const playAgainButton = document.getElementById('playAgain');

const startText = resultsBox.innerHTML;

// Display name and description for every outcome
const vegetables = {
    carrot: { name: 'Carrot', description: 'loud, crunchy and full of energy!' },
    potato: { name: 'Potato', description: 'cosy, reliable and a champion napper.' },
    chili: { name: 'Chili', description: 'spicy, intense and never boring.' },
    cucumber: { name: 'Cucumber', description: 'cool, calm and a little mysterious.' }
};

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Submitted!");

    const questionNames = ['question1', 'question2', 'question3', 'question4'];
    const picks = [];

    for (let i = 0; i < questionNames.length; i++) {
        const selected = quizForm.querySelector('input[name="' + questionNames[i] + '"]:checked');
        if (selected) {
            picks.push(selected.value);
        }
    }
    console.log(picks);

    // Skipped question: friendly message instead of a result
    if (picks.length < questionNames.length) {
        resultsBox.innerHTML = '<p>Oops! Answer all ' + questionNames.length + ' questions to find your vegetable 🥕</p>';
        return;
    }

    // Count a point for every picked answer
    const scores = { carrot: 0, potato: 0, chili: 0, cucumber: 0 };
    for (let i = 0; i < picks.length; i++) {
        scores[picks[i]] = scores[picks[i]] + 1;
    }
    console.log(scores);

    // Find the highest score
    let bestScore = 0;
    for (const veg in scores) {
        if (scores[veg] > bestScore) {
            bestScore = scores[veg];
        }
    }

    // Tie rule: everyone with the highest score wins together
    const winners = [];
    for (const veg in scores) {
        if (scores[veg] === bestScore) {
            winners.push(veg);
        }
    }
    console.log(winners);

    if (winners.length === 1) {
        const winner = vegetables[winners[0]];
        resultsBox.innerHTML = "<p>You're a " + winner.name + ': ' + winner.description + '</p>';
    } else {
        const names = [];
        for (let i = 0; i < winners.length; i++) {
            names.push(vegetables[winners[i]].name);
        }
        resultsBox.innerHTML = "<p>You're a mix of " + names.join(' and ') + '! A true salad of a person 🥗</p>';
    }
});

// Clear the answers and the result
playAgainButton.addEventListener('click', function() {
    quizForm.reset();
    resultsBox.innerHTML = startText;
});
