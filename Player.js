function Player(xPos, yPos, xVel, yVel){
	this.position = {"x":xPos,"y":yPos};
	this.playerData = {"xVel":xVel,"yVel":yVel,"maxSpeed":.3,"speedIncrement":2000, "friction":1000}
	this.radius = 30;

	this.color = "#7fbf7f"
	this.update = function(dt){
		var dts = dt

		var deltaSpeedIncrement = this.playerData.speedIncrement*dts
		if(keys.keysDown.indexOf("A") > -1){
			if(this.playerData.xVel-deltaSpeedIncrement > -1*this.playerData.maxSpeed){
				this.playerData.xVel-=deltaSpeedIncrement;
			}
			else{
				this.playerData.xVel= -1* this.playerData.maxSpeed;
			}
			
		}
		if(keys.keysDown.indexOf("D") > -1){

			if(this.playerData.xVel+deltaSpeedIncrement < this.playerData.maxSpeed){
				this.playerData.xVel+=deltaSpeedIncrement;
			}
			else{
				this.playerData.xVel = this.playerData.maxSpeed;
			}
			
		}
		if((keys.keysDown.indexOf("D") < 0 && keys.keysDown.indexOf("A") < 0) || (keys.keysDown.indexOf("D") > -1 && keys.keysDown.indexOf("A") > -1)){
			if(Math.abs(this.playerData.xVel) > this.playerData.friction*dts){
				this.playerData.xVel -= dts*this.playerData.friction*Math.abs(this.playerData.xVel)/this.playerData.xVel
			}
			else{
				this.playerData.xVel = 0;
			}
		}
		
		if(keys.keysDown.indexOf("W") > -1){
			if(this.playerData.yVel-deltaSpeedIncrement > -1*this.playerData.maxSpeed){
				this.playerData.yVel-=deltaSpeedIncrement;
			}
			else{
				this.playerData.yVel= -1* this.playerData.maxSpeed;
			}
			
		}
		if(keys.keysDown.indexOf("S") > -1){

			if(this.playerData.yVel+deltaSpeedIncrement < this.playerData.maxSpeed){
				this.playerData.yVel+=deltaSpeedIncrement;
			}
			else{
				this.playerData.yVel = this.playerData.maxSpeed;
			}
			
		}
		if((keys.keysDown.indexOf("W") < 0 && keys.keysDown.indexOf("S") < 0) || (keys.keysDown.indexOf("W") > -1 && keys.keysDown.indexOf("S") > -1)){
			if(Math.abs(this.playerData.yVel) > this.playerData.friction*dts){
				this.playerData.yVel -= dts*this.playerData.friction*Math.abs(this.playerData.yVel)/this.playerData.yVel
			}
			else{
				this.playerData.yVel = 0;
			}
		}
		//normalize velocity to maximum velocity
		var currentSpeed = Math.sqrt(this.playerData.xVel * this.playerData.xVel + this.playerData.yVel*this.playerData.yVel)
		var ratio = currentSpeed/this.playerData.maxSpeed;
		if( ratio > 1){
			this.position.x += this.playerData.xVel * dts / ratio
			this.position.y += this.playerData.yVel * dts / ratio
		}
		else{
			this.position.x += (this.playerData.xVel * dts);
			this.position.y += (this.playerData.yVel * dts);
		}
		//this.position.x = Math.floor(this.position.x)
		//this.position.y = Math.floor(this.position.y)


	}

	this.render = function(context){
		context.globalAlpha = 1;
      context.beginPath();
      context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
      context.fillStyle = this.color;
      context.fill();


		context.beginPath();
		//context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);

		context.fillStyle = this.color;

		context.fill();
		
	}

}