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