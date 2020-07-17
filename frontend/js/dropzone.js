class Dropzone {
  static discard() {
    if (Round.currentRound.currentPlayer.pickedUp === true) {
      const draggable = document.querySelector('.dragging');
      draggable.classList.remove('handCard');
      dropZone.appendChild(draggable);
    }
  }
  appendSomething() {
    dropZone.appendChild();
  }
}
