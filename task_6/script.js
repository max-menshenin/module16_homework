/* Задание 6.
Создать Promise, в котором c задержкой в три секунды сгенерировать случайное целое число от 1 до 100. Для создания задержки использовать
 setTimeout. Если сгенерированное число четное — Promise 
выполнится успешно (resolve), если
нечетное — выполнится с ошибкой (reject). После разрешения Promise обработать результат его выполнения и вывести сообщение в консоль:
«Завершено успешно. Сгенерированное число — number», если Promise завершился успешно. Вместо number подставить сгенерированное число
«Завершено с ошибкой. Сгенерированное число — number», если Promise завершился с ошибкой. Вместо number подставить сгенерированное 
число */

let num;
//Генератор случайного числа от 1 до 100
function setNum() {
	num = Math.ceil(Math.random() * 100);
}

//Создание promise
const myPromise = new Promise((resolve, reject) => {

	//генерация случайного числа с задержкой 3 с
	setTimeout(setNum(), 3000);
	if (num % 2 == 0) {
		resolve(`Завершено успешно. Сгенерированное число - ${num}`);
	} else {
		reject(`Завершено с ошибкой. Сгенерированное число - ${num}`);
	}
});

//Выполнение promise
myPromise
	.then((result) => {
		console.log('Обработка resolve', result);
	})
	.catch((error) => {
		console.log('Обработка reject', error);
	});