var value = 6;

function randomColorMaker(value){
var list=[];
for(var i=0;i<value;i++){
var red = [Math.floor((Math.random() * 256) + 0)];
var blue = [Math.floor((Math.random() * 256) + 0)];
var green = [Math.floor((Math.random() * 256) + 0)];
var color = "rgb("+red+", "+blue+", "+green+")";
list.push(color);    
}
return list;
}

var hardBtn = document.querySelector("#hardBtn");
var easyBtn = document.querySelector("#easyBtn");
var head = document.querySelector(".head");
var colors = randomColorMaker(value);
var squares = document.querySelectorAll(".square");
var body = document.querySelector("body");
var messageDisplay = document.querySelector(".message");
var pickedColor = colors[Math.floor((Math.random() * (value)) + 0)];
var displayColor = document.getElementById("rgbdisplay");
var newButton = document.querySelector("#newButton");
displayColor.textContent = pickedColor;
hardBtn.style.backgroundColor="steelblue";
hardBtn.style.color="white";
function match(){
if(this.style.background==pickedColor)
{
 for(var i=0;i<squares.length;i++)
 {
squares[i].style.background=pickedColor;}
 messageDisplay.textContent = "Correct";
 head.style.backgroundColor = pickedColor;
 newButton.textContent="Play Again?";
}
else{
this.style.background = body.style.background; 
messageDisplay.textContent="Try again";   
}
}

function makingSquareColors(){
for(var i=0;i<colors.length;i++){
squares[i].style.background=colors[i];
squares[i].addEventListener("click",match);
}
}
makingSquareColors();



function reset(value){
    head.style.backgroundColor = body.style.backgroundColor;
   
    colors = randomColorMaker(value);
    pickedColor = colors[Math.floor((Math.random() * value) + 0)];
    displayColor.textContent = pickedColor;
    makingSquareColors();
}

newButton.addEventListener("click",function(){
    reset(value);
})





easyBtn.addEventListener("click",function(){
this.style.backgroundColor="steelblue";   
hardBtn.style.backgroundColor="white"; 
this.style.color="white";
    hardBtn.style.color="steelblue";

this.classList.add("buttons");
 hardBtn.classList.remove("buttons");
   value = 3;
   colors = randomColorMaker(value);
   displayColor.textContent = pickedColor;
   pickedColor = colors[Math.floor((Math.random() * (value)) + 0)];
   for(var i=0;i<squares.length;i++){
   if(colors[i])
   squares[i].style.backgroundColor = colors[i];
   else
   squares[i].style.display = "none";
   }
})

hardBtn.addEventListener("click",function(){
    this.style.backgroundColor="steelblue";
    this.style.color="white";
    easyBtn.style.backgroundColor="white";
    easyBtn.style.color="steelblue";
    this.classList.add("buttons");
 easyBtn.classList.remove("buttons");
    value=6;
    colors = randomColorMaker(value);
    displayColor.textContent = pickedColor;
    pickedColor = colors[Math.floor((Math.random() * (value)) + 0)];
    for(var i=0;i<squares.length;i++){
    if(colors[i])
    squares[i].style.background = colors[i];
		squares[i].style.display = "block";
}
})

