/*
 * @name Mixture
 * @frame 710,400 (optional)
 * @description Display a box with three different kinds of lights.
 */
function setup() {
  createCanvas(710, 400, WEBGL);
  noStroke();
}

function draw() {
  background(0);
  
  // ambient light
   ambientLight(0, 200/4, 0);
  
  // to set the light position,
  // think of the world's coordinate as:
  // -width/3,-height/2 -------- width/3,-height/2
  //                |            |
  //                |     0,0    |
  //                |            |
  // -width/3,height/2--------width/3,height/2

  // blue directional light from the left
  directionalLight(0, 200, 250, -1, 0, 0);

  // calculate distance from center to mouseX
  let lightX = mouseX - width / 2;
  let lightY = mouseY - height / 2;
  
  // white spotlight
  // axis located at lightX, lightY, 500
  // axis direction of light: 0, 0, -1
  spotLight(400, 0, 0, lightY, lightX, 500, 0, 0, -1);

  // rotate on X axis
  rotateX(-PI/10);
  // rotate on Y axis
  rotateY(PI/3);
  
  // place box on (0, 0, 0), size 100
  box(50);
}
