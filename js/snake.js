let ctx = canvas.getContext("2d"); // Получаем "контакс" (методы для рисования в canvas) //Сохраняем для удобства
let sBody = null; // Начально тело змейки - два элемента
let direction = 1; // Направление змейки 1 - dправо, 2 - вниз 3 - влево, 4 - вверх
let apples = null; // Яблоко, массив, 0 элемент - x, 1 элемнт - y
let size = 20; // Размер каждого квадрата на странице
let score = 0; // начальный счет


canvas.width = 600; // Сохранем четкость изображения, выставив полную ширину экрана
canvas.height = 600; // То же самое, но только с высотой

let rand = function (min, max) {
	k = Math.floor(Math.random() * (max - min) + min);
	return Math.round(k / size) * size;
};
let newA = function () {
	apples = [rand(0, 600), rand(0, 600)];
};
let newB = function () {
	sBody = [
		{
			x: 600,
			y: Math.floor(600 / 2),
		},
	];
};

newB();
newA(); //Создаем змейку

setInterval(function () {
	if (apples[0] + size >= canvas.width || apples[1] + size >= canvas.height)
		newA();
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем старое
	ctx.fillStyle = "#addfad"; // Заливка яблока
	let [xCoord, yCoord] = [...apples];
	ctx.fillRect(xCoord, yCoord, size, size); // Отрисовка яблока на рандомной позиции
	ctx.fillStyle = "#dff3ff"; // Заливка цветом змейки

	sBody.forEach(function (el, i) {
		if (
			el.x == sBody[sBody.length - 1].x &&
			el.y == sBody[sBody.length - 1].y &&
			i < sBody.length - 1
		)
			sBody.splice(0, sBody.length - 1),
				(sBody = [{ x: 0, y: 0 }]),
				(direction = 1),
				alert('Score :' + score),
				score = 0,
				$("#score").html(score); // Проверка на столкновение
	});
	let m = sBody[0];
	let f = { x: m.x, y: m.y };
	let l = sBody[sBody.length - 1]; // сохраняем хвост и голову змейки

	if (direction == 1) (f.x = l.x + size), (f.y = Math.round(l.y / size) * size); // Если направление вправо, то тогда сохраняем Y, но меняем X на + s
	if (direction == 2) (f.y = l.y + size), (f.x = Math.round(l.x / size) * size); // Если направление вниз, то сохраняем X, но меняем Y на + s
	if (direction == 3) (f.x = l.x - size), (f.y = Math.round(l.y / size) * size); // Если направление влево, то сохраняем Y, но меняем X на -s
	if (direction == 4) (f.y = l.y - size), (f.x = Math.round(l.x / size) * size); // Если направление вверх, то сохраняем X, Но меняем Y на -ss
	sBody.push(f); // Добавляем хвост после головы с новыми координатами
	sBody.splice(0, 1); // Удаляем хвост
	// Отрисовываем каждый элемент змейки
	sBody.forEach(function (pob, i) {
		if (direction == 1)
			if (pob.x > Math.round(canvas.width / size) * size - 10) pob.x = 0; // Если мы двигаемся вправо, то если позиция эемента по X больше, чем ширина экрана, то ее надо обнулить
		if (direction == 2)
			if (pob.y > Math.round(canvas.height / size) * size - 10) pob.y = 0; // Если мы двигаемся внизу, то если позиция элемента по X больше, чем высота экрана, то ее надо обнулить
		if (direction == 3)
			if (pob.x < 0) pob.x = Math.round(canvas.width / size) * size - 20; // Если мы двигаемся влево, и позиция по X меньше нуля, то мы ставим элемент в самый конец экрана (его ширина)
		if (direction == 4)
			if (pob.y < 0) pob.y = Math.round(canvas.height / size) * size - 20; // Если мы двигаемся вверх, и позиция по Y меньше нуля, то мы ставим элемент в самый низ экрана (его высоту)
		if (pob.x == apples[0] && pob.y == apples[1]) {
			score += 1;
			$("#score").html(score);
			newA(), sBody.unshift({ x: f.x - size, y: l.y });
		}
		ctx.fillRect(pob.x, pob.y, size, size); // size - это ширина и высота нашего "квадрата"
	});
}, 3000 / 30);

// Контроль за направлением движения змейки
onkeydown = function (e) {
	let key = e.keyCode;
	if ([38, 39, 40, 37].indexOf(key) >= 0)
		// Останавливаем событие, отменяем его действие по умолчанию. На пример, при ажатии на стрелочку вверх мог произойти скролл, но он не произойдет, так как мы его отменили
		e.preventDefault();
	if (key == 39 && direction != 3) direction = 1; // Вправо
	if (key == 40 && direction != 4) direction = 2; // Вниз
	if (key == 37 && direction != 1) direction = 3; // Влево
	if (key == 38 && direction != 2) direction = 4; // Вверх
};