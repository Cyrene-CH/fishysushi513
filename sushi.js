class Sushi {
  constructor(x, y,image) {
    this.x = x;
    this.y = y;
    this.image = image;
  }
  draw() {
      image(this.image,this.x,this.y,150,90);
    }
}