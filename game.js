window.addEventListener("load",drawScreen,false);
window.addEventListener("keydown",onkeydown,false);

var imgBackground= new Image();
imgBackground.src="bg.jpg";

var imgPlayer=new Image();
imgPlayer.src="player.jpg";

imgPlayer.addEventListener("load",drawScreen,false);

var bMouseClicked=false;
	intMouseX=480;
	intMouseY=300;
	
function onkeydown(e)
{
	switch(e.keyCode)
	{
		case 37: intPlayerX-=10; break;
		case 39: intPlayerX+=10; break;
		case 38: intPlayerY-=10; break;
		case 40: intPlayerY+=10; break;
	}
	drawScreen();
}

function drawScreen()
{
	var theCanvas=document.getElementById("GameCanvas");
	var Context=theCanvas.getContext("2d");
	Context.fillstyle="#ff0";
	Context.fillRect(0,0,1024,968);
	Context.drawImage(imgPlayer,intPlayerX,intPlayerY,100,100);
	Context.fillStyle="#000";
	

}
