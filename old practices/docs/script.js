// Задача 0: Попросить пользователя представиться и поприветствовать его
// Получение имени пользователя из localStorage (если есть)
const storedUsername = localStorage.getItem('username');
if (storedUsername) {
  document.getElementById('username').textContent = storedUsername + '!';
}

// Обработчик события для кнопки "Приветствовать"
document.getElementById('submitButton').addEventListener('click', function() {
  const nameInput = document.getElementById('nameInput');
  const username = nameInput.value.trim();

  if (username !== '') {
    // Сохранение имени пользователя в localStorage
    localStorage.setItem('username', username);

    // Отображение имени пользователя в правом верхнем углу экрана
    document.getElementById('username').textContent = username + '!';
    nameInput.value = '';
  }
});

// Задача 1: Расчет площади треугольника
function calculateTriangleArea() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const area = (base * height) / 2;
    document.getElementById('triangleArea').textContent = `Площадь треугольника: ${area}`;
}

// Задача 2: Сравнение строк
function compareStrings() {
    const string1 = document.getElementById('string1').value;
    const string2 = document.getElementById('string2').value;
    const areEqual = string1.length === string2.length;
    document.getElementById('stringComparisonResult').textContent = `Результат сравнения: ${areEqual}`;
}

// Задача 3: Минимальное и максимальное значение массива
function findMinMax() {
    const element1 = parseFloat(document.getElementById('element1').value);
    const element2 = parseFloat(document.getElementById('element2').value);
    const element3 = parseFloat(document.getElementById('element3').value);
    const element4 = parseFloat(document.getElementById('element4').value);
    const element5 = parseFloat(document.getElementById('element5').value);
    const array = [element1, element2, element3, element4, element5];
    const min = Math.min(...array);
    const max = Math.max(...array);
    document.getElementById('minMaxResult').textContent = `Минимальное значение: ${min}, Максимальное значение: ${max}`;
}

// Задача 4: Таймер
let startTime;
let endTime;
let timerInterval;

function startTimer() {
  startTime = new Date();
  timerInterval = setInterval(updateTimer, 1000);
  document.getElementById('timer').style.display = 'block';
}

function stopTimer() {
  if (startTime && timerInterval != null) {
    timerInterval = null;
    endTime = new Date();
    document.getElementById('timer').style.display = 'none';
  }
}

function updateTimer() {
  const currentTime = new Date();
  const timeElapsed = Math.floor((currentTime - startTime) / 1000);
  document.getElementById('timer').textContent = `Время прошло: ${timeElapsed} сек`;
}

function getTimeElapsed() {
  if (startTime && endTime) {
    const timeElapsed = Math.floor((endTime - startTime) / 1000);
    alert(`Время прошло: ${timeElapsed} сек`);
  } else {
    alert('Таймер еще не запущен или не остановлен');
  }
}

  
// Задача 5: Тест по JavaScript
const questions = [
  {
      question: 'Какое ключевое слово используется для объявления переменной в JavaScript?',
      options: ['let', 'var', 'const', 'both let and var'],
      correctAnswer: 3
  },
  {
      question: 'Какой метод используется для добавления нового элемента в конец массива?',
      options: ['push()', 'pop()', 'concat()', 'join()'],
      correctAnswer: 0
  },
  {
      question: 'Какой оператор используется для сравнения значения и типа данных?',
      options: ['==', '===', '!=', '!=='],
      correctAnswer: 1
  },
  {
      question: 'Какой метод используется для преобразования строки в число?',
      options: ['parseInt()', 'parseFloat()', 'toFixed()', 'toString()'],
      correctAnswer: 0
  },
  {
      question: 'Какой цикл используется для выполнения кода определенное количество раз?',
      options: ['for', 'while', 'do...while', 'switch'],
      correctAnswer: 0
  },
  {
      question: 'Какой метод используется для удаления последнего элемента из массива?',
      options: ['pop()', 'shift()', 'slice()', 'splice()'],
      correctAnswer: 0
  },
  {
      question: 'Какой оператор используется для объединения двух или более строк?',
      options: ['+', '-', '*', '/'],
      correctAnswer: 0
  },
  {
      question: 'Какой метод используется для проверки существования определенного свойства в объекте?',
      options: ['hasOwnProperty()', 'toString()', 'toLocaleString()', 'valueOf()'],
      correctAnswer: 0
  },
  {
      question: 'Какой оператор используется для выполнения разных действий в зависимости от условия?',
      options: ['if...else', 'for', 'switch', 'while'],
      correctAnswer: 0
  },
  {
      question: 'Какой метод используется для преобразования объекта в строку в формате JSON?',
      options: ['JSON.parse()', 'JSON.stringify()', 'JSON.parseObject()', 'JSON.stringifyObject()'],
      correctAnswer: 1
  }
];

