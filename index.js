var canvas = {"element":null, "context":null, "height":550, "width":1200}
var particleSystem = null;
var keys;
var timeData = {"timeOfLoad":new Date(),"previousFrame":new Date()}
var player;
function main(){
	canvas.element = document.getElementById("GameCanvas");
	canvas.element.height = canvas.height
	canvas.element.width = canvas.width
	canvas.context = canvas.element.getContext("2d");

	canvas.context.fillStyle = "#ffffff";
	canvas.context.fillRect(0,0,canvas.width,canvas.height);
	particleSystem = new ParticleSystem(canvas.context);
	
	particleSystem.startRain([600,900],[200,400],900,1.4)
	particleSystem.addTenParticles();
	keys = new Keyboard();
	keys.initialize(keys)

	player = new Player(100,100,0,0)


	render();
	
}

function render(){
	canvas.context.save()
	canvas.context.clearRect(0,0,canvas.width,canvas.height);
	//canvas.context.translate(-player.position.x+100,-player.position.y+100);


	canvas.context.rect(particleSystem.rainDynamics.xRange[0],particleSystem.rainDynamics.yRange[0],particleSystem.rainDynamics.xRange[1]-particleSystem.rainDynamics.xRange[0],particleSystem.rainDynamics.yRange[1]-particleSystem.rainDynamics.yRange[0]);
	canvas.context.stroke();
	var now = new Date();
	var timeBetweenFrames = now-timeData.previousFrame;
	if(timeBetweenFrames > 16){
		console.log("AHHHHH")
	}
	player.update(timeBetweenFrames);
	particleSystem.run(timeBetweenFrames);

	player.render(canvas.context);
	

	canvas.context.restore();

	timeData.previousFrame = now;

	setTimeout(render,16-timeBetweenFrames);//16-timeBetweenFrames);
}



main();