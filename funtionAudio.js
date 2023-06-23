let audio = document.getElementById('audioPlayer');
let playPauseButton = document.getElementById('playPauseButton');
let pausePolygon = document.getElementById('pausePolygon');
let playPolygon = document.getElementById('playPolygon');
let notes = document.querySelectorAll('.notes');

function playPause() {
  if (audio.paused) {
    audio.play();
    playPauseButton.innerHTML = 'Pausar';
    pausePolygon.classList.add('hidden');
    playPolygon.classList.remove('hidden');
    toggleNotesVisibility(true); // Mostrar las notas cuando la música se reproduce
  } else {
    audio.pause();
    playPauseButton.innerHTML = 'Reproducir';
    pausePolygon.classList.remove('hidden');
    playPolygon.classList.add('hidden');
    toggleNotesVisibility(false); // Ocultar las notas cuando la música se pausa
  }
}

function toggleNotesVisibility(showNotes) {
  notes.forEach((note) => {
    if (showNotes) {
      note.classList.remove('hidden');
    } else {
      note.classList.add('hidden');
    }
  });
}
