function Swipe(e,t){"use strict";function c(){o=s.children;u=new Array(o.length);a=e.getBoundingClientRect().width||e.offsetWidth;s.style.width=o.length*a+"px";var t=o.length;while(t--){var n=o[t];n.style.width=a+"px";n.setAttribute("data-index",t);if(i.transitions){n.style.left=t*-a+"px";v(t,f>t?-a:f<t?a:0,0)}}if(!i.transitions)s.style.left=f*-a+"px";e.style.visibility="visible"}function h(){if(f)d(f-1);else if(t.continuous)d(o.length-1)}function p(){if(f<o.length-1)d(f+1);else if(t.continuous)d(0)}function d(e,n){if(f==e)return;if(i.transitions){var s=Math.abs(f-e)-1;var u=Math.abs(f-e)/(f-e);while(s--)v((e>f?e:f)-s-1,a*u,0);v(f,a*u,n||l);v(e,0,n||l)}else{g(f*-a,e*-a,n||l)}f=e;r(t.callback&&t.callback(f,o[f]))}function v(e,t,n){m(e,t,n);u[e]=t}function m(e,t,n){var r=o[e];var i=r&&r.style;if(!i)return;i.webkitTransitionDuration=i.MozTransitionDuration=i.msTransitionDuration=i.OTransitionDuration=i.transitionDuration=n+"ms";i.webkitTransform="translate("+t+"px,0)"+"translateZ(0)";i.msTransform=i.MozTransform=i.OTransform="translateX("+t+"px)"}function g(e,n,r){if(!r){s.style.left=n+"px";return}var i=+(new Date);var u=setInterval(function(){var a=+(new Date)-i;if(a>r){s.style.left=n+"px";if(y)w();t.transitionEnd&&t.transitionEnd.call(event,f,o[f]);clearInterval(u);return}s.style.left=(n-e)*(Math.floor(a/r*100)/100)+e+"px"},4)}function w(){b=setTimeout(p,y)}function E(){y=0;clearTimeout(b)}var n=function(){};var r=function(e){setTimeout(e||n,0)};var i={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(e){var t=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in t)if(e.style[t[n]]!==undefined)return true;return false}(document.createElement("swipe"))};if(!e)return;var s=e.children[0];var o,u,a;t=t||{};var f=parseInt(t.startSlide,10)||0;var l=t.speed||300;t.continuous=t.continuous!==undefined?t.continuous:true;var y=t.auto||0;var b;var S={};var x={};var T;var N={handleEvent:function(e){switch(e.type){case"touchstart":this.start(e);break;case"touchmove":this.move(e);break;case"touchend":r(this.end(e));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":r(this.transitionEnd(e));break;case"resize":r(c.call());break}if(t.stopPropagation)e.stopPropagation()},start:function(e){var t=e.touches[0];S={x:t.pageX,y:t.pageY,time:+(new Date)};T=undefined;x={};s.addEventListener("touchmove",this,false);s.addEventListener("touchend",this,false)},move:function(e){if(e.touches.length>1||e.scale&&e.scale!==1)return;if(t.disableScroll)e.preventDefault();var n=e.touches[0];x={x:n.pageX-S.x,y:n.pageY-S.y};if(typeof T=="undefined"){T=!!(T||Math.abs(x.x)<Math.abs(x.y))}if(!T){e.preventDefault();E();x.x=x.x/(!f&&x.x>0||f==o.length-1&&x.x<0?Math.abs(x.x)/a+1:1);m(f-1,x.x+u[f-1],0);m(f,x.x+u[f],0);m(f+1,x.x+u[f+1],0)}},end:function(e){var n=+(new Date)-S.time;var r=Number(n)<250&&Math.abs(x.x)>20||Math.abs(x.x)>a/2;var i=!f&&x.x>0||f==o.length-1&&x.x<0;var c=x.x<0;if(!T){if(r&&!i){if(c){v(f-1,-a,0);v(f,u[f]-a,l);v(f+1,u[f+1]-a,l);f+=1}else{v(f+1,a,0);v(f,u[f]+a,l);v(f-1,u[f-1]+a,l);f+=-1}t.callback&&t.callback(f,o[f])}else{v(f-1,-a,l);v(f,0,l);v(f+1,a,l)}}s.removeEventListener("touchmove",N,false);s.removeEventListener("touchend",N,false)},transitionEnd:function(e){if(parseInt(e.target.getAttribute("data-index"),10)==f){if(y)w();t.transitionEnd&&t.transitionEnd.call(e,f,o[f])}}};c();if(y)w();if(i.addEventListener){if(i.touch)s.addEventListener("touchstart",N,false);if(i.transitions){s.addEventListener("webkitTransitionEnd",N,false);s.addEventListener("msTransitionEnd",N,false);s.addEventListener("oTransitionEnd",N,false);s.addEventListener("otransitionend",N,false);s.addEventListener("transitionend",N,false)}window.addEventListener("resize",N,false)}else{window.onresize=function(){c()}}return{setup:function(){c()},slide:function(e,t){E();d(e,t)},prev:function(){E();h()},next:function(){E();p()},getPos:function(){return f},getNumSlides:function(){return o.length},kill:function(){E();s.style.width="auto";s.style.left=0;var e=o.length;while(e--){var t=o[e];t.style.width="100%";t.style.left=0;if(i.transitions)m(e,0,0)}if(i.addEventListener){s.removeEventListener("touchstart",N,false);s.removeEventListener("webkitTransitionEnd",N,false);s.removeEventListener("msTransitionEnd",N,false);s.removeEventListener("oTransitionEnd",N,false);s.removeEventListener("otransitionend",N,false);s.removeEventListener("transitionend",N,false);window.removeEventListener("resize",N,false)}else{window.onresize=null}}}}if(window.jQuery||window.Zepto){(function(e){e.fn.Swipe=function(t){return this.each(function(){e(this).data("Swipe",new Swipe(e(this)[0],t))})}})(window.jQuery||window.Zepto)}