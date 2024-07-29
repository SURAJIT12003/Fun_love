const questions = [
    "I like you. Do you like me?",
    "Would you like to go on a date with me?",
    "Would you like to watch a movie together?",
    "Am I your favorite person?",
    "Do you enjoy spending time with me?",
    "Do you love me?"
];

let currentQuestionIndex = 0;

function handleYesClick() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').innerText = questions[currentQuestionIndex];
    } else {
        document.getElementById('question').innerText = "Finally ! You love me ";
        document.getElementById('yes-button').style.display = 'none';
        document.getElementById('no-button').style.display = 'none';
    }
}

function moveNoButton() {
    const noButton = document.getElementById('no-button');
    const container = document.querySelector('.game-container');
    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - noButton.offsetWidth;
    const maxY = containerRect.height - noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
