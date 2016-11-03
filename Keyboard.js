
function Keyboard(){
	this.keysDown = [];
	this.initialize = function(keyObject){
		document.addEventListener('keydown', function(event){
		
			var keyChar = String.fromCharCode(event.keyCode);
			if(keyObject.keysDown.indexOf(keyChar) == -1){
				
				keyObject.keysDown.push(keyChar);
			}


			});

		document.addEventListener('keyup', function(event){
			
			var keyChar = String.fromCharCode(event.keyCode);
			
			if(keyObject.keysDown.indexOf(keyChar) > -1){

				keyObject.keysDown.splice(keyObject.keysDown.indexOf(keyChar),1);
			}


		})
	}

	




}