let currentQuestionIndex = 0;
let userAnswers = [];

function startTest() {
    document.getElementById('testQuestions').style.display = 'block';
    currentQuestionIndex = 0;
    userAnswers = [];
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.createElement('p');
    const nextButton = document.getElementById('nextButton');
    nextButton.addEventListener('click', nextQuestion);

    questionElement.textContent = currentQuestion.question;

    const optionsElement = document.createElement('ul');
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('li');
        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.name = 'answer';
        radioButton.value = index;
        radioButton.addEventListener('change', () => {
            document.getElementById('nextButton').style.display = 'block';
        });

        optionElement.appendChild(radioButton);
        optionElement.appendChild(document.createTextNode(option));
        optionsElement.appendChild(optionElement);
    });

    const testQuestionsElement = document.getElementById('testQuestions');
    testQuestionsElement.innerHTML = '';
    testQuestionsElement.appendChild(questionElement);
    testQuestionsElement.appendChild(optionsElement);
        
    testQuestionsElement.appendChild(nextButton);

}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const answerIndex = parseInt(selectedAnswer.value);
        userAnswers[currentQuestionIndex] = answerIndex;
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
            document.getElementById('nextButton').style.display = 'none';
        } else {
          submitTest();
      }
    }
}

function submitTest() {
    const numCorrectAnswers = userAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
    const percentage = (numCorrectAnswers / questions.length) * 100;
    const resultMessage = `Вы правильно ответили на ${numCorrectAnswers} из ${questions.length} вопросов. (${percentage.toFixed(2)}%)`;

    document.getElementById('testQuestions').style.display = 'none';
    document.getElementById('testResults').textContent = resultMessage;
    document.getElementById('testResults').style.display = 'block';

    // Показать ответы пользователя (задача 5*)
    const answersContainer = document.createElement('div');
    answersContainer.innerHTML = '<h3>Ваши ответы:</h3>';
    userAnswers.forEach((answer, index) => {
        const question = questions[index];
        const answerElement = document.createElement('p');
        answerElement.textContent = `${index + 1}. ${question.question}`;
        answersContainer.appendChild(answerElement);
        const userAnswerElement = document.createElement('p');
        const isCorrect = answer === question.correctAnswer;
        userAnswerElement.textContent = `Ваш ответ: ${question.options[answer]} (${isCorrect ? 'Верно' : 'Неверно'})`;
        answersContainer.appendChild(userAnswerElement);
    });

    document.getElementById('testResults').appendChild(answersContainer);
}

document.getElementById('startButton').addEventListener('click', startTest);

// Задача 6: Заставка на весь экран
function showOverlay() {
    document.getElementById('overlay').style.display = 'block';
    let username = localStorage.getItem('username');
    if (username) {
        document.getElementById('overlayUsername').textContent = localStorage.getItem('username');
    }
    else {
        document.getElementById('overlayUsername').textContent = "пользователь";
    }
    const currentDate = new Date().toLocaleDateString();
    document.getElementById('overlayDate').textContent = currentDate;
}

function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
}

// Вспомогательная функция для добавления обработчиков событий после загрузки страницы
function initializePage() {
    document.getElementById('calculateButton').addEventListener('click', calculateTriangleArea);
}

// Добавляем обработчик события после загрузки страницы
window.addEventListener('DOMContentLoaded', initializePage);
