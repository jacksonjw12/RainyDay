function RainDrop(x, y, life, angle, speed, length, width, color){
	Particle.call(this,x,y,life,angle,speed)
	this.length = length
	this.width = width
	this.color = color;	
	this.sound = function(number){
		for(var i = 0; i< number; i++){
			console.log("drip, drop")
		}
	}

	this.render = function(context){
		
		//context.fillStyle = this.color;
		//context.fillRect(this.position.x-this.width/2,this.position.y-this.length, this.width,this.length)
		var startY = this.position.y-this.length;
		var endY = this.position.y;
		if(startY < particleSystem.rainDynamics.yRange[0]){
			startY = particleSystem.rainDynamics.yRange[0];
		}
		if(endY > particleSystem.rainDynamics.yRange[1]){
			endY = particleSystem.rainDynamics.yRange[1];
		}
		
		canvas.context.moveTo(this.position.x, startY);
		canvas.context.lineTo(this.position.x, endY);
		
    }


    this.update = function(dt, yCut){
        this.life -= dt/1000;//subtract seconds from life seconds
        if(this.life > 0 && this.position.y < particleSystem.rainDynamics.yRange[1] + this.length) {
            this.position.x += this.velocity.x * dt/1000;
            this.position.y += this.velocity.y * dt/1000;
        }
        else{
        	this.color = 'red'
        	return false;
        }
        return true;
    }



}