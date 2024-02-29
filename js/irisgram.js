var song
var fft
var canvas;
var img;
var video;
var particles = [];

function preload(){
song = loadSound('Showcase Samples/WCKiD - Blame ID.wav');
video = createVideo(['img/Ai_Video.mp4']);
}

function windowResized() {
  let container = document.getElementById('waveformContainer');
  let canvasWidth = container.offsetWidth;
  let canvasHeight = container.offsetHeight;
  resizeCanvas(canvasWidth, canvasHeight);
}

function setup(){
  let container = document.getElementById('waveformContainer');
  let canvasWidth = container.offsetWidth;
  let canvasHeight = container.offsetHeight;
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('waveformContainer');
  fft = new p5.FFT()
  angleMode(DEGREES);
  imageMode(CENTER);
  video.loop();
  video.hide();
  video.play();

} 


function draw(){
  background(0);
  stroke('#ff0000')
  strokeWeight(3)
  noFill()




 translate(width/2,height/2.01);
 
 image(video, 0, 0, width, height);

fft.analyze();
 amp = fft.getEnergy(20,200);

  var wave = fft.waveform();
  beginShape()
  for(var i = 0;i<width;i++){
    var index = floor(map(i,0,width,0,wave.length));

    var x = i-width/2;
    var y = wave[index]*300 + height/2;
    vertex(x,y);
  }
endShape()
beginShape()
  for(var i = 0;i<width;i++){
    var index = floor(map(i,0,width,0,wave.length));

    var x = i-width/2;
    var y = wave[index]*300 -height/2;
    vertex(x,y);
  }
endShape()

  var p = new Particle();
  particles.push(p);

  for(var i=0;i<particles.length;i++){

   if(!particles[i].edges()){
    particles[i].update(amp>10)
    particles[i].show()
   }
   else{
    particles.splice(i,1)
   }
  }

}



class Particle{
  constructor(){
    this.pos = p5.Vector.random2D().mult(250);
    this.vel = createVector(0,0);
    this.acc = this.pos.copy().mult(random(0.0001,0.00001))


    this.w = random(3.5)
  }


  update(cond){
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    if(cond){
      this.pos.add(this.vel);
      this.pos.add(this.vel);
      this.pos.add(this.vel);
    }
  }


  edges(){
    if(this.pos.x < -width/2 || this.pos.x > width/2 || this.pos.y < -height/2 || this.pos.y > height/2){
      return true;
    } 
    else{
      return false;
    }
  }
  show(){
    noStroke();
    fill('#ff0000');
    ellipse(this.pos.x,this.pos.y,this.w)
  }
}


const wavesurfer26 = WaveSurfer.create({
  container: '#sample-song-waveform',
  waveColor: '#FFFFFF',
  progressColor: '#FF0000',
  height: 50,
  barWidth: .5,
  url: 'Showcase Samples/WCKiD - Blame ID.wav',
  responsive: true,
  hideScrollbar: true,
  normalize:true,
  minPxPerSec:100
})

var sampleSongPlaybtn = document.querySelector('.sample-song-playbtn');

var playcheck = false;

sampleSongPlaybtn.addEventListener('click',()=>{


  if(!playcheck){
    wavesurfer26.play();
    song.play();
    loop()
    video.play();

  
    sampleSongPlaybtn.setAttribute('name', 'pause-circle-outline');
    playcheck=true;
  }
  else{
    wavesurfer26.pause();
    song.pause();
    noLoop()
    video.play();

    sampleSongPlaybtn.setAttribute('name', 'play-outline');
    playcheck=false;
  }

})