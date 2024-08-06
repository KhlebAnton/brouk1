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
let count = 0;
let presentPreloader = setInterval(() => {
    setProgress(count);
    if (count >= 100) {
        clearInterval(presentPreloader);
        hidePreloader();
        showWelcome()
    }
    count += 5;
}, 100);

//lang select 
// const langSelect = document.getElementById('select-lang');
// function changeOption(){
//     const selectedOption = langSelect.options[langSelect.selectedIndex];
//     console.log(selectedOption.value);
//     switch (selectedOption.value) {
//         case 'ru':
//             document.body.classList.add('languageRu');
//             document.body.classList.remove('languageEn');
//             break;
//         case 'en':
//             document.body.classList.add('languageEn');
//             document.body.classList.remove('languageRu');
//             break;

//         default:
//             break;
//     }
// }

// langSelect.addEventListener("change", changeOption);

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