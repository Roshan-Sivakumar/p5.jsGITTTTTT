function preload(){
    imagecam = loadImage("https://previews.123rf.com/images/pavelstasevich/pavelstasevich1902/pavelstasevich190200019/119013242-camera-frame-viewfinder-screen-on-white-background-vector-illustration-.jpg")
}

function setup(){
    canvas = createCanvas(800, 400);
    canvas.position(390, 200);
    video = createCapture(VIDEO);
    video.hide()
}

function draw(){
    image(imagecam, 0, 0, 800, 400)
    image(video, 200, 75, 425, 250)
    stroke("red")
    circle(25, 25, 50)
    circle(775, 25, 50)
    circle(775, 375, 50)
    circle(25, 375, 50)
    fill('red');
}

function take_snapshot(){
    save("clickshot.jpg")
}