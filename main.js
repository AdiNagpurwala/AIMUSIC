song1="";
song2="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
scoreleftwrist=0;
scorerightwrist=0;
status1="";
status2="";
function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music.mp3");
}


function setup(){
    canvas=createCanvas(500,465);
    canvas.center();
    

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw (){
    image(video,0,0,500,465);
    status1=song1.isPlaying();
    status2=song2.isPlaying();
 fill('#FF0000');
  stroke('#FF0000');  
if(scoreleftwrist> 0.2) {

  circle(leftwristX,leftwristY,20);
  
song1.stop();
if(status2==false){
   song2.play(); 

}
}
if(scorerightwrist>0.2){
    
    circle(rightWristX,rightWristY,20);
    song2.stop();
    if(status1==false){
song1.play();
    }
}
}
function play(){

    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded(){
    console.log("PoseNet is Initialized!");
}
function gotPoses(results){
   if (results. length >0)
    {
       scoreleftwrist=results[0].pose.keypoints[9].score;
       console.log("scoreleftwrist"+scoreleftwrist);

       scorerightwrist=results[0].pose.keypoints[10].score;
       console.log("scorerightwrist"+scorerightwrist);

        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y
        console.log("leftwristX"+leftwristX+"leftwristY"+leftwristY+"rightwristX"+rightwristX+"rightwristY"+rightwristY);
    }
}

