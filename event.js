var x=document.querySelector(".events11");
 // making random color
function randomColor(){
    //pick a red from 0-255
     var r= Math.floor(Math.random()*256);
     //pick a green from 0-255
    var g= Math.floor(Math.random()*256);
     //pick a blue from 0-255
     var b= Math.floor(Math.random()*256);

   return "rgb(" + r + ", " + g + ", " + b +")" ;
}
// generating  random colors
function generateRandomColors(num){
    // make an array
var arr=[];
//repeat num times
for(var i=0;i<num;i++){
    //get random color and push it into array
arr.push(randomColor());
}
//return the array
return arr;
}
setInterval(function(){ 
    var colors= generateRandomColors(1);
  x.style.color=colors;
 }, 1000);



