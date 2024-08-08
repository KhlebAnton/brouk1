
// show/ hide game screen

const gameScreen = document.querySelector('.screen-game');

function showGameScreen() {
    gameScreen.classList.remove('hidden');
}
function hideGameScreen() {
    gameScreen.classList.add('hidden');
}

//visible slider person 
// let Visible = function (target) {
//     // Все позиции элемента
//     let targetPosition = {
//         top: window.pageYOffset + target.getBoundingClientRect().top,
//         left: window.pageXOffset + target.getBoundingClientRect().left,
//         right: window.pageXOffset + target.getBoundingClientRect().right,
//         bottom: window.pageYOffset + target.getBoundingClientRect().bottom
//     },
//         // Получаем позиции окна
//         windowPosition = {
//             top: window.pageYOffset,
//             left: window.pageXOffset,
//             right: window.pageXOffset + document.documentElement.clientWidth - 50,
//             bottom: window.pageYOffset + document.documentElement.clientHeight - 50
//         };

//     if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
//         targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
//         targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
//         targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
//         // Если элемент полностью видно, то запускаем следующий код
//         return (target);
//     }
// };

// Запускаем функцию при прокрутке страницы
// window.addEventListener('scroll', function () {
//     Visible(element);
// });

// //bacground person
// let bgPerson = null;
// let bodyBg = null;
// function getBgPerson() {
//     const personSwiper = document.querySelector('.person-swiper');
//     const personList = personSwiper.querySelectorAll('.person');

//     personList.forEach((person) => {
//         if (Visible(person)) {
//             bgPerson = person.querySelector('.person-img').querySelector('img').src;

//             setBgUserTap(bgPerson)
//         }

//     });

// }
//set bgPerson in game 
// const userTapBg = document.querySelector('.user-tap');
// function setBgUserTap(url) {
//     userTapBg.style.backgroundImage = `url('${url}')`;

// }

