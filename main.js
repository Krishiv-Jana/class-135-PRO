video="";

function setup(){
    canvas=createCanvas(470,370)
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();   
    
}

function start(){
    objectFinder=ml5.objectFinder('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Finding object";
    document.getElementById("object_status").innerHTML = onject_name + "found";
}

function modelLoaded(){
    console.log("modelLoaded");
    status=true;
}

function draw(){
    image(video,0,0,480,380);

    if(status !="")
    {
        objectDetector.detect(video,gotResults);
        for (i=0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "status : objects Detected";
            document.getElementById("number_of_objects").innerHTML = "number of objects detected are : "+objects.length;

            fill("#E74C3C");
            percent = floor(object[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y +15);
            nofill();
            stroke("#E74C3C");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function gotResults(error,results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
    if(objects[i].label == object_name);
}