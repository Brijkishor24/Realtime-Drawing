noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
    canvas=createCanvas(600,600);
    canvas.position(550,200);
    video=createCapture(VIDEO);
    video.size(500,400);
    
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',getPoses);
}
function modelloaded(){
    console.log("PoseNet Initialized!");
}
function getPoses(results){
    if(results.length > 0);{
        console.log(results);
       noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
      console.log("Nose X="+noseX+","+"Nose Y="+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX - rightWristX);
    }
}
function draw(){
    background("#00FF00");

    document.getElementById("sq-length").innerHTML="Width and Height of the Square = "+difference+"px";
    fill("white");
    stroke("white");
    square(noseX,noseY,difference);
}