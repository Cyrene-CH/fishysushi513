let clouds = [];
let d;
let rr = 0;
let balls = [];
let slider;
let a = 1000;
const fishArray = [];
let fishpic = [];
let cf = [];
let dsp = false;
let op = 50;
let sushipic = [];
let money = 0;
let net1, net2;
let red = 255;
let fishpicdef = [];
let k = 2;
let slicetimes = 10;
let knf1, knf2;
let m=1
let fishnum=2
let RDS
let priceD=[10,15,25,35,40,50,60]
// let lines1 = 'Silver Fishnet\n$90'
function preload() {
  //menu
  menu=loadImage("menu.png")
  //loadfisherman
  man = loadImage("fisherman.png");
  //knives
  knfpic1 = loadImage("knife1.png");
  knfpic2 = loadImage("knife2.png");
  //nets
  img1 = loadImage("net1.png");
  img2 = loadImage("net2.png");
  //wallet
  wallet = loadImage("wallet.png");
  //knifeMouse
  knifeMouse = loadImage("knifeMouse.png");
  goldenkm=loadImage("goldenknf.png")
  sivkm=loadImage("sivknf.png")
  //fish pictures
  // for (let i = 0; i <6; i++) {
  //   fishpic[i] = loadImage("fishpic/fish" + i + ".png");
  //   //console.log(k)
  // }
  // for (let i = 0; i <2; i++) {
  //   fishpic[i] = loadImage("fishpic/fish" + i + ".png");
  //   //console.log(k)
  // }

  //   if(m==1&&k==0){
  //   for (let i = 0; i <4; i++) {
  //     fishpic[i] = loadImage("fishpic/fish" + i + ".png");
  //     k=1
  //   }
  // }
  //   if(m==2&&k==0){
  //   for (let i = 0; i <6; i++) {
  //     fishpic[i] = loadImage("fishpic/fish" + i + ".png");
  //     k=1
  //     //console.log(k)
  //   }
  // }

  //     for (let i = 0; i <2; i++) {
  //     fishpicdef[i] = loadImage("fishpic/fish" + i + ".png");
  //     //console.log(k)
  //   }

  //sushi pictures,k controls the fish type;different net catch different range
  for (let i = 0; i < 6; i++) {
    sushipic[i] = loadImage("sushipic/su" + i + ".png");
  }
}

function setup() {
  createCanvas(1800, 1400);
    RDS = random(280, 400);
  //cloud
  for (let i = 0; i < 2; i++) {
    clouds[i] = new Cloud();
  }
  //money
  
  //blood effect
  slider = createSlider(0, 360, 180, 40);
  slider.position(-260, -610);
  slider.style("width", "80px");

  //fishshade
  for (let i = 0; i < 1; i++) {
    cf.push(
      new Catch(
        random(700, 1200),
        random(height - 100, height - 400),
        random(110,130),
        random(40,60)
      )
    );
  }
  setInterval(function () {
    for (let i = 0; i < 2; i++) {
      cf.push(
        new Catch(
          random(500, width+100),
          random(height - 60, height - 200),
          random(110,130),
        random(40,60)
        )
      );
    }
  }, 4500);
  //Nets(x,y,changecolor(换武器）,img,chang,kuang,price,slicetime,k/m,fishnum)
  net1 = new Nets(130, 120, 150, img1, 150, 100, 90, 4,4);
  net2 = new Nets(130, 220, 0, img2, 150, 100, 180, 6,2);
  knf1 = new Knife(360, 40, knfpic1, 200, 200, 150, 5,2);
  knf2 = new Knife(360, 150, knfpic2, 200, 200, 350, 1,3);
}

function morefish() {
  if (k == 2) {
    for (let i = 0; i < 2; i++) {
      fishpic[i] = loadImage("fishpic/fish" + i + ".png");
    }
  }

  if (k == 4) {
    for (let i = 0; i < 4; i++) {
      fishpic[i] = loadImage("fishpic/fish" + i + ".png");
    }
  }
  if (k == 6) {
    for (let i = 0; i < 6; i++) {
      fishpic[i] = loadImage("fishpic/fish" + i + ".png");
    }
  }
  let protection = 0;
  let targetFishCount = fishArray.length + random(1, fishnum);
  while (fishArray.length < targetFishCount) {

let ix=int(random(fishpic.length))

console.log[ix]
    let pic = fishpic[ix];
    let supic = sushipic[ix];
    let priceA= priceD[ix]
    let aFish = new Fish(random(100, 580), random(370, 630), 110, pic, supic,priceA);
    let overlapping = false;
    for (var j = 0; j < fishArray.length; j++) {
      let other = fishArray[j];
      let d = dist(aFish.x, aFish.y, other.x, other.y);
      if (d < aFish.r + other.r - 150) {
        overlapping = true;
      }
    }
    if (!overlapping) {
      fishArray.push(aFish);
    }
    protection++;
    if (protection > 1000) {
      break;
    }
  }
}

