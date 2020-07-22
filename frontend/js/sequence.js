class Sequence {
  static consecutiveNumbers(set) {
    const card1 = document.getElementById(set[0].id);
    const card2 = document.getElementById(set[1].id);
    const card3 = document.getElementById(set[2].id);
    let num1 = parseInt(card1.dataset.number);
    let num2 = parseInt(card2.dataset.number);
    let num3 = parseInt(card3.dataset.number);
    if (
      num1 + 1 === num2 &&
      num2 + 1 === num3 &&
      card1.dataset.suit === card2.dataset.suit &&
      card2.dataset.suit === card3.dataset.suit
    ) {
      return true;
    } else if (
      card1.dataset.number === 'joker' &&
      card2.dataset.number === 'joker' &&
      card3.dataset.number === 'joker'
    ) {
      return true;
    } else if (
      num1 + 1 === num2 &&
      card3.dataset.number === 'joker' &&
      card1.dataset.suit === card2.dataset.suit
    ) {
      return true;
    } else if (
      num1 + 2 === num3 &&
      card2.dataset.number === 'joker' &&
      card1.dataset.suit === card3.dataset.suit
    ) {
      return true;
    } else if (
      num2 + 1 === num3 &&
      card1.dataset.number === 'joker' &&
      card2.dataset.suit === card3.dataset.suit
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
