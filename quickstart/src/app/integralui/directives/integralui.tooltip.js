/*
  filename: integralui.tooltip.js
  version : 2.0.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var d=function(b,a){d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return d(b,a)};return function(b,a){function e(){this.constructor=b}d(b,a);b.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}}();Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("../components/integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),i0=require("@angular/core"),i1=require("../services/integralui.common.service"),i2=require("@angular/common"),_c0=["content"],_c1=function(d,b,a,e,c,h){return{display:d,top:b,left:a,opacity:e,width:c,height:h}},IntegralUITooltipComponent=function(d){function b(a,b){var c=d.call(this,b)||this;c.elemRef=a;c.commonService=b;c.animationTimer=
null;c.currentOpacity=0;c.showTimer=null;c.popupTimer=null;c.mousePos={x:0,y:0};c.currentPos={x:0,y:0};c.currentSize={width:0,height:0};c.tooltipDisplay="none";c.startPos={x:0,y:0};c.tooltipSize={width:0,height:0};c.closed=new core_1.EventEmitter;c.updateOptions();return c}__extends(b,d);Object.defineProperty(b.prototype,"options",{get:function(){return this.tooltipOptions},set:function(a){this.updateOptions(a)},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.generalClassName=
"iui-tooltip";this.initStyle()};b.prototype.ngOnDestroy=function(){this.removeAnimationTimer()};b.prototype.animateHide=function(){var a=this;a.removeAnimationTimer();setTimeout(function(){a.currentOpacity=1;a.currentPos={x:a.startPos.x,y:a.startPos.y};a.currentSize={width:a.tooltipSize.width,height:a.tooltipSize.height};var b=a.startPos.x+a.tooltipSize.width/2,c=a.startPos.y+a.tooltipSize.height/2,d=a.getAnimationFactor(),f=a.tooltipSize.width/(2*d),g=a.tooltipSize.height/(2*d),k=b-a.startPos.x;
a.animationTimer=setInterval(function(){a.currentPos.x<b?(a.currentPos.x+=f,a.currentSize.width-=2*f,a.currentOpacity=Math.abs(1-(a.currentPos.x-a.startPos.x)/k)):(a.currentPos.x=b,a.currentSize.width=0,a.currentOpacity=0);a.currentPos.y<c?(a.currentPos.y+=g,a.currentSize.height-=2*g):(a.currentPos.y=c,a.currentSize.height=0);a.currentPos.x>=b&&a.currentPos.y>=c&&(a.removeTimers(),a.removeAnimationTimer(),a.closed.emit(null))},5)},1)};b.prototype.animateShow=function(){var a=this;a.removeAnimationTimer();
setTimeout(function(){a.currentOpacity=0;a.currentPos={x:a.startPos.x+a.tooltipSize.width/2,y:a.startPos.y+a.tooltipSize.height/2};a.currentSize={width:0,height:0};var b=a.getAnimationFactor(),c=a.tooltipSize.width/(2*b),d=a.tooltipSize.height/(2*b),f=a.currentPos.x-a.startPos.x;a.animationTimer=setInterval(function(){a.currentPos.x>a.startPos.x?(a.currentPos.x-=c,a.currentSize.width+=2*c,a.currentOpacity=Math.abs(1-(a.currentPos.x-a.startPos.x)/f)):(a.currentPos.x=a.startPos.x,a.currentSize.width=
a.tooltipSize.width,a.currentOpacity=1);a.currentPos.y>a.startPos.y?(a.currentPos.y-=d,a.currentSize.height+=2*d):(a.currentPos.y=a.startPos.y,a.currentSize.height=a.tooltipSize.height);a.currentPos.x<=a.startPos.x&&a.currentPos.y<=a.startPos.y&&a.removeAnimationTimer()},5)},1)};b.prototype.getAnimationFactor=function(){var a=30;switch(this.tooltipOptions.animationSpeed){case integralui_core_1.IntegralUISpeedMode.VerySlow:a=50;break;case integralui_core_1.IntegralUISpeedMode.Slow:a=40;break;case integralui_core_1.IntegralUISpeedMode.Fast:a=
20;break;case integralui_core_1.IntegralUISpeedMode.VeryFast:a=10}return a};b.prototype.removeAnimationTimer=function(){this.animationTimer&&clearInterval(this.animationTimer)};b.prototype.updateOptions=function(a){this.tooltipOptions=a?{allowAnimation:this.commonService.isFieldAvailable(a.allowAnimation,!0),animationSpeed:this.commonService.isFieldAvailable(a.animationSpeed,!0),autoPopDelay:this.commonService.isFieldAvailable(a.autoPopDelay,5E3),enabled:this.commonService.isFieldAvailable(a.enabled,
!0),initialDelay:this.commonService.isFieldAvailable(a.initialDelay,500),position:this.commonService.isFieldAvailable(a.position,"mouse"),showMarker:this.commonService.isFieldAvailable(a.showMarker,!0),title:this.commonService.isFieldAvailable(a.title,"")}:{allowAnimation:!0,animationSpeed:integralui_core_1.IntegralUISpeedMode.Normal,autoPopDelay:5E3,enabled:!0,initialDelay:500,position:"mouse",showMarker:!0,title:""}};b.prototype.removeTimers=function(){this.showTimer&&(clearTimeout(this.showTimer),
this.showTimer=null);this.popupTimer&&(clearTimeout(this.popupTimer),this.popupTimer=null)};b.prototype.close=function(){this.tooltipOptions.allowAnimation?this.animateHide():(this.currentOpacity=0,this.currentPos={x:this.startPos.x,y:this.startPos.y},this.currentSize={width:this.tooltipSize.width,height:this.tooltipSize.height},this.closed.emit(null))};b.prototype.open=function(a,b){var c=this;c.startPos.y=-9999999;c.tooltipDisplay="block";var e=setTimeout(function(){c.tooltipSize=c.getSize();c.tooltipDisplay=
"none";c.removeTimers();c.tooltipOptions.enabled&&""!=c.tooltipOptions.title&&(c.showTimer=setTimeout(function(){c.show(a,b);c.popupTimer=setTimeout(function(){c.close();clearTimeout(c.popupTimer)},c.tooltipOptions.autoPopDelay);clearTimeout(c.showTimer)},c.tooltipOptions.initialDelay));clearTimeout(e)},1)};b.prototype.show=function(a,b){this.startPos={x:this.mousePos.x,y:this.mousePos.y+24};switch(this.tooltipOptions.position){case "above":this.startPos={x:a.left+Math.floor((b.width-this.tooltipSize.width)/
2),y:a.top-4-this.tooltipSize.height};break;case "below":this.startPos={x:a.left+Math.floor((b.width-this.tooltipSize.width)/2),y:a.bottom+4};break;case "left":this.startPos={x:a.left-4-this.tooltipSize.width,y:a.top+Math.floor((b.height-this.tooltipSize.height)/2)};break;case "right":this.startPos={x:a.right+4,y:a.top+Math.floor((b.height-this.tooltipSize.height)/2)}}this.tooltipDisplay="block";this.tooltipOptions.allowAnimation?this.animateShow():(this.currentOpacity=1,this.currentPos={x:this.startPos.x,
y:this.startPos.y},this.currentSize={width:this.tooltipSize.width,height:this.tooltipSize.height})};b.prototype.getSize=function(){return{width:this.contentElem.nativeElement.offsetWidth+2,height:this.contentElem.nativeElement.offsetHeight+2}};b.prototype.updateMousePos=function(a){this.mousePos!=a&&(this.mousePos=a)};b.prototype.updateControlClass=function(){this.ctrlClass.length=0;this.ctrlClass.push("iui-tooltip");if(this.tooltipOptions.showMarker)switch(this.tooltipOptions.position){case "above":this.ctrlClass.push("iui-tooltip-marker-bottom");
break;case "right":this.ctrlClass.push("iui-tooltip-marker-left");break;case "below":this.ctrlClass.push("iui-tooltip-marker-top");break;case "left":this.ctrlClass.push("iui-tooltip-marker-right")}0==this.options.allowAnimation&&this.ctrlClass.push("iui-tooltip-animation-none")};b.\u0275fac=function(a){return new (a||b)(i0.\u0275\u0275directiveInject(i0.ElementRef),i0.\u0275\u0275directiveInject(i1.IntegralUICommonService))};b.\u0275cmp=i0.\u0275\u0275defineComponent({type:b,selectors:[["iui-tooltip"]],
viewQuery:function(a,b){a&1&&i0.\u0275\u0275viewQuery(_c0,!0,core_1.ElementRef);if(a&2){var c;i0.\u0275\u0275queryRefresh(c=i0.\u0275\u0275loadQuery())&&(b.contentElem=c.first)}},inputs:{controlStyle:"controlStyle",data:"data",state:"state",options:"options"},outputs:{closed:"closed"},features:[i0.\u0275\u0275InheritDefinitionFeature],decls:4,vars:10,consts:[[3,"ngClass","ngStyle"],["content",""]],template:function(a,b){a&1&&(i0.\u0275\u0275elementStart(0,"div",0),i0.\u0275\u0275elementStart(1,"div",
null,1),i0.\u0275\u0275text(3),i0.\u0275\u0275elementEnd(),i0.\u0275\u0275elementEnd());a&2&&(i0.\u0275\u0275property("ngClass",b.getControlClass())("ngStyle",i0.\u0275\u0275pureFunction6(3,_c1,b.tooltipDisplay,b.currentPos.y+"px",b.currentPos.x+"px",b.currentOpacity,b.currentSize.width+"px",b.currentSize.height+"px")),i0.\u0275\u0275advance(3),i0.\u0275\u0275textInterpolate(b.tooltipOptions.title))},directives:[i2.NgClass,i2.NgStyle],encapsulation:2});return b}(integralui_core_1.IntegralUIBaseComponent);
exports.IntegralUITooltipComponent=IntegralUITooltipComponent;
(function(){i0.\u0275setClassMetadata(IntegralUITooltipComponent,[{type:core_1.Component,args:[{selector:"iui-tooltip",template:"\n\t\t<div [ngClass]=\"getControlClass()\" [ngStyle]=\"{ 'display': tooltipDisplay, 'top': currentPos.y + 'px', 'left': currentPos.x + 'px', opacity: currentOpacity, width: currentSize.width + 'px', height: currentSize.height + 'px' }\">\n\t\t\t<div #content>{{tooltipOptions.title}}</div>\n\t\t</div>\n\t",inputs:["controlStyle","data","state"],encapsulation:core_1.ViewEncapsulation.None}]}],
function(){return[{type:i0.ElementRef},{type:i1.IntegralUICommonService}]},{contentElem:[{type:core_1.ViewChild,args:["content",{read:core_1.ElementRef,"static":!1}]}],options:[{type:core_1.Input}],closed:[{type:core_1.Output}]})})();
var IntegralUITooltip=function(){function d(b,a,d){this.elemRef=b;this.cmpResolver=a;this.commonService=d;this.eventList=[];this.cmp=this.cmpRef=null}d.prototype.ngOnDestroy=function(){this.removeTooltip()};d.prototype.closeTooltip=function(){this.cmp&&(this.cmp.close(),this.cmp=null)};d.prototype.removeTooltip=function(){this.cmp=null;this.cmpRef&&(this.eventList&&this.eventList.forEach(function(b){return b.unsubscribe()}),this.cmpRef.destroy())};d.prototype.getSize=function(){return{width:this.elemRef.nativeElement.offsetWidth,
height:this.elemRef.nativeElement.offsetHeight}};d.prototype.onMouseEnter=function(b){var a=this,d=a.tooltipRef?a.tooltipRef:a.settings.appRef;if(d){a.closeTooltip();var c=a.cmpResolver.resolveComponentFactory(IntegralUITooltipComponent);c&&(a.cmpRef=d.createComponent(c),a.cmpRef&&(a.cmpRef.instance&&(a.cmp=a.cmpRef.instance),a.cmp&&(a.cmp.options=a.settings,a.cmp.updateMousePos(a.commonService.getMousePos(b)),b=this.elemRef.nativeElement.getBoundingClientRect(),a.cmp.open(b,a.getSize()),a.eventList.push(a.cmp.closed.subscribe(function(b){a.removeTooltip()})))))}};
d.prototype.onMouseLeave=function(b){this.closeTooltip();this.removeTooltip()};d.prototype.onMouseMove=function(b){this.cmp&&this.cmp.updateMousePos(this.commonService.getMousePos(b))};d.\u0275fac=function(b){return new (b||d)(i0.\u0275\u0275directiveInject(i0.ElementRef),i0.\u0275\u0275directiveInject(i0.ComponentFactoryResolver),i0.\u0275\u0275directiveInject(i1.IntegralUICommonService))};d.\u0275dir=i0.\u0275\u0275defineDirective({type:d,selectors:[["","iuiTooltip",""]],hostBindings:function(b,
a){b&1&&i0.\u0275\u0275listener("mouseenter",function(b){return a.onMouseEnter(b)})("mouseleave",function(b){return a.onMouseLeave(b)})("mousemove",function(b){return a.onMouseMove(b)})},inputs:{settings:["iuiTooltip","settings"],tooltipRef:"tooltipRef"}});return d}();exports.IntegralUITooltip=IntegralUITooltip;
(function(){i0.\u0275setClassMetadata(IntegralUITooltip,[{type:core_1.Directive,args:[{selector:"[iuiTooltip]"}]}],function(){return[{type:i0.ElementRef},{type:i0.ComponentFactoryResolver},{type:i1.IntegralUICommonService}]},{settings:[{type:core_1.Input,args:["iuiTooltip"]}],tooltipRef:[{type:core_1.Input}],onMouseEnter:[{type:core_1.HostListener,args:["mouseenter",["$event"]]}],onMouseLeave:[{type:core_1.HostListener,args:["mouseleave",["$event"]]}],onMouseMove:[{type:core_1.HostListener,args:["mousemove",
["$event"]]}]})})();