class Cloud {
	constructor(x, y) {
      this.x = random(0, width);
      this.y = random(500, 2200)+random(-300,300);
	}

	display() {
    noStroke();
    fill(255);
    push();
      scale(0.15);
      ellipse(this.x, this.y, 1200, 200);
      ellipse(this.x+50,this.y+10,600,300);
      ellipse(this.x-50,this.y-30,300,300);
      ellipse(this.x-50,this.y+30,300,300);
      ellipse(this.x+20,this.y-10,400,250);
      ellipse(this.x+40,this.y,100,20);
    pop();
	}

	move() {
    this.x = this.x += (10,15);
    this.y = this.y + random(-5,5);
    
    if(this.x >= width+10000){
    this.x = 0;
	}
    }
}