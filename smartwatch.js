var span = document.getElementById('span');
function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
};
setInterval(time, 1000);
var image = document.getElementById('myImage');
var colorChange = document.getElementById('black');
colorChange.addEventListener('click',function(){
    image.src = "./images/blackwatch.png";
    console.log(colorChange.id);
});
var colorChange1 = document.getElementById('red');
colorChange1.addEventListener('click',function(){
    image.src = "./images/redwatch.png";
    console.log(colorChange1.id);
});
var colorChange2 = document.getElementById('blue');
colorChange2.addEventListener('click',function(){
    image.src = "./images/bluewatch.png";
    console.log(colorChange2.id);
});
var colorChange3 = document.getElementById('pink');
colorChange3.addEventListener('click',function(){
    image.src = "./images/pinkwatch.png";
    console.log(colorChange3.id);
});
var colorChange4 = document.getElementById('purple');
colorChange4.addEventListener('click',function(){
    image.src = "./images/purplewatch.png";
    console.log(colorChange4.id);
});
var times = document.getElementById("span");
var heartrate = document.getElementById("icon");
var timeChangeBut = document.getElementById("button1");
var heartbut =document.getElementById("button2");
timeChangeBut.onclick = function(){
    heartrate.style.display = 'none'; 
    times.style.display = 'block';    
};
heartbut.onclick = function(){
    times.style.display = 'none'; 
    heartrate.style.display = 'block';   
};


