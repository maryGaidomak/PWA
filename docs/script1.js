function p1task0 () {
    // 0. Создать переменную, узнать ее тип, добавить вывод на экран текста, в зависимости от значения (if else)

    let userInput = prompt("Введите значение: ");

    if (userInput === null) {
        alert("Ничего не введено.");
    } else if (!isNaN(userInput)) {
        alert("Это число");
    } else if (userInput.toLowerCase() === "true" || userInput.toLowerCase() === "false") {
        alert("Это булевое значение");
    } else {
        alert("Это строка");
    }
}

function p1task1() {
    /* 1. запросить у пользователя знак зодиака, и в зависимости от ответа выдать всплывающее окно приветствия 
    (вместо знака зодиака, можно запросить другие данные, предполагающие несколько вариантов ответа) (switch)
    */

    let sign = prompt("Введите ваш знак зодиака: ").toLowerCase().trim();

    switch(sign) {
        case "овен":
            alert("Привет, Овен!");
            break;
        case "телец":
            alert("Привет, Телец!");
            break;
        case "близнецы":
            alert("Привет, Близнецы!");
            break;
        case "рак":
            alert("Привет, Рак!");
            break;
        case "лев":
            alert("Привет, Лев! У нас одинаковые знаки!");
            break;
        case "дева":
            alert("Привет, Дева!");
            break;
        case "весы":
            alert("Привет, Весы!");
            break;
        case "скорпион":
            alert("Привет, Скорпион!");
            break;
        case "стрелец":
            alert("Привет, Стрелец!");
            break;
        case "козерог":
            alert("Привет, Козерог!");
            break;
        case "водолей":
            alert("Привет, Водолей!");
            break;
        case "рыбы":
            alert("Привет, Рыбы!");
            break;
        default:
            alert("Неверный знак зодиака");
            break;
    }

}

function p1task2() {
    // 2. Вывести все числа от 1 до 40, с использованием 3-х разных циклов
    alert("Результат задания отображен в консоли");

    console.log(`Числа от 1 до 40, выводятся циклом for`);
    for (let i = 1; i <= 40; i++) {
        console.log(i);
    }
    
    console.log(`Числа от 1 до 40, выводятся циклом while`);
    let j = 1;
        while (j <= 40) {
        console.log(j);
        j++;
    }

    console.log(`Числа от 1 до 40, выводятся циклом do while`);
    let k = 1;
    do {
        console.log(k);
        k++;
    } while (k <= 40);

}

function p1task3() {
    // 3. Создайте вирусную страницу с постоянно повторяющемся сообщением

    function showAlert() {
        alert("Вы поймали вирус!");
        setTimeout(showAlert, 1000); // 1 сек.
    }

    showAlert();
}

function p1task4() {
    /* 4. Запросить у пользователя любое число больше 5, в случае правильного ответа выдать окошко с поздравлением, 
    в случае неправильного ответа вывести повторное окно с вопросом 
    (помните, что пользователь может нажать "отмена", помните о типах данных)
    */

    let number;

    do {
        number = prompt("Введите число больше 5: ");

        if (number === null) {
            alert("Ничего не введено.");
            break;
        } else if (number !== '' && !isNaN(number) && Number(number) > 5) {
            alert("Поздравляем, вы умеете считать!");
            break;
        } else {
            alert("Увы, попробуйте ещё раз...");
        }
    } while (true);
}

function p1task5() {
    // 5. Выведите четные числа от 8 до 20

    alert("Результат задания отображен в консоли");
    for (let i = 8; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

function p1task6() {
    // 6. выведите нечетные числа от 1 до 7, пропустив 5
    
    alert("Результат задания отображен в консоли");
    for (let i = 1; i <= 7; i++) {
        if (i % 2 !== 0 && i !== 5) {
            console.log(i);
        }
    }
}