function draw() {
  //sky
  c2 = color(247, 173, 136);
  c1 = color(239, 208, 144);
  for (let y = 0; y < 900; y++) {
    n = map(y, 0, 900, 0, 1);
    let newc = lerpColor(c2, c1, n);
    stroke(newc);
    line(0, y, 1800, y);
  }
  
    //sun
    sunshine();
  //wharf
  noStroke();
  fill(153, 100, 2, 180);
  rect(0, 850, 900, 30);
  rect(750, 850, 30, 600);
  fill(207, 151, 50);
  rect(0, 850, 900, 10);

  //hat&man
  push();
  fill(220, 10, 100);
  if (keyIsDown(LEFT_ARROW)) {
    a -= 15;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    a += 15;
  }
  image(man, a, 680, 350, 350);
  fill(0,0,0,100)
  text("Move️:️️⬅️➡️\nCatch fish:⬇️",900,860)
  fill(0, red, 255, 150);
  triangle(120 + a, 918, 0 + a, 1027, 150 + a, 1033);

  if (a <= 660) {
    a = 660;
  } else if (a >= 1600) {
    a = 1600;
  }
  pop();

  //sea
  c1 = color(82, 159, 153);
  c2 = color(163, 204, 197);
  for (let y = 900; y < 1400; y++) {
    n = map(y, 900, 1100, 0, 1.2);
    let newc = lerpColor(c2, c1, n);
    stroke(newc);
    line(0, y, 1800, y);
    
    
    
    
    
    
  }

  // fishshade
  for (let i = 0; i < cf.length; i++) {
    cf[i].show();
    cf[i].move();
  }

  //clouds
  for (let i = 0; i < clouds.length; i++) {
    clouds[i].move();
    clouds[i].display();
  }


  
  //shop
  shop();
  
  //shopitems
  fill(255,255,255,30)
  ellipse(200,170,108,108)
  ellipse(470,170,108,108)
  ellipse(200,280,108,108)
  ellipse(470,280,108,108)
  
  //wallet
  image(wallet, 30, 600, 120, 90);
  fill(255);
  textSize(40);
  text("$" + money, 135, 680);
  //drawmore fish
  for (let i = 0; i < fishArray.length; i++) {
    fishArray[i].draw();
  }

  //paibian
  textSize(60);
  // text("🦈", 690, 250);
  // text("🐋", 690, 320);
  // text("🐳", 690, 390);
  fill(114, 55, 0);
  rect(200, 725, 400, 100);
  fill(255, 185, 112);
  textFont("Georgia");
  text("Fishy Sushi", 250, 790);

  //knives and nets
  knf1.show();
  knf2.show();
  net1.draw();
  net2.draw();
  //price texts
  fill(255);
  textSize(25)
  textLeading(30)
  text('Nice Net\n$90', 290, 160);
  text('Great Net\n$180', 290, 270);
  text('Silver Knife\n$150', 530, 160);
  text('Gold Knife\n$350', 530, 270);
  //blood effect
  for (var i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].render();
    if (balls[i].ballisFinished()) {
      balls.splice(i, 1);
    }
  }
  //knifeMouse
  if (mouseX < 700 && mouseX > 55 && mouseY > 400 && mouseY < 700&& m==1) {
    image(knifeMouse, mouseX - 20, mouseY - 50, 50, 100);
    textSize(25)
    textFont("Georgia")
    fill(0,0,0,90)
    text("Drag the mouse to cut and sell!",300,650)
  }
  
    if (mouseX < 700 && mouseX > 55 && mouseY > 400 && mouseY < 700&& m==3) {
    image(goldenkm, mouseX - 20, mouseY - 50, 50, 100);
  }
  
     if (mouseX < 700 && mouseX > 55 && mouseY > 400 && mouseY < 700&& m==2) {
    image(sivkm, mouseX - 20, mouseY - 50, 50, 100);
  }
  
