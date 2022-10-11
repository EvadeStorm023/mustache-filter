nx = 0;
ny = 0;
function preload(){
img = loadImage('https://i.postimg.cc/k4dmtdgm/mustache.png')
}



function setup(){
    canvas = createCanvas(300,300)
canvas.center()
video = createCapture(VIDEO)
video.size(300,300)
video.hide()
poseNet = ml5.poseNet(video,modelLoaded)
poseNet.on('pose', gotposes)
}



function modelLoaded(){
    console.log('model has been loaded')
}
function gotposes(results){
    if(results.length > 0){
     console.log(results)
     nx = results[0].pose.nose.x;
     ny = results[0].pose.nose.y;
     console.log(nx,ny);
    }
}

function draw(){
    image(video,0,0,300,300)
    fill('red')
    stroke('red')
   // circle(nx, ny, 20);
    image(img,nx-23,ny-7,45,45)
    }

function take_snapshot(){
    save("filter.png")
}