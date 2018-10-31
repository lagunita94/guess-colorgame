var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
 
var mouse = {
    x : undefined,
    y : undefined
}


window.addEventListener("mousemove", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener("resize",function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})
var colorArray = [
    '#f23c50',
    '#FFCB05',
    '#7DB01D',
    '#577CD9',
    '#BB1ABF'
];

function Circle(x, y, dx, dy, radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        c.fillStyle = this.color;
        c.fill();

    }
    this.update = function(){
        this.x+=this.dx;
        this.y+=this.dy;
        if (this.x + this.radius > innerWidth || this.x - this.radius <=0){
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius <=0){
            this.dy = -this.dy;
        }
        if (mouse.x - this.x < 75 && mouse.x - this.x > -75 && mouse.y - this.y < 75 && mouse.y - this.y > -75){
            if(this.radius<50){
                this.radius+=1;
            }
            
        } else if(this.radius > this.minRadius) {
            this.radius-=1;
        }
        this.draw();
    }
}

var circleArray = [];
for (var i=0;i<1000;i++){
    var radius = Math.random() * 5 +1;
    var x = Math.random() * (window.innerWidth - 2*radius) + radius;
    var dx = (Math.random()-0.5) * 3;  
    var dy = (Math.random()-0.5)  * 3;
    var y = Math.random() * (window.innerHeight - 2*radius)+radius;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}
console.log(circleArray);
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for (var i=0; i<circleArray.length; i++){
        circleArray[i].update();
    }
}
animate();

