class Knife {
  constructor(x, y, z, r1, r2,price,times,mouse) {
    this.x = x;
    this.y = y;
    this.img = z;
    this.r1 = r1;
    this.r2=r2
    this.price = price;
    this.times=times
    this.mouse=mouse
  }
  show() {
    //fill(0);
    image(this.img, this.x, this.y, this.r1, this.r2);
    noStroke();
  }
  knfclicked() {
    var d = dist(mouseX, mouseY, this.x + this.r1/ 2+15, this.y + this.r2 / 2+15);
    if (d < 60 && money >= this.price) {
      console.log("hi");
      money = money - this.price;
      m=this.mouse
      slicetimes=this.times
      console.log(slicetimes)
    } 
    // else if (d < 10 && money < this.price) {
    //   red = 140;
    // }
  }
}