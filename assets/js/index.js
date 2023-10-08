// Раскрывающийся блок в секции "Вопрос-ответ"

let plus = document.querySelectorAll(".questions__plus");
let minus = document.querySelectorAll(".questions__minus");
let answer = document.querySelectorAll(".questions__answer");
for (let i = 0; i < plus.length; i++) {
	plus[i].addEventListener("click", function () {
		answer[i].classList.add("questions__answer_visible");
		plus[i].style.display = "none";
		minus[i].style.display = "block";
	});
}

for (let i = 0; i < plus.length; i++) {
	minus[i].addEventListener("click", function () {
		answer[i].classList.remove("questions__answer_visible");
		plus[i].style.display = "block";
		minus[i].style.display = "none";
	});
}

// Больше вопросов
let buttonMore = document.querySelector(".button_questions");
let questions = document.querySelectorAll(".questions__item");
if (buttonMore) {
	buttonMore.onclick = function () {
		for (let i = 0; i < questions.length; i++) {
			questions[i].style.display = "flex";
			buttonMore.style.display = "none";
		}
	};
}

// Гамбургер-меню

window.addEventListener("DOMContentLoaded", () => {
	let menu = document.querySelector(".header__menu"),
		menuItem = document.querySelectorAll(".header__link"),
		hamburger = document.querySelector(".hamburger");

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("hamburger_active");
		menu.classList.toggle("header__menu_active");
	});

	menuItem.forEach((item) => {
		item.addEventListener("click", () => {
			hamburger.classList.toggle("hamburger_active");
			menu.classList.toggle("header__menu_active");
		});
	});
});

// Карусель для home-comfort
let switchComfort = document.querySelectorAll(".carousel__dot_comfort");
let itemComfort = document.querySelectorAll(".home-comfort__item");
for (let i = 0; i < switchComfort.length; i++) {
	switchComfort[i].addEventListener("click", function () {
		switchComfort.forEach((el) => el.classList.remove("carousel__dot_active"));
		switchComfort[i].classList.toggle("carousel__dot_active");
		itemComfort.forEach((el) => (el.style.display = "none"));
		itemComfort[i].style.display = "block";
	});
}

// Карусель для home-quality
let switchQuality = document.querySelectorAll(".carousel__dot_quality");
let itemQuality = document.querySelectorAll(".home-quality__item");
for (let i = 0; i < switchQuality.length; i++) {
	switchQuality[i].addEventListener("click", function () {
		switchQuality.forEach((el) => el.classList.remove("carousel__dot_active"));
		switchQuality[i].classList.toggle("carousel__dot_active");
		itemQuality.forEach((el) => (el.style.display = "none"));
		itemQuality[i].style.display = "block";
	});
}

// Карусель для about-values
let switchValues = document.querySelectorAll(".carousel__dot_values");
let itemValues = document.querySelectorAll(".about-values__item");
for (let i = 0; i < switchValues.length; i++) {
	switchValues[i].addEventListener("click", function () {
		switchValues.forEach((el) => el.classList.remove("carousel__dot_active"));
		switchValues[i].classList.toggle("carousel__dot_active");
		itemValues.forEach((el) => (el.style.display = "none"));
		itemValues[i].style.display = "block";
	});
}

// Карусель для about-experts

let buttonLeftExperts = document.querySelector(".about-expert__arrow-left");
let buttonRightExperts = document.querySelector(".about-expert__arrow-right");
let cardExperts = document.querySelectorAll(".about-experts__item");
let i = 0;
buttonRightExperts.onclick = function () {
	if (i < cardExperts.length - 1) {
		cardExperts[i].style.display = "none";
		i = i + 1;
		cardExperts[i].style.display = "block";
	} else if (i == cardExperts.length - 1) {
		cardExperts[i].style.display = "none";
		i = i + 1;
	}
	if (i > cardExperts.length - 1) {
		i = 0;
		cardExperts[i].style.display = "block";
	}
};

buttonLeftExperts.onclick = function () {
	if (i == 0) {
		while (i < cardExperts.length - 1) {
			cardExperts[i].style.display = "none";
			i++;
		}
		i = cardExperts.length - 1;
		cardExperts[i].style.display = "block";
	} else if (i < cardExperts.length - 1 && i > 0) {
		cardExperts[i].style.display = "none";
		i = i - 1;
		cardExperts[i].style.display = "block";
	} else if (i == cardExperts.length - 1) {
		cardExperts[i].style.display = "none";
		i = i - 1;
		cardExperts[i].style.display = "block";
	}
};

// Карусель для about-documents
let switchDocuments = document.querySelectorAll(".carousel__dot_documents");
let itemDocuments = document.querySelectorAll(".about-documents__item");
for (let i = 0; i < switchDocuments.length; i++) {
	switchDocuments[i].addEventListener("click", function () {
		switchDocuments.forEach((el) => el.classList.remove("carousel__dot_active"));
		switchDocuments[i].classList.toggle("carousel__dot_active");
		itemDocuments.forEach((el) => (el.style.display = "none"));
		itemDocuments[i].style.display = "block";
	});
}

// Карусель для psychologyst-waitfromyou
let switchWait = document.querySelectorAll(".carousel__dot_waitfromyou");
let itemWait = document.querySelectorAll(".psychologyst-waitfromyou-item");
for (let i = 0; i < switchWait.length; i++) {
	switchWait[i].addEventListener("click", function () {
		switchWait.forEach((el) => el.classList.remove("carousel__dot_active"));
		switchWait[i].classList.toggle("carousel__dot_active");
		itemWait.forEach((el) => (el.style.display = "none"));
		itemWait[i].style.display = "block";
	});
}
