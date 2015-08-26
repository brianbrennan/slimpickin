//---------------------------------------------------SLIMPICKIN----------------------------------------------
//											 DOM Element Selection Tool
//											 Written By : Brian Brennan
//													MIT  License
//
(function(){

window.s = function(selector){//selector is what Slimpickin will pick

	if(document.querySelectorAll(selector).length > 1){
		l = document.querySelectorAll(selector);//l is short for element, what will be returned to s;
		l.ia = true;//ia is short for is array;
	} else {
		l = document.querySelector(selector);
		l.ia = false;//ia is short for is array
	}

	l.innerHtml = function(ih){ //changes innner HTML or returns it, depending on parameter input
		if(typeof ih !== "undefined"){
			if(l.ia){
				for(var i = 0; i < this.length; i++){
					l[i].innerHTML = ih;
				}
			} else
			l.innerHTML = ih;
		} else{
			if(l.ia){
				var iha = [];
				for(var i = 0; i < this.length; i++){
					iha[i] = l[i].innerHTML;
				}
				return iha;
			} else {
				return l.innerHTML;
			}
		}
	};

	l.outerHtml = function(oh){
		if(typeof oh !== "undefined"){
			if(l.ia){
				for(var i = 0; i < this.length; i++){
					l[i].outerHTML = oh;
				}
			} else
			l.outerHTML = oh;
		} else{
			if(l.ia){
				var oha = [];
				for(var i = 0; i < this.length; i++){
					oha[i] = l[i].outerHTML;
				}
				return oha;
			} else {
				return l.outerHTML;
			}
		}
	};

	l.css = function(st, stv){ //changes css property of st to stv
		if(typeof stv !== "undefined"){
			if(!l.ia)
				l.style[st] = stv;
			else{
				for(var i = 0; i < this.length; i++){
					l[i].style[st] = stv;
				}
			}
		} else {
			if(!l.ia)
				return l.style[st];

			var sta = [];
			for(var i = 0; i < this.length; i++){
				sta[i] = l[i].style[st];
			}

			return sta;

		}
	};

	l.attribute = function(at, atv){ //changes attribute property of at to atv
		if(typeof atv !== "undefined"){
			if(!l.ia)
				l.setAttribute(at,atv);
			else{
				for(var i = 0; i < this.length; i++){
					l[i].setAttribute(at,atv);
				}
			}
		} else {
			
			if(!l.ia)
				return l.getAttribute(at);
			var atta = [];
			for(var i = 0; i < this.length; i++)
				atta[i] = l[i].getAttribute(at);
			return atta;
		}
	};

	l.class = function(cl){ //changes class or returns it, depending on parameter input
		if(typeof cl !== "undefined"){
			if(l.ia){
				for(var i = 0; i < this.length; i++){
					l[i].setAttribute('class',cl);
				}
			} else {
				l.setAttribute('class',cl);
			}
		} else{
			var res;
			if(l.ia){
				res = [];
				for(var i = 0; i < this.length; i++){
					res[i] = l[i].getAttribute('class');
				}
			} else {
				res = l.getAttribute("class");
			}

			return res;
		}
	};

	l._id = function(id){ //changes id or returns it, depending on parameter input; has underscore to override id attribute error
		if(typeof id !== "undefined"){
			if(l.ia){
				for(var i = 0; i < this.length; i++){
					l[i].setAttribute('id',id);
				}
			} else {
				l.setAttribute('id',id);
			}
		} else{
			var res;
			if(l.ia){
				res = [];
				for(var i = 0; i < this.length; i++){
					res[i] = l[i].getAttribute('id');
				}
			} else {
				res = l.getAttribute("id");
			}

			return res;
		}
	};

	l.hasClass = function(cl){ // returns boolean of if the selected element contains the given class
		if(l.ia){

			var res = [];

			for(var i = 0; i < this.length; i++){

				var ans = " " + l[i].getAttribute("class") + " ";

				res[i] = ans.indexOf(" " + cl + " ") > -1;
			}

			return res;

		} else {
			var ans = " " + l.getAttribute("class") + " ";

			return ans.indexOf(" " + cl + " ") > -1;
		}
	};

	l.hasId = function(id){ // returns boolean of if the selected element contains the given id
		if(l.ia){

			var res = [];

			for(var i = 0; i < this.length; i++){

				var ans = " " + l[i].getAttribute("id") + " ";

				res[i] = ans.indexOf(" " + id + " ") > -1;
			}

			return res;

		} else {
			var ans = " " + l.getAttribute("id") + " ";

			return ans.indexOf(" " + id + " ") > -1;
		}
	};

	l.addClass = function(cl){//adds given class to the list of classes
		if(l.ia){
			for(var i = 0; i < this.length; i++){
				var cla = l[i].getAttribute("class");
				if(cla){
					l[i].setAttribute("class", cla + " " + cl);
				} else{
					l[i].setAttribute("class", cl);
				}
				
			}
		} else {
			var cla = l.getAttribute("class");
			if(cla){
				l.setAttribute("class", cla + " " + cl);
			} else {
				l.setAttribute("class", cl);
			}
		}
	};

	l.addId = function(id){//adds given id to the list of ids
		if(l.ia){
			for(var i = 0; i < this.length; i++){
				var ida = l[i].getAttribute("id");
				if(ida){
					l[i].setAttribute("id", ida + " " + id);
				} else{
					l[i].setAttribute("id", id);
				}
				
			}
		} else {
			var ida = l.getAttribute("id");
			if(ida){
				l.setAttribute("id", ida + " " + id);
			} else {
				l.setAttribute("id", id);
			}
		}
	};

	l.removeClass = function(cl){//removes given class from list of classes
		if(typeof cl !== 'undefined'){
			if(l.ia){
				for(var i = 0; i < this.length; i++){
					if(l[i].getAttribute("class"))
						l[i].setAttribute("class",l[i].getAttribute("class").replace(cl, ""));
				}
			} else {
				if(l.getAttribute("class"))
					l.setAttribute("class",l.getAttribute("class").replace(cl, ""));
			}
		} else{
			if(l.ia){
				for(var i = 0; i < this.length; i++){
					l[i].setAttribute("class","");
				}
			} else {
				if(l.getAttribute("class"))
					l.setAttribute("class","");
			}
		}
		
	};

	l.removeId = function(id){//removes given id from list of ids
		if(typeof id !== 'undefined'){
			if(l.ia){
				for(var i = 0; i < this.length; i++){
					if(l[i].getAttribute("id"))
						l[i].setAttribute("id",l[i].getAttribute("id").replace(id, ""));
				}
			} else {
				if(l.getAttribute("id"))
					l.setAttribute("id",l.getAttribute("id").replace(id, ""));
			}
		} else{
			if(l.ia){
				for(var i = 0; i < this.length; i++){
					l[i].setAttribute("id","");
				}
			} else {
				if(l.getAttribute("id"))
					l.setAttribute("id","");
			}
		}
	};

	l.each = function(cb){ //performs callback function once for each of the selected elements
		if(l.ia){
			for(var i = 0; i < this.length; i++){
				cb();
			}
		} else
		cb();
	};

	l.insert = function(ins){ //inserts parameter after selected elements innerHTML
		if(l.ia){
			for(var i = 0; i < this.length; i++){
				l[i].innerHTML = l[i].innerHTML + ins;
			}
		} else {
			l.innerHTML = l.innerHTML + ins;
		}
	};

	l.presert = function(pre){ //inserts parameter before selected elements innerHTML
		if(l.ia){
			for(var i = 0; i < this.length; i++){
				l[i].innerHTML = pre + l[i].innerHTML;
			}
		} else {
			l.innerHTML = pre + l[i].innerHTML;
		}
	};

	l.inWrap = function(be, af){ //inserts parameters before and after selected elements innerHTML
		if(l.ia){
			for(var i = 0; i < this.length; i++){
				l[i].innerHTML = be + l[i].innerHTML + af;
			}
		} else {
			l.innerHTML = be + l[i].innerHTML + af;
		}
	};

	l.before = function(be){ //inserts parameter before selected elements outerHTML
		if(l.ia){
			for(var i = 0; i < this.length; i++)
				l[i].outerHTML = be + l[i].outerHTML;
		} else
			l.outerHTML = be + l.outerHTML;
	};

	l.after = function(af){ //inserts parameter after selected elements outerHTML
		if(l.ia){
			for(var i = 0; i < this.length; i++)
				l[i].outerHTML = l[i].outerHTML + af;
		} else
		l.outerHTML = l.outerHTML + af;
	};

	l.wrap = function(be, af){ //inserts parameter before and after selected elements outerHTML
		if(l.ia){
			for(var i = 0; i < this.length; i++){
				l[i].outerHTML = be + l[i].outerHTML + af;
			}
		} else {
			l.outerHTML = be + l.outerHTML + af;
		}
	};

	l.remove = function(){ //removes all elements of selector
		if(l.ia){
			for(var i = 0; i < this.length; i++){
				l[i].remove();
			}
		} else {
			l.remove();
		}
	};

	l.first = function(){//returns first element of selector
		if(l.ia)
			return l[0];
		return l;
	};

	l.last = function(){//returns last element of selector
		if(l.ia)
			return l[this.length - 1];
		return l[this.length - 1];
	};

	l.at = function(pos){//returns element with selector at given position
		if(l.ia)
			return l[pos];
		return l;
	};

	l.innerEls = function(){//returns all elements with selector except first and last
		if(l.ia){
			var res = [];

			for(var i = 1; i < this.length - 1; i++){
				res.push(l[i]);
			}

			return res;
		} else {
			return l;
		}
	};

	l.outerEls = function(){//returns first and last elements with selector
		if(l.ia)
			return [l[0], l[this.length - 1]];
		return l;
	};

	return l;
};

}());													
