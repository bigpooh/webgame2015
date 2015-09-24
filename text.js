window.addEventListener("load",drawScreen,false);
window.addEventListener("keydown",onkeydown,false);
window.addEventListener("keyup",onkeyup,false);

var strKeyEventType="None";
var strKeyEventValue="None";

var imgBackground= new Image();
imgBackground.src="bg.jpg";

var imgPlayer= new Image();
imgPlayer.src="player.jpg";

imgPlayer.addEventListener("load",drawScreen,false);
var intPlayerX=410;
var intPlayerY=400;

var Game_STATE_READY=0;
var Game_STATE_GAME=1;
var Game_STATE_OVER=2;

var GameState=Game_STATE_READY;

var ball=new Image();
ball.src="ball.png";
var intervalID;

var tempBall1={x:0,y:0,go_x:1,go_y:1};
var tempBall2={x:850,y:0,go_x:-1,go_y:1};
var tempBall3={x:850,y:550,go_x:-1,go_y:-1};
var tempBall4={x:0,y:550,go_x:1,go_y:-1};
function onkeydown(e)
{
	if(GameState==Game_STATE_READY)
	{
		if(e.keyCode==13)
		{
			GameState=Game_STATE_GAME;
			onGameStart();
		}
	}
	else if(GameState==Game_STATE_GAME)
	{
		switch(e.keyCode)
		{
			case 37: intPlayerX-=20; if(intPlayerX<0)intPlayerX=0; break;
			case 39: intPlayerX+=20; if(intPlayerX>850)intPlayerX=850; break;
			case 38: intPlayerY-=20; if(intPlayerY<0)intPlayerY=0; break;
			case 40: intPlayerY+=20; if(intPlayerY>550)intPlayerY=550; break;
		};
		drawScreen();
	}
	else if(GameState==Game_STATE_OVER)
	{	
		if(e.keyCode==13)
		{
			GameState=Game_STATE_READY;
		}
	}
}
function onkeyup(e)
{
	
	drawScreen();
}
function onGameStart()
{
	intervalID=setInterval(MoveBall,100);
}
function MoveBall()
{
	
	tempBall1.x+=tempBall1.go_x*10;
	tempBall1.y+=tempBall1.go_y*10;
	tempBall2.x+=tempBall2.go_x*10;
	tempBall2.y+=tempBall2.go_y*10;
	tempBall3.x+=tempBall3.go_x*10;
	tempBall3.y+=tempBall3.go_y*10;
	tempBall4.x+=tempBall4.go_x*10;
	tempBall4.y+=tempBall4.go_y*10;
	drawScreen();
}
function drawScreen()
{
	var theCanvas=document.getElementById("GameCanvas");
	var Context=theCanvas.getContext("2d");
	Context.drawImage(imgBackground,0,0,900,600);
	Context.drawImage(imgPlayer,intPlayerX,intPlayerY,50,50);
	if(GameState==Game_STATE_READY)
	{
		Context.fillText("Ready~",100,100);
	}
	else if(GameState==Game_STATE_GAME)
	{
		Context.fillText("Go!",100,100);
		Context.drawImage(ball,tempBall1.x,tempBall1.y,50,50);
		Context.drawImage(ball,tempBall2.x,tempBall2.y,50,50);
		Context.drawImage(ball,tempBall3.x,tempBall3.y,50,50);
		Context.drawImage(ball,tempBall4.x,tempBall4.y,50,50);
	}
	else if(GameState==Game_STATE_OVER)
	{
		Context.font='60px NanumGothicCoding';
		Context.fillText("Game Over",100, 100);
	}
	
	
}