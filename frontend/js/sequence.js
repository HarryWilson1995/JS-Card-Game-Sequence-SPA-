class Sequence {
  static consecutiveNumbers(set) {
    const card1 = document.getElementById(set[0].id);
    const card2 = document.getElementById(set[1].id);
    const card3 = document.getElementById(set[2].id);
    console.log(card1);
    console.log(card2);
    console.log(card3);
    return false;
  }
  static sameNumbers(set) {
    const card1 = document.getElementById(set[0].id);
    const card2 = document.getElementById(set[1].id);
    const card3 = document.getElementById(set[2].id);
    if (
      card1.dataset.number === card2.dataset.number &&
      card2.dataset.number === card3.dataset.number
    ) {
      return true;
    } else if (
      card1.dataset.number === 'joker' &&
      card2.dataset.number === 'joker' &&
      card3.dataset.number === 'joker'
    ) {
      return true;
    } else if (
      card1.dataset.number === card2.dataset.number &&
      card3.dataset.number === 'joker'
    ) {
      return true;
    } else if (
      card1.dataset.number === card3.dataset.number &&
      card2.dataset.number === 'joker'
    ) {
      return true;
    } else if (
      card2.dataset.number === card3.dataset.number &&
      card1.dataset.number === 'joker'
    ) {
      return true;
    } else if (
      card1.dataset.number === 'joker' &&
      card2.dataset.number === 'joker'
    ) {
      return true;
    } else if (
      card1.dataset.number === 'joker' &&
      card3.dataset.number === 'joker'
    ) {
      return true;
    } else if (
      card2.dataset.number === 'joker' &&
      card3.dataset.number === 'joker'
    ) {
      return true;
    } else {
      return false;
    }
  }
}
