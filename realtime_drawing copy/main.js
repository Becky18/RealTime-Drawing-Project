function setup(){
    video=createCapture(VIDEO);
    video.size(650,650);
    canvas=createCanvas(550,550);
    canvas.position(1060,200);
    video.position(260,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes)
}

function modelLoaded(){
console.log("The model has started.");
}

function gotposes(results){
    if(results.length>0){
console.log(results)
    }
    
}