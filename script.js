let isPlaying = false;

// Toggle background music play/pause state
function toggleMusic() {
  const audio = document.getElementById('bg-audio');
  const btn = document.getElementById('music-toggle-btn');
  
  if (!isPlaying) {
    audio.volume = 0.4;
    audio.play().then(() => {
      isPlaying = true;
      btn.textContent = "⏸️ Pause Music";
      btn.classList.add('playing');
    }).catch(error => {
      console.log("Playback error: ", error);
    });
  } else {
    audio.pause();
    isPlaying = false;
    btn.textContent = "🎵 Play Music (13 - LANY)";
    btn.classList.remove('playing');
  }
}

// Switch between Letter and Gallery tabs
function switchTab(tabName, event) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  if (tabName === 'letter') {
    document.getElementById('letter-tab').classList.add('active');
  } else if (tabName === 'gallery') {
    document.getElementById('gallery-tab').classList.add('active');
  }
  
  if (event && event.target) {
    event.target.classList.add('active');
  }
}

// Open Lightbox image zoom modal
function openLightbox(imgSrc, title, date) {
  const modal = document.getElementById('lightbox-modal');
  document.getElementById('lightbox-img').src = imgSrc;
  document.getElementById('lightbox-title').textContent = title;
  document.getElementById('lightbox-date').textContent = date;
  
  modal.classList.add('active');
}

// Close Lightbox modal
function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  modal.classList.remove('active');
}

// Close lightbox when clicking outside the content area
document.getElementById('lightbox-modal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeLightbox();
  }
});

// Close lightbox on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});