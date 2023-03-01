status = "";
object = [];


function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status: Detecting Objects";

}

function modelLoaded(){
    console.log('Model is loaded');
    status = true;
    objectDetector.detect(img, gotResult);


}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
        console.log(results);
        object = results;
}


img="";

function preload(){
    img = loadImage('IMG_0320.jpg');
}

function draw(){
    image(img, 0, 0, 500, 500);

    if(status != ""){
        for(i=0 ; i<object.length ; i++){
            document.getElementById("status").innerHTML = "Object Detected";

            fill('red');
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x, object[i].y);
            noFill();
            stroke('red');
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
    }

    
}}