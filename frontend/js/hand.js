class Hand {
  static renderHands(obj) {
    let handDiv = document.getElementById(`player${obj.player_id}Hand`);
    obj.cards.forEach((c) => {
      let card = document.createElement('img');
      card.height = '240';
      card.width = '157';
      card.id = c.id;
      card.src = `./images/${c.value}${c.suit}.png`;
      card.classList.add('handCard');
      card.draggable = true;
      card.onmouseenter = function (e) {
        e.target.style.marginBottom = '5rem';
      };
      card.onmouseleave = function (e) {
        e.target.style.marginBottom = '0';
      };
      card.addEventListener('dragstart', () => {
        card.classList.add('dragging');
      });
      card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
      });
      handDiv.appendChild(card);
    });
  }
}
