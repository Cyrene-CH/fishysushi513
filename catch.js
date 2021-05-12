class Catch {
  constructor(x, y, r1,r2) {
    this.x = x;
    this.y = y;
    this.r1 =r1
    this.r2=r2
    this.dsp = dsp;
    this.speed=random(5,15)
    this.catched=true
  }

  show() {
    let d = dist(a+120, 0, this.x, 0);
//catch fish
    if (keyIsDown(DOWN_ARROW) && d < this.r1 && this.catched) {
      this.dsp = true;
      morefish()
      rr = 200;
      this.catched=false
    } else if (d > this.r) {
      rr = 0;
    }




    if (this.dsp === false) {
      noStroke();
      fill(36, 110, 108,op);
      op=op+5
      ellipse(this.x, this.y, this.r1,this.r2);
      this.y=this.y+2*sin(millis()/300)
    }
  }
  move() {
    let d = dist(a+120, 0, this.x, 0);
if(d<this.r1+10&&this.speed<0){
this.speed=-17
}
    if(d<this.r1+10&&this.speed>0){
this.speed=17
}
    if(this.speed<10&&this.speed>5){
      
      this.speed=this.speed*(-1)
    }
    this.x += this.speed;

  }

  
}