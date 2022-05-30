/* Задание 3.
Дан JSON-файл с информацией о выручке фирмы по кварталам за период с 2017 по 2019 год. Файл доступен по этой ссылке.
Вам нужно написать код приложения, интерфейс которого состоит из:
Выпадающего списка (использовать тег select, подробная документация здесь), в котором можно выбрать год с 2017 по 2018.
Кнопки «Загрузить отчет».
Пользователь выбирает год в списке и нажимает кнопку «Загрузить отчет». Если год не выбран, вывести сообщение «Выберите, пожалуйста, год».
Если год выбран, отправить XHR-запрос к JSON-файлу, используя URL, указанный выше, обработать его содержимое и вывести информацию о выручке
в выбранном году в виде таблицы. */

//URL-путь к JSON-файлу
const reqUrl = "https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440";

const btn = document.getElementById('.btn');

//список с годами
const yearList = document.querySelector('.year');

//первая строка таблицы
const tableFirstLine = document.querySelector('.year_tr_first');

//вторая строка таблицы
const tableSecondLine = document.querySelector('.year_tr_second');

//таблица
function DrawTable(yearData) {
	let firstLine = '';
	let secondLine = '';

	for (let key in yearData.sales) {
		console.log(key);
		console.log(yearData.sales[key]);
		const yearCell = `<td>${key}</td>`;
		const yearDataCell = `<td>${yearData.sales[key]}</td>`;
		firstLine = firstLine + yearCell;
		secondLine = secondLine + yearDataCell;
	}

	tableFirstLine.innerHTML = firstLine;
	tableSecondLine.innerHTML = secondLine;
}

//получение данных по выбранному году
function GetYearData(year, yearJSON) {
	const years = JSON.parse(yearJSON);
	for (let i = 0; i < years.length; i++) {
		let currentYear = years[i];
		if (currentYear.year == year) {
			DrawTable(currentYear);
		}
	}
}

//получение данных
function GetData(year, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', reqUrl);
	xhr.send();
	xhr.onerror = function () {
		console.log('Ошибка запроса');
	};
	xhr.onload = function () {
		callback(year, xhr.response);
	};
}

//кнопка с обработчиком события
btn.addEventListener('click', () => {
	GetData(yearList.value, GetYearData);
});