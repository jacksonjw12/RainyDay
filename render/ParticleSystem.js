function ParticleSystem(context){
	this.context = context;
	this.particles = []
	this.rain = false;
	this.rainDynamics = {"xRange":[], "yRange":[], "size":80,"fallingSpeed":60, "density":2.2 }


	this.run = function(dt){
		particleSystem.updateParticles(dt);
		if(this.rain){
			this.createRainDrops(this.rainDynamics.density)


		}
		particleSystem.render();

	}

	this.addPartice = function(p){
		this.particles.push(p);
	}

	this.startRain = function(xRange,yRange,speed,density){
		this.rain = true;
		this.rainDynamics.xRange = xRange;
		this.rainDynamics.yRange = yRange;
		this.rainDynamics.density = density
		
	}

	this.addTenParticles = function(){
		for(var n = 0; n< 10; n++){
			var p_x = Math.floor(Math.random() * canvas.width);
			var p_y = Math.floor(Math.random() * canvas.height);

			var p = new Particle(p_x,p_y,50,Math.random()*10,Math.random()*200);
			this.particles.push(p);
		}


	}

	this.createRainDrops = function(numDrops){
		numDrops = Math.floor(Math.random()*numDrops)
		for(var n = 0; n< numDrops; n++){
			var drop_x = Math.floor(Math.random() * (this.rainDynamics.xRange[1]-this.rainDynamics.xRange[0]))+this.rainDynamics.xRange[0];
			var drop_y = this.rainDynamics.yRange[0]

			var drop = new RainDrop(drop_x,drop_y,1000,-90,400*Math.random()+200, 20+Math.random()*60, 2, 'blue');
			this.particles.push(drop);
		}

	}

	this.updateParticles = function(){
		for(var n = 0; n< this.particles.length; n++){
			var exists = this.particles[n].update(16);
			if(!exists){
				this.particles.splice(n,1)
			}
		}

	}
	this.render = function(){
		canvas.context.beginPath();
		for(var n = 0; n< this.particles.length; n++){
			this.particles[n].render(this.context)
		}
		canvas.context.strokeStyle = '#6E90CF';
		canvas.context.stroke();
	}



}