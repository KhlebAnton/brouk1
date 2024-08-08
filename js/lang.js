const selectLang = document.querySelector('.select-lang');
const optionSelect = selectLang.querySelector('.option-select')
const selectLandOptions = selectLang.querySelector('.select-lang-options')
optionSelect.addEventListener('click', () => {
    selectLang.classList.toggle('select-lang-open')
});
let selectLangPages = 'en';
const optionLangItems = selectLandOptions.querySelectorAll('.option');
optionLangItems.forEach((option) => {
    option.addEventListener('click', () => {
        let lang = option.getAttribute('data-lang');
        console.log(lang);
        selectLang.classList.remove('select-lang-open');
        optionSelect.textContent = option.textContent;
        switch (lang) {
            case 'ru':
                selectLangPages = 'ru';
                document.body.classList.add('languageRu');
                document.body.classList.remove('languageEn');
                break;
            case 'en':
                selectLangPages = 'en';
                document.body.classList.add('languageEn');
                document.body.classList.remove('languageRu');
                break;

            default:
                break;
        }
    })
});