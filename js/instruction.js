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
playInstruction();

function nextInfo() {
    if (countInfo != countInstr) {
        if (countInfo != 0) {
            instructionList[countInfo - 1].classList.remove('instruction-block')
        };
        instructionList[countInfo].classList.add('instruction-block');
        countInfo++;
    } else {
        instructionList[countInstr - 1].classList.remove('instruction-block');
        hideScreenInst();
        showBannerScr();
    }
}

// banner screen
const bannerScreen = document.querySelector('.screen-banner');
const btnNextBanner = document.getElementById('btn-next-banner');
const btnGamePlay = document.getElementById('btn-game-play');
function showBannerScr() {
    bannerScreen.classList.remove('hidden');
};
function hideBannerScr() {
    bannerScreen.classList.add('hidden');
};

const bannerList = document.querySelectorAll('.banner-info');
let activeBanner = bannerList[0];
function nextBanner() {
    if (activeBanner.nextElementSibling.classList.contains('banner-info')) {
        activeBanner.nextElementSibling.classList.remove('hidden');
        activeBanner.classList.add('hidden');
        activeBanner = activeBanner.nextElementSibling;
    } else {
        btnGamePlay.style.display='flex';
        btnNextBanner.style.display='none';
        btnGamePlay.onclick();
    }

}
