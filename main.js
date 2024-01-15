technosong = "";
cybersong = "";

function preload (){
    technosong = loadSound("technosong.mp3");
    cybersong = loadSound("cybersong.mp3");
}

function setup(){
    canvas = createCanvas(600 , 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}