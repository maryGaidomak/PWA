// 1. создать массив 3 разными способами
function p2task1() {
    alert("Результат задания отображен в консоли");
    let array1 = [1, 2, 3];
    let array2 = new Array(11, 222, 313);
    let array3 = Array.of('a', 'b', 'c', 'd', 'e');

    console.log("Массивы созданы тремя способами:");
    console.log("массив 1:", array1);
    console.log("массив 2:", array2);
    console.log("массив 3:", array3);
}

// 2. выведите на экран 5 член вашего массива затем измените его значение 
function p2task2() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    alert("Массив :" + array);
    alert("Пятый элемент массива: " + array[4]);
    array[4] = 100;
    alert("Массив после изменения:" + array);
}

// 3. Узнайте длину вашего массива и выведите ее значение при наведении на любой элемент
function p2task3() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';

    array.forEach((item, index) => {
        let block = document.createElement('div');
        block.className = 'array-item';
        block.dataset.index = index;
        block.textContent = item;
        block.style.border = '1px solid black';
        block.style.padding = '10px';
        block.style.margin = '5px';
        
        block.addEventListener('mouseover', function() {
        alert("Текущая длина массива " + (index + 1));
        });
        
        container.appendChild(block);
    });

    document.body.innerHTML = '';
    document.body.appendChild(container);
}
  
// 4. Выведите все элементы массива, используя цикл for
function p2task4() {
    alert("Результат задания отображен в консоли");
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
  
// 5. Создайте 2 массива. Объедините их в один и выведите на экран полученный массив
function p2task5() {
    alert("Результат задания отображен в консоли");
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];
    let combinedArray = array1.concat(array2);
    console.log("Объединенный массив:", combinedArray);
}
  
// 6. Удалите последний член получившегося массива и выведите это значение на экран
function p2task6() {
    let array = [1, 2, 3, 4, 5, 6];
    alert("Массив: " + array);
    let removedElement = array.pop();
    alert("Удаленный элемент: " + removedElement);
    alert("Массив после удаления: " + array);
}
  
// Задания 6 и 7 были одинаковые
  
// 8. Добавьте новый элемент в начало вашего объединенного массива
function p2task8() {
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];
    let combinedArray = array1.concat(array2);
    alert("Массив: " + combinedArray);
    combinedArray.unshift(100);
    alert("Массив после добавления элемента в начало: " + combinedArray);
}
  
// 9. Получите сегодняшнюю дату и выведите ее на экран
function p2task9() {
    let today = new Date();
    alert("Сегодняшняя дата: " + today.toString());
}
  
// 10. Выведите сегодняшнюю дату в формате 11 ноября 2020 года
function p2task10() {
    let today = new Date();
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = today.toLocaleDateString('ru-RU', options);
    alert("Сегодняшняя дата в формате dd mmmm yyyy: " + formattedDate);
}
  
// 11. напишите функцию, подсчитывающую произведение двух случайных чисел в промежутке от нуля до 50
function p2task11() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let num1 = getRandomInt(51);
    let num2 = getRandomInt(51);
    let multiple = num1 * num2;

    alert(`Произведение чисел ${num1} и ${num2} равно ${multiple}`);
}