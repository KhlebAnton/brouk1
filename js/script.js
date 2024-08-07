//preloader 
const countProgress = document.getElementById('preloader-progress-count');
const lineProgress = document.querySelector('.prelodaer-progress-bar-line');

function setProgress(progress) {
    countProgress.textContent = progress;
    lineProgress.style.width = `${progress}%`;
}

// show and hide preloader
const preloaderScreen = document.querySelector('.preloader');

function showPreloader() {
    preloaderScreen.classList.remove('hidden');
};
function hidePreloader() {
    preloaderScreen.classList.add('hidden');
};

// presentation preloader
let countPrel = 0;
let presentPreloader = setInterval(() => {
    setProgress(countPrel);
    if (countPrel >= 100) {
        clearInterval(presentPreloader);
        hidePreloader();
        showWelcome()
    }
    countPrel += 5;
}, 100);

//lang select 
const selectLang = document.querySelector('.select-lang');
const optionSelect = selectLang.querySelector('.option-select')
const selectLandOptions = selectLang.querySelector('.select-lang-options')
optionSelect.addEventListener('click', () => {
    selectLang.classList.toggle('select-lang-open')
});

const optionLangItems = selectLandOptions.querySelectorAll('.option');
optionLangItems.forEach((option) => {
    option.addEventListener('click', () => {
        let lang = option.getAttribute('data-lang');
        console.log(lang);
        selectLang.classList.remove('select-lang-open');
        optionSelect.textContent = option.textContent;
        switch (lang) {
            case 'ru':
                document.body.classList.add('languageRu');
                document.body.classList.remove('languageEn');
                break;
            case 'en':
                document.body.classList.add('languageEn');
                document.body.classList.remove('languageRu');
                break;

            default:
                break;
        }
    })
});
const screenWelcome = document.querySelector('.screen-welcome')

function showWelcome() {
    screenWelcome.classList.remove('hidden');
}
function hideWelcome() {
    screenWelcome.classList.add('hidden');
}

//open select person 
const selectPerson = document.querySelector('.screen-select-person');

function openPersonSelect(screen) {
    hideWelcome();
    selectPerson.classList.remove('hidden');

}
function hidePersonSelect() {
    selectPerson.classList.add('hidden')
}


// show/ hide game screen

const gameScreen = document.querySelector('.screen-game');

function showGameScreen() {
    gameScreen.classList.remove('hidden');
}
function hideGameScreen() {
    gameScreen.classList.add('hidden');
}

//visible slider person 
let Visible = function (target) {
    // Все позиции элемента
    let targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth - 50,
            bottom: window.pageYOffset + document.documentElement.clientHeight - 50
        };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        return (target);
    }
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    Visible(element);
});

//bacground person
let bgPerson = null;
let bodyBg = null;
function getBgPerson() {
    const personSwiper = document.querySelector('.person-swiper');
    const personList = personSwiper.querySelectorAll('.person');

    personList.forEach((person) => {
        if (Visible(person)) {
            bgPerson = person.querySelector('.person-img').querySelector('img').src;

            setBgUserTap(bgPerson)
        }

    });

}
//set bgPerson in game 
const userTapBg = document.querySelector('.user-tap');
function setBgUserTap(url) {
    userTapBg.style.backgroundImage = `url('${url}')`;

}

// info instruction show 
const screenInst = document.querySelector('.screen-instruction');

function showScreenInst() {
    screenInst.classList.remove('hidden')
};
function hideScreenInst() {
    screenInst.classList.add('hidden')
};


//play instruction
const btnSellProperty = document.querySelector('.btn-footer-sell'); //instruction-block
const btnBuyCrypt = document.querySelector('.btn-footer-buy'); //instruction-block

const btnTopMoney = document.querySelector('.btn-top-money'); // .instruction-block-top
const btnTopCheck = document.querySelector('.btn-top-check');// .instruction-block-top
const btnTopBoost = document.querySelector('.btn-top-boost');// .instruction-block-top

const btnHeaderEarn = document.querySelector('.btn-earn-gradient'); //.instruction-block-header
const btnUserInfo = document.querySelector('.user-info'); //.instruction-block-header

const btnNextInfo = document.getElementById('.btn-next-info');

const instructionList = [
    btnSellProperty,
    btnBuyCrypt,
    btnTopMoney,
    btnTopCheck,
    btnTopBoost,
    btnHeaderEarn,
    btnUserInfo
];
let countInstr = instructionList.length;
let countInfo = 0;
function playInstruction() {
    showScreenInst();
    nextInfo();

};

function nextInfo() {
    if (countInfo != countInstr) {
        if (countInfo != 0) {
            instructionList[countInfo - 1].classList.remove('instruction-block')
        };
        instructionList[countInfo].classList.add('instruction-block');
        countInfo++;
    } else {
        instructionList[countInstr - 1].classList.remove('instruction-block');
        hideScreenInst()
    }



}