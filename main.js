var status = "";
var object_name = "";

function setup(){
    canvas = createCanvas(450, 340);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

   
}
function draw(){
    image(video, 0, 0, 600, 500);
   
    
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById("name").innerHTML;
}
function modelLoaded(){
    console.log('Model Loaded!');
    status = true;
}