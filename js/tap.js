const totalCoin = document.getElementById('btn-total-coin')

document.querySelector('.js-tap').addEventListener('click', function(event) {
    const btn = event.currentTarget;
    const count = btn.getAttribute('data-count');

    const outerSpan = document.createElement('span');
    outerSpan.className = 'hero-tap__span';

    const innerSpan = document.createElement('span');
    innerSpan.innerText = count;

    outerSpan.appendChild(innerSpan);

    const rect = btn.getBoundingClientRect();
    const x = Math.round(event.clientX - rect.left);
    const y = Math.round(rect.bottom - event.clientY);

    outerSpan.style.left = `${x}px`;
    outerSpan.style.bottom = `${y}px`;

    btn.appendChild(outerSpan);

    setTimeout(() => {
        outerSpan.classList.add('is-show');
    }, 100);

    setTimeout(() => {
        outerSpan.classList.add('is-hide');
    }, 2900);

    setTimeout(() => {
        btn.removeChild(outerSpan);
    }, 3000);
    totalCoin.textContent = totalCoin.textContent - (-count);
});

document.addEventListener('DOMContentLoaded', () => {
    const tapButton = document.querySelector('.js-tap');
    const energyElement = document.querySelector('.user-energy');
    const progressElement = document.querySelector('.user-info-progress-line');
    
    tapButton.addEventListener('click', () => {
        let currentEnergy = parseFloat(energyElement.textContent.replace('k', ''));

        const count = parseFloat(tapButton.getAttribute('data-count')) / 100;

        currentEnergy += count;

        energyElement.textContent = currentEnergy.toFixed(2) + 'k';

        let currentProgress = parseFloat(progressElement.style.width);
        
        currentProgress -= 1;
        if (currentProgress < 0) currentProgress = 0;
        progressElement.style.width = `${currentProgress}%`;
    });
});