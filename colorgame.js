var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var pickedColor = pickColor();
var reset = document.querySelector(".reset");
var h1 = document.querySelector("h1");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

reset.addEventListener("click",function(){
    //generate random color
    colors = generateRandomColors(numSquares);
    //pick color
    pickedColor = pickColor();
    //change display
    colorDisplay.textContent = pickedColor;
    //change square colors
    for (var i=0; i<squares.length; i++){
        //add initial colors to squares
        squares[i].style.background = colors[i];
    }
   h1.style.backgroundColor = "steelblue"; 
   messageDisplay.textContent = "";
   reset.textContent = "new color";
});

easy.addEventListener("click",function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    
    
});
hard.addEventListener("click",function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    
});
for (var i=0; i<squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;

        //compare clicked color to picked color
        if(clickedColor=== pickedColor){
            messageDisplay.textContent = "correct";
            //color all the squares with same color
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
            reset.textContent = "Play Again";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "try again";
        }
    })
}

colorDisplay.textContent = pickedColor;

function changeColors(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
      };
};

function pickColor(){
   var random =  Math.floor(Math.random()*colors.length);
   return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for(i=0;i<num ; i++){
        //get random number and push it into array
        arr.push(randomColor());
    }
    return arr ;
}

function randomColor(){
    // pick random red 
    var r = Math.floor(Math.random() * 256);
    // pick random green
    var g = Math.floor(Math.random() * 256);
    //pick random blue
    var b = Math.floor(Math.random() * 256);

    return "rgb("+r+", "+g+", "+b+")";
};





