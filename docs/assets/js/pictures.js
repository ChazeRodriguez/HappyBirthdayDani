// Back button navigation
document.getElementById('backToMenu').addEventListener('click', function() {
    window.location.href = 'gift.html';
});

// Video autoplay on hover
document.querySelectorAll('.video-player').forEach(video => {
    const videoFrame = video.closest('.video-frame');
    
    videoFrame.addEventListener('mouseenter', function() {
        video.play().catch(error => {
            console.log('Autoplay prevented:', error);
        });
    });
    
    videoFrame.addEventListener('mouseleave', function() {
        video.pause();
        video.currentTime = 0; // Reset to start
    });
});

// Photo fullscreen toggle
document.querySelectorAll('.film-photo').forEach(photo => {
    photo.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Check if already fullscreen
        if (this.classList.contains('fullscreen')) {
            closeFullscreen();
        } else {
            openFullscreen(this);
        }
    });
});

function openFullscreen(photo) {
    // Remove fullscreen from other photos
    document.querySelectorAll('.film-photo.fullscreen').forEach(p => {
        p.classList.remove('fullscreen');
    });
    
    // Remove existing backdrop
    const existingBackdrop = document.querySelector('.photo-backdrop');
    if (existingBackdrop) {
        existingBackdrop.remove();
    }
    
    // Create backdrop FIRST
    const backdrop = document.createElement('div');
    backdrop.className = 'photo-backdrop';
    backdrop.addEventListener('click', closeFullscreen);
    document.body.appendChild(backdrop);
    
    // Small delay to ensure backdrop is rendered before photo
    setTimeout(() => {
        photo.classList.add('fullscreen');
    }, 10);
    
    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    // Remove backdrop
    const backdrop = document.querySelector('.photo-backdrop');
    if (backdrop) {
        backdrop.remove();
    }
    
    // Remove fullscreen from photos
    document.querySelectorAll('.film-photo.fullscreen').forEach(photo => {
        photo.classList.remove('fullscreen');
    });
    
    document.body.style.overflow = 'auto';
}

