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
	
	particleSystem.startRain([600,900],[0,550],400,1.1)
	particleSystem.addTenParticles();
	keys = new Keyboard();
	keys.initialize(keys)

	player = new Player(100,100,0,0)


	render();
	
}

function render(){
	canvas.context.clearRect(0,0,canvas.width,canvas.height);

	var now = new Date();
	var timeBetweenFrames = now-timeData.previousFrame;


	particleSystem.run(timeBetweenFrames);
	player.update(timeBetweenFrames);
	player.render(canvas.context);

	timeData.previousFrame = now;
	setTimeout(render,16-timeBetweenFrames);
}



main();