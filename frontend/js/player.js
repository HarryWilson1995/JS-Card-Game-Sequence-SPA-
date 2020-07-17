class Player {
  constructor(id, name, placedSet, pickedUp, score) {
    this.id = id;
    this.name = name;
    this.placedSet = placedSet;
    this.pickedUp = pickedUp;
    this.score = score;
  }
  static all = [];
  save() {
    Player.all.push(this);
  }
}
