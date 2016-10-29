//Defines a particle class

function Particle(x, y, life, angle, speed) {
	this.radius = 10;
	this.position = {
		x: x,
		y: y
	};

	this.life = life;

	var angleInRadians = angle * Math.PI / 180;
	this.velocity = {
		x: speed * Math.cos(angleInRadians),
		y: -speed * Math.sin(angleInRadians)
	};
	this.color = 'blue';

    this.update = function(dt){
        this.life -= dt/1000;//subtract seconds from life seconds
        if(this.life > 0) {
            this.position.x += this.velocity.x * dt/1000;
            this.position.y += this.velocity.y * dt/1000;
        }
        else{
        	this.color = 'red'
        	return false;
        }
        return true;
    }
    this.test = function(){
    	console.log(123)
    }

    this.render = function(context){
		context.beginPath();
		context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
		context.fillStyle = this.color;
		context.fill();
        context.closePath();
    }

}


