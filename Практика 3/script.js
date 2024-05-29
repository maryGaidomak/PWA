document.addEventListener('DOMContentLoaded', () => {
    let username = localStorage.getItem('username');
    if (!username) {
        username = prompt('Введите ваше имя:');
        localStorage.setItem('username', username);
    }

    document.getElementById('fullscreen-btn').addEventListener('click', showOverlay);
    document.getElementById('overlay').addEventListener('click', hideOverlay);
});

function checkQuiz() {
    const correctAnswers = {
        q1: 'a',
        q2: 'a',
        q3: 'a',
        q4: 'a',
        q5: 'b',
        q6: 'b',
        q7: 'a',
        q8: 'a',
        q9: 'a',
        q10: 'a'
    };
    const form = document.getElementById('quiz-form');
    const results = document.getElementById('results');
    results.innerHTML = '';
    let score = 0;
    let total = 0;

    for (const [question, answer] of Object.entries(correctAnswers)) {
        const userAnswer = form.elements[question].value;
        const correct = userAnswer === answer;
        if (correct) {
            results.innerHTML += `<span class="correct">Вопрос ${total + 1}: Верно</span><br>`;
            score++;
        } else {
            results.innerHTML += `<span class="incorrect">Вопрос ${total + 1}: Неверно</span><br>`;
        }
        total++;
    }

    results.innerHTML += `<br>Ваш результат: ${score} из ${total}`;
}

function showOverlay() {
    const overlay = document.getElementById('overlay');
    const date = new Date().toLocaleDateString('ru-RU');
    const username = localStorage.getItem('username');
    document.getElementById('overlay-date').textContent = date;
    document.getElementById('overlay-username').textContent = username;
    overlay.style.display = 'flex';
}

function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
}