//menu
image(menu,750,20)



}
function sunshine(){
  noStroke();
    //stars in the universe
  //glow
  fill(249,200,158, 30);
  ellipse(width, 0, (frameCount % 500)*2, (frameCount % 500)*2);
  ellipse(width, 0, (frameCount % 500)*4, (frameCount % 500)*4);
  ellipse(width, 0, (frameCount % 500)*8, (frameCount % 500)*8);
  ellipse(width, 0, (frameCount % 500)*16, (frameCount % 500)*16);
  ellipse(width, 0, (frameCount % 500)*24, (frameCount % 500)*24);
  
  //sun
  fill(231,143,54);
  ellipse(width, 0, RDS, RDS);
  fill(255,173,89);
  ellipse(5+width, -11, RDS - 40, RDS - 60);
}
function shop() {
  scale(0.95);
  translate(20, 45);
  noStroke();
  fill(182, 102, 77);
  beginShape();
  vertex(80, 0);
  vertex(680, 0);
  vertex(650, 360);
  vertex(110, 360);
  vertex(80, 0);
  endShape();
  fill(218, 130, 106);
  rect(90, 350, 580, 35);
  fill(102, 42, 42, 150);
  push();
  stroke(183, 99, 75);
  strokeWeight(10);
  beginShape();
  vertex(90, 370);
  vertex(20, 750);
  vertex(740, 750);
  vertex(670, 370);
  vertex(90, 370);
  endShape();
  pop();
  fill(176, 99, 73);
  rect(25, 10, 20, 700);
  rect(715, 10, 20, 700);
  fill(218, 130, 106);
  rect(10, 690, 750, 80, 10);
  rect(10, 770, 750, 80, 10);
  fill(183, 99, 75);
  circle(30, 715, 15);
  circle(30, 745, 15);
  circle(30, 800, 15);
  circle(30, 830, 15);
  rect(10, 765, 750, 10);

  for (let i = 0; i < 5; i++) {
    fill(230, 98, 71);
    noStroke();
    arc(60 + i * 160, 0, 80, 160, 0, PI);
  }
  for (let i = 0; i < 4; i++) {
    fill(250, 250, 227);
    noStroke();
    arc(140 + i * 160, 0, 80, 160, 0, PI);
  }
  
  let dnet1=dist(mouseX,mouseY,200,170)
  if (dnet1<70){
    textSize(20)
    text("Click to buy!\nNice Net: More fishes\nLimited fish types",mouseX-200,mouseY-20)
   // console.log(dnet1)
  }
  
   let dnet2=dist(mouseX,mouseY,200,280)
  if (dnet2<70){
    textSize(20)
    text("Click to buy!\nGreat Net: Less fishes\nPrecious fish types",mouseX-200,mouseY-20)
   // console.log(dnet1)
  }
    

   let dk1=dist(mouseX,mouseY,400,280)
  if (dk1<80){
    textSize(20)
    text("Click to buy!\nGold Knife: One Cut Reward",mouseX+90,mouseY+10)
   // console.log(dnet1)
  }
  
    let dk2=dist(mouseX,mouseY,400,170)
  if (dk2<80){
    textSize(20)
    text("Click to buy!\nSilver Knife: Five Cut Reward",mouseX+90,mouseY+10)
   // console.log(dnet1)
  }
  
}

function mouseDragged() {
  console.info(mouseX, mouseY);
  image(knifeMouse, mouseX, mouseY);
  if (mouseX < 700 && mouseX > 55 && mouseY > 400 && mouseY < 700) {
    for (let i = 0; i < slider.value(); i++) {
      balls.push(new Ball(mouseX + random(-3, 3), mouseY + random(-3, 3)));
    }
  }

  for (let i = 0; i < fishArray.length; i++) {
    fishArray[i].mouseDragged();
  }
}
function mouseReleased() {
  if (mouseX < 180 && mouseX > 80 && mouseY < 700 && mouseY > 600) {
    for (let i = 0; i < fishArray.length; i++) {
      fishArray[i].mouseReleased();
    }
  }
}

function mousePressed() {
  net1.clicked();
  net2.clicked();
  knf1.knfclicked();
  knf2.knfclicked();
}
