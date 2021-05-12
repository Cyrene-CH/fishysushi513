class Nets {
  constructor(x, y, c, z, r1, r2,price,addtype,fishnumber) {
    this.x = x;
    this.y = y;
    this.color = c;
    this.img = z;
    this.r1 = r1;
    this.r2=r2
    this.price = price;
    this.addtype=addtype
    this.fishnumber=fishnumber
  }
  draw() {
    //fill(0);
    image(this.img, this.x, this.y, this.r1, this.r2);
    noStroke();
  }
  clicked() {
    var d = dist(mouseX, mouseY, this.x + this.r1/ 2, this.y + this.r2 / 2);
    if (d < 50 && money >= this.price) {
      console.log("hi");
    k=this.addtype
      red = this.color;
      money = money - this.price;
      fishnum=this.fishnumber
      // m = this.addtype
    console.log(k)
      console.log(red)
    } else if (d < 10 && money < this.price) {
     text("meiyouqian",100,100)
    }
  }
}