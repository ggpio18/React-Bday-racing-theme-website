document.addEventListener('DOMContentLoaded', () => {
    const car = document.getElementById('raceCar');
    const speedDisplay = document.getElementById('speed');
    const timerDisplay = document.getElementById('timer');
    
    let speed = 0;
    let position = 50;
    let isRevving = false;

    // Set party date (24 hours from now for demo)
    const partyDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

    function updateTimer() {
        const now = new Date();
        const diff = partyDate - now;

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function updateCar() {
        if (isRevving) {
            speed = Math.min(speed + 2, 120);
            position = Math.min(position + speed/30, window.innerWidth - 100);
        } else {
            speed = Math.max(speed - 1, 0);
        }

        speedDisplay.textContent = Math.floor(speed);
        car.style.transform = `translateX(${position}px) ${speed > 0 ? 'rotate(-5deg)' : 'rotate(0deg)'}`;

        if (position >= window.innerWidth - 100) {
            celebrateFinish();
        }
    }

    function celebrateFinish() {
        const emojis = ['🎉', '🎈', '🎊', '🏆'];
        for (let i = 0; i < 20; i++) {
            const emoji = document.createElement('div');
            emoji.className = 'celebration-emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = `${Math.random() * 100}vw`;
            emoji.style.animationDelay = `${Math.random() * 2}s`;
            document.body.appendChild(emoji);
            setTimeout(() => emoji.remove(), 3000);
        }
    }

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            isRevving = true;
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.code === 'Space') {
            isRevving = false;
        }
    });

    // Update car and timer
    setInterval(updateCar, 50);
    setInterval(updateTimer, 1000);
    updateTimer();
});