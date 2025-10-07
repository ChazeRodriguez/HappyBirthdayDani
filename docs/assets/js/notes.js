// Back to menu navigation
document.getElementById('backToMenu').addEventListener('click', function() {
    window.location.href = 'gift.html';
});

// Envelope opening animation
document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const letterContainer = document.getElementById('letterContainer');
    const songUrl = 'src/Images/music/HONNE - free love (dream edit).mp3';
    
    envelopeWrapper.addEventListener('click', function() {
        // Play music when opening envelope
        if (window.musicPlayer) {
            window.musicPlayer.loadAndPlay(songUrl);
        }
        
        // Animate envelope opening
        const flap = document.querySelector('.envelope-flap');
        flap.style.transform = 'rotateX(180deg)';
        
        // Hide envelope after animation
        setTimeout(() => {
            envelopeWrapper.classList.add('hidden');
            
            // Show letter
            setTimeout(() => {
                letterContainer.classList.add('show');
                createConfetti();
            }, 300);
        }, 800);
    });
});

// Create confetti effect when letter appears
function createConfetti() {
    const colors = ['#d63031', '#ff69b4', '#ffb6c1', '#ff1493'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        document.body.appendChild(confetti);
        
        const endY = window.innerHeight + 50;
        const rotation = Math.random() * 720 - 360;
        const duration = 2000 + Math.random() * 1000;
        const delay = Math.random() * 300;
        
        setTimeout(() => {
            const animation = confetti.animate([
                { 
                    transform: `translateY(0) rotate(0deg)`,
                    opacity: 1
                },
                { 
                    transform: `translateY(${endY}px) rotate(${rotation}deg)`,
                    opacity: 0
                }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.4, 0, 0.6, 1)'
            });
            
            animation.onfinish = () => confetti.remove();
        }, delay);
    }
}
