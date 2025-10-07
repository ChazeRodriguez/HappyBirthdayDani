// Index page - button handlers
if (document.getElementById('yesBtn')) {
    document.getElementById('yesBtn').addEventListener('click', function() {
        window.location.href = 'gift.html';
    });
}

if (document.getElementById('noBtn')) {
    document.getElementById('noBtn').addEventListener('click', function() {
        window.location.href = 'no.html';
    });
}

// No page - back button handler
if (document.getElementById('backBtn')) {
    document.getElementById('backBtn').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
}

// Gift menu page - gift box handlers
if (document.getElementById('picturesBox')) {
    document.getElementById('picturesBox').addEventListener('click', function() {
        window.location.href = 'pictures.html';
    });
}

if (document.getElementById('flowersBox')) {
    document.getElementById('flowersBox').addEventListener('click', function() {
        window.location.href = 'flowers.html';
    });
}

if (document.getElementById('songBox')) {
    document.getElementById('songBox').addEventListener('click', function() {
        window.location.href = 'song.html';
    });
}

if (document.getElementById('notesBox')) {
    document.getElementById('notesBox').addEventListener('click', function() {
        window.location.href = 'notes.html';
    });
}

