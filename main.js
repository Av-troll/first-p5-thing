function preload(){

}
function setup(){
    canvas - createCanvas(640,480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
    }
function take_snapshot(){
    save('tint_selfie.jpg');
}
function filter_color(){
    tint_color = document.getElementById("Filter-col").value;
}