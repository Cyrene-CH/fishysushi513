class Fish {
  constructor(x, y, r, image, suimage) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.image = image;
    this.suimage = suimage;
    this.prevNotInsideFishState = "outside";
    this.chopvalue = 0;
    this.visible = true;
  }
  draw() {
    if (this.visible) {
      image(this.image, this.x - 64, this.y - 64);
    } else {
      image(this.suimage, this.x - 64, this.y - 64, 150, 90);
    }
  }
  mouseDragged() {
    let state;
    if (
      mouseY > this.y + 84 ||
      mouseY < this.y - 84 ||
      mouseX < this.x - 120 ||
      mouseX > this.x + 120
    ) {
      state = "outside";
    } else if (this.x - 100 < mouseX && mouseX < this.x) {
      state = "left";
    } else if (this.x < mouseX && mouseX < this.x + 100) {
      state = "right";
    } else {
      state = "inside";
    }

    if (
      (state == "left" || state == "right") &&
      (this.prevNotInsideFishState == "left" ||
        this.prevNotInsideFishState == "right") &&
      state != this.prevNotInsideFishState
    ) {
      this.chopvalue += 1;
    }
    if (state != "inside") {
      this.prevNotInsideFishState = state;
    }
    console.info(mouseX, mouseY);
    if (this.chopvalue > slicetimes) {
      this.visible = false;
      this.chopvalue = 0;
    }
    if (this.visible == false) {
      if (
        mouseX < this.x + 60 &&
        mouseX > this.x - 60 &&
        mouseY < this.y + 60 &&
        mouseY > this.y - 60
      ) {
        this.x += mouseX - pmouseX;
        this.y += mouseY - pmouseY;
      }
    }
  }

  mouseReleased() {
    if (
      mouseX < 180 &&
      mouseX > 80 &&
      mouseY < 700 &&
      mouseY > 600 &&
      mouseX < this.x + 60 &&
      mouseX > this.x - 60 &&
      mouseY < this.y + 60 &&
      mouseY > this.y - 60
    ) {
      this.x = -500;
      this.y = -500;
      money += round(random(15,60));
    }
  }
}
