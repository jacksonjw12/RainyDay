var canvas = {"element":null, "context":null, "height":550, "width":1200}
var particleSystem = null;
function main(){
	canvas.element = document.getElementById("GameCanvas");
	canvas.element.height = canvas.height
	canvas.element.width = canvas.width
	canvas.context = canvas.element.getContext("2d");

	canvas.context.fillStyle = "#ffffff";
	canvas.context.fillRect(0,0,canvas.width,canvas.height);
	//rainSystem();
	particleSystem = new ParticleSystem(canvas.context);
	
	particleSystem.startRain([0,1200],[0,550],400,3)
	particleSystem.addTenParticles();

	render();

}
function render(){
	canvas.context.clearRect(0,0,canvas.width,canvas.height);
	var timeBetweenFrames = 16
	particleSystem.run(timeBetweenFrames);
	
	setTimeout(render,16);
}



main();