;function ssc_init(){if(document.body){var e=document.body,s=document.documentElement,c=window.innerHeight,t=e.scrollHeight;if(ssc_root=document.compatMode.indexOf("CSS")>=0?s:e,ssc_activeElement=e,ssc_initdone=!0,top!=self)ssc_frame=!0;else if(t>c&&(e.offsetHeight<=c||s.offsetHeight<=c)&&(ssc_root.style.height="auto",ssc_root.offsetHeight<=c)){var o=document.createElement("div");o.style.clear="both",e.appendChild(o)}ssc_fixedback||(e.style.backgroundAttachment="scroll",s.style.backgroundAttachment="scroll"),ssc_keyboardsupport&&ssc_addEvent("keydown",ssc_keydown)}}function ssc_scrollArray(e,s,c,t){if(t||(t=1e3),ssc_directionCheck(s,c),ssc_que.push({x:s,y:c,lastX:s<0?.99:-.99,lastY:c<0?.99:-.99,start:+new Date}),!ssc_pending){var o=function(){for(var r=+new Date,n=0,a=0,i=0;i<ssc_que.length;i++){var l=ssc_que[i],_=r-l.start,u=_>=ssc_animtime,d=u?1:_/ssc_animtime;ssc_pulseAlgorithm&&(d=ssc_pulse(d));var f=l.x*d-l.lastX>>0,m=l.y*d-l.lastY>>0;n+=f,a+=m,l.lastX+=f,l.lastY+=m,u&&(ssc_que.splice(i,1),i--)}if(s){var h=e.scrollLeft;e.scrollLeft+=n,n&&e.scrollLeft===h&&(s=0)}if(c){var p=e.scrollTop;e.scrollTop+=a,a&&e.scrollTop===p&&(c=0)}s||c||(ssc_que=[]),ssc_que.length?setTimeout(o,t/ssc_framerate+1):ssc_pending=!1};setTimeout(o,0),ssc_pending=!0}}function ssc_wheel(e){ssc_initdone||ssc_init();var s=e.target,c=ssc_overflowingAncestor(s);if(!c||e.defaultPrevented||ssc_isNodeName(ssc_activeElement,"embed")||ssc_isNodeName(s,"embed")&&/\.pdf/i.test(s.src))return!0;var t=e.wheelDeltaX||0,o=e.wheelDeltaY||0;t||o||(o=e.wheelDelta||0),Math.abs(t)>1.2&&(t*=ssc_stepsize/120),Math.abs(o)>1.2&&(o*=ssc_stepsize/120),ssc_scrollArray(c,-t,-o)}function ssc_keydown(e){var s=e.target,c=e.ctrlKey||e.altKey||e.metaKey;if(/input|textarea|embed/i.test(s.nodeName)||s.isContentEditable||e.defaultPrevented||c)return!0;if(ssc_isNodeName(s,"button")&&e.keyCode===ssc_key.spacebar)return!0;var t=0,o=0,r=ssc_overflowingAncestor(ssc_activeElement),n=r.clientHeight;switch(r==document.body&&(n=window.innerHeight),e.keyCode){case ssc_key.up:o=-ssc_arrowscroll;break;case ssc_key.down:o=ssc_arrowscroll;break;case ssc_key.spacebar:o=-(e.shiftKey?1:-1)*n*.9;break;case ssc_key.pageup:o=.9*-n;break;case ssc_key.pagedown:o=.9*n;break;case ssc_key.home:o=-r.scrollTop;break;case ssc_key.end:var a=r.scrollHeight-r.scrollTop-n;o=a>0?a+10:0;break;case ssc_key.left:t=-ssc_arrowscroll;break;case ssc_key.right:t=ssc_arrowscroll;break;default:return!0}ssc_scrollArray(r,t,o),e.preventDefault()}function ssc_mousedown(e){ssc_activeElement=e.target}function ssc_setCache(e,s){for(var c=e.length;c--;)ssc_cache[ssc_uniqueID(e[c])]=s;return s}function ssc_overflowingAncestor(e){var s=[],c=ssc_root.scrollHeight;do{var t=ssc_cache[ssc_uniqueID(e)];if(t)return ssc_setCache(s,t);if(s.push(e),c===e.scrollHeight){if(!ssc_frame||ssc_root.clientHeight+10<c)return ssc_setCache(s,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow"),"scroll"===overflow||"auto"===overflow))return ssc_setCache(s,e)}while(e=e.parentNode)}function ssc_addEvent(e,s,c){window.addEventListener(e,s,c||!1)}function ssc_removeEvent(e,s,c){window.removeEventListener(e,s,c||!1)}function ssc_isNodeName(e,s){return e.nodeName.toLowerCase()===s.toLowerCase()}function ssc_directionCheck(e,s){e=e>0?1:-1,s=s>0?1:-1,ssc_direction.x===e&&ssc_direction.y===s||(ssc_direction.x=e,ssc_direction.y=s,ssc_que=[])}function ssc_pulse_(e){var s,c;return(e*=ssc_pulseScale)<1?s=e-(1-Math.exp(-e)):(e-=1,s=(c=Math.exp(-1))+(1-Math.exp(-e))*(1-c)),s*ssc_pulseNormalize}function ssc_pulse(e){return e>=1?1:e<=0?0:(1==ssc_pulseNormalize&&(ssc_pulseNormalize/=ssc_pulse_(1)),ssc_pulse_(e))}var ssc_framerate=150,ssc_animtime=500,ssc_stepsize=150,ssc_pulseAlgorithm=!0,ssc_pulseScale=6,ssc_pulseNormalize=1,ssc_keyboardsupport=!0,ssc_arrowscroll=50,ssc_frame=!1,ssc_direction={x:0,y:0},ssc_initdone=!1,ssc_fixedback=!0,ssc_root=document.documentElement,ssc_activeElement,ssc_key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},ssc_que=[],ssc_pending=!1,ssc_cache={};setInterval(function(){ssc_cache={}},1e4);var ssc_uniqueID=function(){var e=0;return function(s){return s.ssc_uniqueID||(s.ssc_uniqueID=e++)}}(),ischrome=/chrome/.test(navigator.userAgent.toLowerCase());ischrome&&(ssc_addEvent("mousedown",ssc_mousedown),ssc_addEvent("mousewheel",ssc_wheel),ssc_addEvent("load",ssc_init));
(function($){
$.fn.hasAttr = function(name) {  return this.attr(name) !== undefined; };
$(document).ready(function(){
;if($(".hotline-right .close").length > 0){var showHotline = function(active){var hotline =$(".hotline-right"); if(active == true){hotline.addClass("active"); }else{hotline.removeClass("active"); } if($(".open-hotline-right").length > 0){if(active == true){$(".open-hotline-right").removeClass("active"); }else{$(".open-hotline-right").addClass("active"); } } }; $(".hotline-right .close").click(function(){showHotline(false);}); if($(".open-hotline-right").length > 0){$(".open-hotline-right").click(function(){showHotline(true);}); } }
;if ( ($(window).height() + 100) < $(document).height() ) {$('#top-link-block').removeClass('hidden').affix({offset: {top:100} }); }
;if($("#top-link-block").length > 0){$(window).scroll(function(){var t = parseInt($(window).scrollTop()); if(t>100){$("#top-link-block").css("opacity",1); }else{$("#top-link-block").css("opacity",0); } }); }
;if($("div>table").length > 0){$.each($("div>table"),function(){var that= $(this); that.parent().addClass("table-responsive"); that.addClass("table"); }); }
;if($(".navbar-default li ").length > 0){$(".navbar-default li").click(function(){return false; }); $(".navbar-default li>a").click(function(){if($(this).attr("href").length > 0){if( $(this).hasAttr("target") && $(this).attr("target") == "_blank"){window.open($(this).attr("href"), '_blank'); return false; }else{window.location.href = $(this).attr("href"); } } return true; }); $(".navbar-default li > a > .caret-icon, .navbar-default li > span > .caret-icon").click(function(){if($(window).width() < 992 ){if($(this).parent().parent().hasClass("open")){$(this).parent().parent().removeClass("open"); }else{$(this).parent().parent().addClass("open"); } }else{$(this).parent().parent().removeClass("open"); } return false; }); }
;var resizeFooter = function(){var docHeight = $(window).height(); var footerHeight = $('#footer').height(); var footerTop = $('#footer').position().top + footerHeight; if (footerTop < docHeight) {$('#footer').css('margin-top', (docHeight - footerTop) + 'px'); }else{$('#footer').css('margin-top', '0px');} }; resizeFooter(); $(window).resize(function(){resizeFooter(); });
;if($("img.lazy").length > 0){$.each($("img.lazy"),function(){var that=$(this),url=that.attr("data-src"); $.ajax({url: url, cache: true, processData: false, }).always(function(){that.attr("src",url).fadeIn(); }); }); }
});
;if ($(".csticky-div").length > 0) {$.each($(".csticky-div"), function() {var menu = $(this); var elementTop = ".slider-home"; var getTop = function(){var top = 0; if(elementTop != false){if($(elementTop).length > 0){top = $(elementTop).offset().top + $(elementTop).height(); } } return top; }; var menuPosition = menu.offset(), Top = menuPosition.top + menu.height(); var placeholder = $('<div class="hidden" />'); placeholder.css({width: menu.width() + 'px'}); placeholder.css({height: menu.height() + 'px'}); placeholder.css({'max-width': '100%'}); menu.parent().append(placeholder); var setPosition = function() {var TopVar = getTop() ? getTop() : Top; if ($(window).scrollTop() >= TopVar ) { /*&& $(window).width() >= 768*/ menu.addClass('csticky'); placeholder.removeClass("hidden"); } else {menu.removeClass('csticky'); placeholder.addClass("hidden"); } }; setPosition(); $(window).scroll(function() {setPosition(); }); $(window).resize(function() {setPosition(); }); }); } }(jQuery));
;(function($){var keyCodes=[61,107,173,109,187,189];$(document).keydown(function(event){if (event.ctrlKey==true&&(keyCodes.indexOf(event.which) !=-1)){event.preventDefault();}});$(window).bind('mousewheel DOMMouseScroll',function (event){if (event.ctrlKey==true){event.preventDefault();}});}(jQuery));
;(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div class='parent-is-stuck' />"))&&h.css("position","static");x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:(a.outerWidth(!0) - 2),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);
;(function($){if($(".csticky-holder > .csticky-stick").length > 0){$.each($(".csticky-holder > .csticky-stick"),function(){var topstic = 0; if($(this).parent().children(".static-csticky").length > 0){topstic = parseInt($(this).parent().children(".static-csticky").attr("height")); } $(this).stick_in_parent({offset_top:topstic}); }); } }(jQuery));