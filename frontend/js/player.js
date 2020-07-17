class Player {
  constructor(id, name, placedSet, pickedUp) {
    this.id = id;
    this.name = name;
    this.placedSet = placedSet;
    this.pickedUp = pickedUp;
  }
  static all = [];
  save() {
    Player.all.push(this);
  }
}
