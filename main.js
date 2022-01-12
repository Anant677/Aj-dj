song = "";
function preload(){
song = loadSound("music.mp3");
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;
}
function setup(){
    video = createCapture(VIDEO);
    video.hide();
    canvas = createCanvas(400,400);
    canvas.center();

    poseNet = ml5.poseNet(video,modeLoaded);
    poseNet.on('poses',gotResults);
}
function draw(){
    image(video,0,0,400,400);
    fill("red");
    circle(rightWristX,rightWristY,10);
}
function Play_music(){
    song.play();
    song.setVolume(2);
    song.rate(1);
}
function gotResults(results){
    console.log("done");
if(results.length>0){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    console.log("LeftX "+leftWristX+" RightX "+rightWristX);
    leftWristY = results[0].pose.leftWrist.y;
    rightWristY  = results[0].pose.rightWrist.y;
    console.log("LeftY "+leftWristY+" RightY "+rightWristY);
}
}
function modeLoaded(){
    console.log("PoseNet is Initialised");
}
