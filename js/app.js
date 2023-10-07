
// 1. вывести одной строкой минимальное значние массива array с помощью деструктуризации и Math
const array = [1, 2, 3, 4, 6, 710, 34013,013];
const min = Math.min(...array);
console.log(min);

// 2.функция multiply не принимает явно никаких параметров
function multiply() {
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}
const result = multiply(100, 200, 83902, 1230);
console.log(result); // В результате фукнции должно вернутся число, которое является результатом умножения всех аргументов переданых в функцию

// 3. У нас есть фукниця totalPrice, с помощью деструктуризации объекта сделать так, что б функция работала.
const product = {
  productName: 'Water',
  price: 20,
  count: 3
}

function totalPrice({ price, count }) {
  return price * count;
}

const result = totalPrice(product);
console.log(result);

//4. написать объект в котором будет свойство items (изначально пустой массив), 
// метод объекта setItems который принимает массив значений и устанавливает этот массив как значение свойста items
// метод объекта sum котроый возвращает сумму всех элементов массива items 
// метод maxValue который возвращает максимальное значение из массива items с использованием деструктуризации массива.

const myObject = {
  items: [],
  setItems: function (arr) {
    this.items = arr;
  },
  sum: function () {
    return this.items.reduce((a, b) => a + b, 0);
  },
  maxValue: function () {
    return Math.max(...this.items);
  }
};

// 5. Написать функционал что б при вызове showPrediction выводилась случайная фраза из массива predictsArr1 для predictions1 и predictsArr2 для predictions2

const predictsArr1 = [
  'Удача придет откуда не ждете.',
  'Давние долги будут возвращены вам.',
  'Вас ожидает неожиданное денежное поступление.',
  'Все неоконченные дела будут завершены.',
  'Яркое приключение уже поджидает вас.',
  'Планирование времени поможет вам не опоздать на встречу.',
  'Интуиция на этот раз не подведет вас. Используйте это.',
  'Прислушайтесь к себе и ответ на вопрос будет найден.',
  'Появится возможность отправиться в дорогу.',
  'Ваш ценный опыт сможет кому-то помочь, если перестанете его прятать в себе.',
  'Вам не удастся понравиться абсолютно всем, не тратьте на это энергию.',
  'Одежда, которая вас старит, не достанется вам.'
];
const predictsArr2 = [
  'Вы найдете то, что ищете.',
  'Ваш труд будет вознагражден.',
  'Вы получите хорошие новости от дальнего родственника.',
  'Ваша жизнь скоро изменится к лучшему.',
  'Вы найдете новых друзей, которые будут поддерживать вас.',
  'Вы получите возможность путешествовать за границу.',
  'Вы найдете новое хобби, которое станет вашим увлечением на всю жизнь.',
  'Вы получите возможность начать новый бизнес или проект.',
  'Вы найдете свою любовь всей своей жизни.'
];
const obj = {
  predictions1: [],
  predictions2: [],
  setPredictions(arr1, arr2) {
    this.predictions1 = arr1;
    this.predictions2 = arr2;
  },
  showPrediction() {
    const randomIndex1 = Math.floor(Math.random() * this.predictions1.length);
    const randomIndex2 = Math.floor(Math.random() * this.predictions2.length);
    console.log(`Prediction 1: ${this.predictions1[randomIndex1]}`);
    console.log(`Prediction 2: ${this.predictions2[randomIndex2]}`);
  },
  takeNumber() {
    return Math.floor(Math.random() * 100);
  },
}

const predictions = obj;
predictions.setPredictions(predictsArr1, predictsArr2);