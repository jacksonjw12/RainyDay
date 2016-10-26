var rainDynamics = {"size":80, "densityRange":[0,8], "fallingSpeed":60}
var rainParticles = []



function rainSystem(){
	createRain();
	drawRain();
	moveRain();

	setTimeout(rainSystem,16);
}

function createRain(){
	var numberCreated = Math.floor((Math.random() * (rainDynamics.densityRange[1]-rainDynamics.densityRange[0])) + rainDynamics.densityRange[0]);
	//console.log(numberCreated);
	for(var i = 0; i<numberCreated; i++){
		var xPixel = Math.floor(Math.random()*canvas.width)
		rainParticles.push({"x":xPixel,"y":-rainDynamics.size,"size":rainDynamics.size*Math.random()})
	}
}

function drawRain(){
	
	canvas.context.clearRect(0,0,canvas.width,canvas.height);

	
	console.log(rainParticles.length)
	canvas.context.beginPath();
	for(var i = 0; i<rainParticles.length; i++){
		var particle = rainParticles[i]
		canvas.context.moveTo(particle.x, particle.y+4);
		canvas.context.lineTo(particle.x, particle.y+particle.size);
		
		//console.log(rainParticles[i].y)

	}
	canvas.context.strokeStyle = '#6E90CF';
	canvas.context.stroke();
}
function moveRain(){
	for(var i = 0; i<rainParticles.length; i++){
		rainParticles[i].y+=rainDynamics.fallingSpeed * (rainParticles[i].size/rainDynamics.size);
		//rainParticles[i].x += rainDynamics.fallingSpeed / (rainParticles[i].size) * (Math.random()-.5) / 10;
		if(rainParticles[i].y > canvas.height* (rainParticles[i].size/rainDynamics.size + 3)/4){
			rainParticles.splice(i,1);
		}

	}
}