!function(){window.s=function(t){return document.querySelectorAll(t).length>1?(l=document.querySelectorAll(t),l.ia=!0):(l=document.querySelector(t),l.ia=!1),l.innerHtml=function(t){if("undefined"==typeof t){if(l.ia){for(var e=[],i=0;i<this.length;i++)e[i]=l[i].innerHTML;return e}return l.innerHTML}if(l.ia)for(var i=0;i<this.length;i++)l[i].innerHTML=t;else l.innerHTML=t},l.outerHtml=function(t){if("undefined"==typeof t){if(l.ia){for(var e=[],i=0;i<this.length;i++)e[i]=l[i].outerHTML;return e}return l.outerHTML}if(l.ia)for(var i=0;i<this.length;i++)l[i].outerHTML=t;else l.outerHTML=t},l.style=function(t,e){if("undefined"==typeof e){if(!l.ia)return l.style[t];for(var i=[],r=0;r<this.length;r++)i[r]=l[r].style[t];return i}if(l.ia)for(var r=0;r<this.length;r++)l[r].style[t]=e;else l.style[t]=e},l.attribute=function(t,e){if("undefined"==typeof e){if(!l.ia)return l.getAttribute(t);for(var i=[],r=0;r<this.length;r++)i[r]=l[r].getAttribute(t);return i}if(l.ia)for(var r=0;r<this.length;r++)l[r].setAttribute(t,e);else l.setAttribute(t,e)},l["class"]=function(t){if("undefined"==typeof t){var e;if(l.ia){e=[];for(var i=0;i<this.length;i++)e[i]=l[i].getAttribute("class")}else e=l.getAttribute("class");return e}if(l.ia)for(var i=0;i<this.length;i++)l[i].setAttribute("class",t);else l.setAttribute("class",t)},l._id=function(t){if("undefined"==typeof t){var e;if(l.ia){e=[];for(var i=0;i<this.length;i++)e[i]=l[i].getAttribute("id")}else e=l.getAttribute("id");return e}if(l.ia)for(var i=0;i<this.length;i++)l[i].setAttribute("id",t);else l.setAttribute("id",t)},l.hasClass=function(t){if(l.ia){for(var e=[],i=0;i<this.length;i++){var r=" "+l[i].getAttribute("class")+" ";e[i]=r.indexOf(" "+t+" ")>-1}return e}var r=" "+l.getAttribute("class")+" ";return r.indexOf(" "+t+" ")>-1},l.hasId=function(t){if(l.ia){for(var e=[],i=0;i<this.length;i++){var r=" "+l[i].getAttribute("id")+" ";e[i]=r.indexOf(" "+t+" ")>-1}return e}var r=" "+l.getAttribute("id")+" ";return r.indexOf(" "+t+" ")>-1},l.addClass=function(t){if(l.ia)for(var e=0;e<this.length;e++){var i=l[e].getAttribute("class");i?l[e].setAttribute("class",i+" "+t):l[e].setAttribute("class",t)}else{var i=l.getAttribute("class");i?l.setAttribute("class",i+" "+t):l.setAttribute("class",t)}},l.addId=function(t){if(l.ia)for(var e=0;e<this.length;e++){var i=l[e].getAttribute("id");i?l[e].setAttribute("id",i+" "+t):l[e].setAttribute("id",t)}else{var i=l.getAttribute("id");i?l.setAttribute("id",i+" "+t):l.setAttribute("id",t)}},l.removeClass=function(t){if("undefined"!=typeof t)if(l.ia)for(var e=0;e<this.length;e++)l[e].getAttribute("class")&&l[e].setAttribute("class",l[e].getAttribute("class").replace(t,""));else l.getAttribute("class")&&l.setAttribute("class",l.getAttribute("class").replace(t,""));else if(l.ia)for(var e=0;e<this.length;e++)l[e].setAttribute("class","");else l.getAttribute("class")&&l.setAttribute("class","")},l.removeId=function(t){if("undefined"!=typeof t)if(l.ia)for(var e=0;e<this.length;e++)l[e].getAttribute("id")&&l[e].setAttribute("id",l[e].getAttribute("id").replace(t,""));else l.getAttribute("id")&&l.setAttribute("id",l.getAttribute("id").replace(t,""));else if(l.ia)for(var e=0;e<this.length;e++)l[e].setAttribute("id","");else l.getAttribute("id")&&l.setAttribute("id","")},l.each=function(t){if(l.ia)for(var e=0;e<this.length;e++)t();else t()},l.insert=function(t){if(l.ia)for(var e=0;e<this.length;e++)l[e].innerHTML=l[e].innerHTML+t;else l.innerHTML=l.innerHTML+t},l.presert=function(t){if(l.ia)for(var e=0;e<this.length;e++)l[e].innerHTML=t+l[e].innerHTML;else l.innerHTML=t+l[e].innerHTML},l.inWrap=function(t,e){if(l.ia)for(var i=0;i<this.length;i++)l[i].innerHTML=t+l[i].innerHTML+e;else l.innerHTML=t+l[i].innerHTML+e},l.before=function(t){if(l.ia)for(var e=0;e<this.length;e++)l[e].outerHTML=t+l[e].outerHTML;else l.outerHTML=t+l.outerHTML},l.after=function(t){if(l.ia)for(var e=0;e<this.length;e++)l[e].outerHTML=l[e].outerHTML+t;else l.outerHTML=l.outerHTML+t},l.wrap=function(t,e){if(l.ia)for(var i=0;i<this.length;i++)l[i].outerHTML=t+l[i].outerHTML+e;else l.outerHTML=t+l.outerHTML+e},l.remove=function(){if(l.ia)for(var t=0;t<this.length;t++)l[t].remove();else l.remove()},l.first=function(){return l.ia?l[0]:l},l.last=function(){return l.ia?l[this.length-1]:l[this.length-1]},l.at=function(t){return l.ia?l[t]:l},l.innerEls=function(){if(l.ia){for(var t=[],e=1;e<this.length-1;e++)t.push(l[e]);return t}return l},l.outerEls=function(){return l.ia?[l[0],l[this.length-1]]:l},l}}();