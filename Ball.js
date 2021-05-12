class Ball {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.speed = 5;
      this.gravity =0.05;
      this.diameter = dist(x, y, mouseX, mouseY) * 1;
  
      this.ax = random(-this.speed, this.speed);
      this.ay = random(-this.speed, this.speed);
  
      this.colour = "#6b0103"
    }
    update() {
      this.diameter = this.diameter - 0.15;
      this.x += this.ax / 2;
      this.y += this.ay / 2;
  
      this.x += random(-this.speed / 2, this.speed / 2);
      this.y += random(-this.speed / 2, this.speed / 2);
    }
  
    ballisFinished() {
      if (this.diameter < 0) {
        return true;
      }
    }
  
    render() {
      noStroke();
      if (this.diameter > 0) {
        fill(this.colour);
        ellipse(this.x + 10, this.y - 10, this.diameter, this.diameter);
      }
    }
  }