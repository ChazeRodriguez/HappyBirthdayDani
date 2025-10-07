// Simple Music Player for Song Page
class GlobalMusicPlayer {
    constructor() {
        this.audio = new Audio();
        this.isPlaying = false;
        this.currentSong = null;
        this.init();
    }

    init() {
        // Create floating player UI
        this.createPlayerUI();
    }

    createPlayerUI() {
        const playerHTML = `
            <div id="floatingPlayer" class="floating-player hidden">
                <div class="player-content">
                    <div class="player-info">
                        <span class="player-title">free love - dream edit</span>
                        <span class="player-artist">HONNE</span>
                    </div>
                    <div class="player-controls">
                        <button id="playerPlayPause" class="player-btn">
                            <svg class="play-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                            <svg class="pause-icon hidden" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                            </svg>
                        </button>
                        <button id="playerClose" class="player-btn close-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="player-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" id="progressFill"></div>
                    </div>
                    <div class="player-time">
                        <span id="currentTime">0:00</span>
                        <span id="duration">0:00</span>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', playerHTML);

        // Add event listeners
        document.getElementById('playerPlayPause').addEventListener('click', () => this.togglePlayPause());
        document.getElementById('playerClose').addEventListener('click', () => this.stop());

        // Audio event listeners
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
        this.audio.addEventListener('ended', () => this.handleEnded());
    }

    loadAndPlay(url) {
        this.audio.src = url;
        this.currentSong = url;
        
        return this.audio.play().then(() => {
            this.isPlaying = true;
            this.showPlayer();
            this.updateUI();
        }).catch(error => {
            console.error('Playback failed:', error);
            throw error;
        });
    }

    togglePlayPause() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    play() {
        if (this.audio.src) {
            this.audio.play();
            this.isPlaying = true;
            this.updateUI();
        }
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.updateUI();
    }

    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
        this.currentSong = null;
        this.hidePlayer();
    }

    showPlayer() {
        document.getElementById('floatingPlayer').classList.remove('hidden');
    }

    hidePlayer() {
        document.getElementById('floatingPlayer').classList.add('hidden');
    }

    updateUI() {
        const playIcon = document.querySelector('.play-icon');
        const pauseIcon = document.querySelector('.pause-icon');
        
        if (this.isPlaying) {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        } else {
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        }
    }

    updateProgress() {
        const progress = (this.audio.currentTime / this.audio.duration) * 100;
        document.getElementById('progressFill').style.width = progress + '%';
        document.getElementById('currentTime').textContent = this.formatTime(this.audio.currentTime);
    }

    updateDuration() {
        document.getElementById('duration').textContent = this.formatTime(this.audio.duration);
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    handleEnded() {
        this.isPlaying = false;
        this.updateUI();
    }
}

// Initialize player when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.musicPlayer = new GlobalMusicPlayer();
});

