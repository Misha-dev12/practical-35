'use strict';

// !У всіх задачах доступ до форм лише через document.forms (де це можливо)!

// 1. Є HTML-форма:
// <form name="form">
//   <input type="text" name="input1">
//   <input type="text" name="input2">
//   <button name="btn">Swap</button>
// </form>
// Після натискання на кнопку, виконайте обмін вмістом між двома інпутами. Під час повторного натискання знову змінити вміст інпутів

// const form = document.forms.formOne;
// const elemFormOne = form.input1;
// const elemFormTwo = form.input2;

// form.addEventListener('submit', e => {
// 	[elemFormOne.value, elemFormTwo.value] = [
// 		elemFormTwo.value,
// 		elemFormOne.value,
// 	];
// 	e.preventDefault();
// });

// 2. Є HTML-форма:
// <form name="form">
//   <input type="text" name="input">
//   <button name="lock">Lock</button>
//   <button name="unlock">Unlock</button>
// </form>
// При натисканні Заблокувати кнопка блокує інпут за допомогою атрибута disabled, а інша розблоковує.

// const form = document.forms.formTwo;
// const input = form.input;
// const lock = form.lock;
// const unlock = form.unlock;

// lock.addEventListener('click', e => {
// 	e.preventDefault();
// 	input.disabled = true;
// });
// unlock.addEventListener('click', e => {
// 	e.preventDefault();
// 	input.disabled = false;
// });

// 3. Є HTML-форма:
{
	/* <form name="form">
  <input type="text" name="input">
  <a href="https://www.youtube.com/watch?v=OtJkXuqyjkk&list=PLRD56Ql8zouzzCQWIwysCdq8UvC6LmCYh&index=16">Click here</a>
</form> */
}
// Напишіть код, який під час натискання на лінк заповнюватиме інпут значенням з атрибута href.
// ! Розмітку не можна.

// const form = document.forms.formThree;
// const input = form.input;
// const link = form.querySelector('a');
// link.addEventListener('click', (e)=> {
//   e.preventDefault();
//   input.value = link.getAttribute('href')
// })

// 4. Є HTML-форма:
{
	/* <form name="form">
  <textarea name="textarea"></textarea>
  <button name="btn">Statistics</button>
</form>
<div>
  Spaces: 10
  Consonants: 5
  Vowels: 4
</div> */
}
// Напишіть скрипт, який під час натискання на кнопку отримуватиме текст із багаторядкового текстового поля, підраховуватиме статистику (приклад вище) і результат виводитиме в div

// const form = document.forms.formFour;
// const textarea = form.textarea;
// const button = form.btn;
// const statistics = document.querySelector('.statistics');

// button.addEventListener('click', e => {
// 	e.preventDefault();
// 	let spaces = 0;
// 	let consonants = 0;
// 	let vowels = 0;
// 	const text = textarea.value.toLowerCase();

// 	for (let symbol of text) {
// 		if (symbol === ' ') {
// 			spaces++;
// 		} else if ('аеєиіїоуюя'.includes(symbol)) {
// 			vowels++;
// 		} else if (symbol.match(/[бвгґдджзйклмнпрстфхцчшщ]/i)) {
// 			consonants++;
// 		}
// 	}
// 	statistics.innerHTML = `Пробіли: ${spaces}; Приголосні: ${consonants}; Голосні: ${vowels}. `;
// });

// 5. Є HTML-форма:
// <form name="form">
//   <input type="file" name="file">
//   <button name="btn">Upload image</button>
// </form>
// Ваше завдання - завантажити картинку і по кліку на кнопку вивести її в HTML. Якщо картинка не вибрана - вивести повідомлення: "You should upload an image". Також має бути кнопка видалення картинки. Гарно стилізувати (згадаєте, що таке css)
// const fileUrl = URL.createObjectURL(file)

// const form = document.forms.formFive;
// const inputFile = form.file;
// const button = form.btn;
// const imageContainer = document.querySelector('.image');

// button.addEventListener('click', e => {
// 	e.preventDefault();
// 	imageContainer.innerHTML = '';
// 	if (inputFile.files.length === 0) {
// 		imageContainer.textContent = 'You should upload an image'; //
// 		return;
// 	}

// 	const file = inputFile.files[0];
// 	const fileUrl = URL.createObjectURL(file);

// 	const img = document.createElement('img');
// 	img.src = fileUrl;
// 	img.alt = 'Uploaded Image';

// 	const removeButton = document.createElement('button');
// 	removeButton.textContent = 'Remove Image';
// 	removeButton.addEventListener('click', () => {
// 		img.remove(); //
// 		removeButton.remove();
// 		URL.revokeObjectURL(fileUrl);
// 		inputFile.value = '';
// 		fileLabel.textContent = 'Select file';
// 	});

// 	imageContainer.append(img);
// 	imageContainer.append(removeButton);
// });

// const fileLabel = document.querySelector('label[for="file"]');
// inputFile.addEventListener('change', function () {
// 	const fileName = this.files.length > 0 ? this.files[0].name : 'Select file';
// 	fileLabel.textContent = fileName;
// });

/* 6. Створити todo-list */

// const form = document.forms.form;
// const addText = form.addText;
// const list = document.querySelector('.to-do__list');
// let idCounter = 0;

// form.addEventListener('submit', e => {
// 	e.preventDefault();
// 	idCounter++;
// 	const li = document.createElement('li');
// 	const input = document.createElement('input');
// 	const label = document.createElement('label');
// 	const buttonRemove = document.createElement('button');
// 	const idInput = 'checkbox-' + idCounter;
// 	const text = addText.value.trim();

// 	if (text === '') {
// 		return;
// 	}
// 	label.textContent = addText.value;
// 	addText.value = '';
// 	li.classList.add('to-do__item');
// 	buttonRemove.classList.add('to-do__btn-remove');
// 	buttonRemove.textContent = 'x';
// 	input.type = 'checkbox';
// 	input.id = idInput;
// 	label.htmlFor = idInput;

// 	li.prepend(label);
// 	li.prepend(input);
// 	li.append(buttonRemove);
// 	list.prepend(li);
// 	buttonRemove.addEventListener('click', () => {
// 		li.remove();
// 	});
// });
