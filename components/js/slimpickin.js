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
};

s.fn = Slimpickin.prototype = {
	innerHtml: function(ih){
		if(typeof ih !== 'undefined'){
			if(this.ia){
				for(var i = 0; i < this.l.length; i++)
					this.l[i].innerHtml = ih;
				return this;
			} else {
				this.l.innerHtml = ih;
				return this;
			}
		} else {
			if(this.ia){
				var iha = [];
				for(var i = 0; i < this.l.length; i++)
					iha[i] = this.l[i].innerHtml;
				return iha;
			} else {
				return this.l.innerHtml;
			}
		}
	}
}

if(!window.s){
	window.s = s;
}

}());													
