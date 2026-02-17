
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersDisplay = document.querySelector('.numbers-display');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    const getColorForNumber = (number) => {
        if (number <= 10) return '#fbc400'; // Yellow
        if (number <= 20) return '#69c8f2'; // Blue
        if (number <= 30) return '#ff7272'; // Red
        if (number <= 40) return '#aaa';    // Gray
        return '#b0d840'; // Green
    };

    const generateAndDisplayNumbers = () => {
        numbersDisplay.innerHTML = '';
        
        const selectedNumbers = new Set();
        while (selectedNumbers.size < 7) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            selectedNumbers.add(randomNumber);
        }

        const allNumbers = Array.from(selectedNumbers);
        const lottoNumbers = allNumbers.slice(0, 6).sort((a, b) => a - b);
        const bonusNumber = allNumbers[6];

        lottoNumbers.forEach(number => {
            const ball = document.createElement('div');
            ball.className = 'number-ball';
            ball.textContent = number;
            ball.style.backgroundColor = getColorForNumber(number);
            numbersDisplay.appendChild(ball);
        });

        const plusSign = document.createElement('div');
        plusSign.textContent = '+';
        plusSign.style.fontSize = '2rem';
        plusSign.style.lineHeight = '50px';
        plusSign.style.color = 'var(--plus-color)';
        plusSign.style.margin = '0 10px';
        numbersDisplay.appendChild(plusSign);

        const bonusBall = document.createElement('div');
        bonusBall.className = 'number-ball';
        bonusBall.textContent = bonusNumber;
        bonusBall.style.backgroundColor = getColorForNumber(bonusNumber);
        numbersDisplay.appendChild(bonusBall);
    };

    const toggleTheme = () => {
        const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
        if (currentTheme === 'dark') {
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌙';
        } else {
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = '☀️';
        }
    };

    themeToggleBtn.addEventListener('click', toggleTheme);

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggleBtn.textContent = '🌙';
    } else {
        themeToggleBtn.textContent = '☀️';
    }

    generateBtn.addEventListener('click', generateAndDisplayNumbers);
    generateAndDisplayNumbers();
});
