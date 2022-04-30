var home = document.querySelector("#home")
var about= document.querySelector("#about")
var serv= document.querySelector("#services")
current = document.querySelector(".current");
function changeCurrent(x,y){
				x.style.color = "#fff22a";
				x.class="current";
				y.style.color = "#000";
				y.class="prev"
}
document.querySelector("#home").oncklick = changeCurrent(document.querySelector("#home"),document.querySelector('.current'));
document.querySelector("#about").oncklick = changeCurrent(document.querySelector("#about"),document.querySelector('.current'));
document.querySelector("#services").oncklick = changeCurrent(document.querySelector("#services"),document.querySelector('.current'));
