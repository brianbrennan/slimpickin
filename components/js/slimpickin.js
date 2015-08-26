//---------------------------------------------------SLIMPICKIN----------------------------------------------
//											 DOM Element Selection Tool
//											 Written By : Brian Brennan
//													MIT  License
//
(function(){

var s = function(selector){
	return new Slimpickin(selector);
};

var Slimpickin = function(selector){//selector is what Slimpickin will pick

	if(document.querySelectorAll(selector).length > 1){
		this.l = document.querySelectorAll(selector);//l is short for element, what will be returned to s;
		this.ia = true;//ia is short for is array;
	} else {
		this.l = document.querySelector(selector);
		this.ia = false;//ia is short for is array
	}

	this.innerHtml = function(ih){ //changes innner HTML or returns it, depending on parameter input
		if(typeof ih !== "undefined"){
			if(this.ia){
				for(var i = 0; i < this.l.length; i++){
					this[i].innerHTML = ih;
				}
			} else
			this.innerHTML = ih;
		} else{
			if(this.ia){
				var iha = [];
				for(var i = 0; i < this.l.length; i++){
					iha[i] = this.l[i].innerHTML;
				}
				return iha;
			} else {
				return this.innerHTML;
			}
		}
	};

	return this;
};

if(!window.s){
	window.s = s;
}

}());													
