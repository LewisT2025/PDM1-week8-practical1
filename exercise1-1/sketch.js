let mySound1;
let mySound2;
let mySound3;
let fft;
let waveform;

function setup(){
    createCanvas(400, 400);
    fft = new p5.FFT();
    fft.setInput(mySound1);
}

function preload(){
    mySound1 = loadSound("assets/196255__lolamadeus__snoring-cat.wav");
    mySound2 = loadSound("assets/412016__skymary__cat-purring-and-meow.wav");
    mySound3 = loadSound("assets/529605__chalicewell__katzenmix.wav");
}

function draw(){
    background(0);
    waveform = fft.waveform();
    noFill();
    stroke(255);
    strokeWeight(2);

    beginShape();
    for (let i = 0; i < waveform.length; i++) {
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, 0, height);
        vertex(x,y);
    }
    endShape();
}


function keyPressed(){
     if (key === "1"){
        mySound1.play()
     }
     else if(key === "2"){
        mySound2.play()
     }
     else if(key === "3"){
        mySound3.play()
     }
}