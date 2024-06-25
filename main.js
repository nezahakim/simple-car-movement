const myCanvas = document.getElementById("myCancas");

var ctx = myCanvas.getContext("2d");
var car =  new Car(100,100,30,50);
animate();

function animate(){
    car.update();

    myCanvas.height = window.innerHeight;
    car.draw(ctx)
    
    requestAnimationFrame(animate)
}