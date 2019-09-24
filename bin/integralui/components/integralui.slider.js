/*
  filename: integralui.slider.js
  version : 1.3.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var e=function(b,d){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return e(b,d)};return function(b,d){function a(){this.constructor=b}e(b,d);b.prototype=null===d?Object.create(d):(a.prototype=d.prototype,new a)}}(),__decorate=this&&this.__decorate||function(e,b,d,a){var f=arguments.length,c=3>f?b:null===a?a=Object.getOwnPropertyDescriptor(b,d):a,g;
if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,b,d,a);else for(var h=e.length-1;0<=h;h--)if(g=e[h])c=(3>f?g(c):3<f?g(b,d,c):g(b,d))||c;return 3<f&&c&&Object.defineProperty(b,d,c),c},__metadata=this&&this.__metadata||function(e,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,b)};Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),animations_1=require("@angular/animations"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),forms_1=require("@angular/forms"),IntegralUISlider=function(e){function b(a,b){var c=e.call(this,a,b)||this;c.elemRef=a;c.commonService=b;c.animationState="out";c.ctrlMaxValue=100;c.ctrlMinValue=0;c.currentOrientation=integralui_core_1.IntegralUIOrientation.Horizontal;c.contentSize={width:0,height:0};
c.handleSize={width:0,height:0};c.sliderSize={width:0,height:0};c.sliderPos=0;c.sliderBackgroundClass=[];c.sliderButtonClass=[];c.orientationChanged=new core_1.EventEmitter;c.isSliderChangeActive=!1;return c}__extends(b,e);var d=b;Object.defineProperty(b.prototype,"value",{get:function(){return Math.floor(this.currentValue)},set:function(a){a=Math.floor(a);a=Math.max(0,Math.min(this.ctrlMaxValue,a));a!==this.currentValue&&a>=this.ctrlMinValue&&a<=this.ctrlMaxValue&&(this.currentValue=a,this.onChange(a),
this.processValueChange(),this.valueChanged.emit({value:this.currentValue}))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"orientation",{get:function(){return this.currentOrientation},set:function(a){this.currentOrientation!=a&&(this.currentOrientation=a,this.updateLayout(),this.orientationChanged.emit(null))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"min",{get:function(){return this.ctrlMinValue},set:function(a){a=Math.floor(a);this.ctrlMinValue!=a&&
(this.ctrlMinValue=a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"max",{get:function(){return this.ctrlMaxValue},set:function(a){a=Math.floor(a);this.ctrlMaxValue!=a&&(this.ctrlMaxValue=a)},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.generalClassName="iui-slider";this.contentClassName=this.generalClassName+"-content";this.sliderBackgroundClassName=this.generalClassName+"-background";this.sliderButtonClassName=this.generalClassName+"-button";this.initStyle()};
b.prototype.ngAfterViewInit=function(){this.updateLayout()};b.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},content:{disabled:this.contentClassName+"-disabled",focused:this.contentClassName+"-focused",normal:this.contentClassName,hovered:this.contentClassName+"-hovered",selected:this.contentClassName+
"-selected"},slider:{background:{disabled:this.sliderBackgroundClassName+"-disabled",focused:this.sliderBackgroundClassName+"-focused",normal:this.sliderBackgroundClassName,hovered:this.sliderBackgroundClassName+"-hovered",selected:this.sliderBackgroundClassName+"-selected"},button:{disabled:this.sliderButtonClassName+"-disabled",focused:this.sliderButtonClassName+"-focused",normal:this.sliderButtonClassName,hovered:this.sliderButtonClassName+"-hovered",selected:this.sliderButtonClassName+"-selected"}}};
this.updateStyle(this.controlStyle);this.updateControlClass();this.updateContentClass();this.updateSliderBackgroundClass();this.updateSliderButtonClass()};b.prototype.ngAfterContentChecked=function(){1==this.autoUpdate&&(this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth,height:this.elemRef.nativeElement.firstElementChild.clientHeight},this.clientRect.width!=this.prevClientRect.width?(this.updateLayout(),this.prevClientRect.width=this.clientRect.width):this.clientRect.height!=
this.prevClientRect.height&&(this.updateLayout(),this.prevClientRect.height=this.clientRect.height));this.handleElem&&(this.handleSize.width!=this.handleElem.nativeElement.offsetWidth&&(this.handleSize={width:this.handleElem.nativeElement.offsetWidth,height:this.handleElem.nativeElement.offsetHeight},this.updateLayout()),this.handleSize.height!=this.handleElem.nativeElement.offsetHeight&&(this.handleSize={width:this.handleElem.nativeElement.offsetWidth,height:this.handleElem.nativeElement.offsetHeight},
this.updateLayout()))};b.prototype.getContentWidth=function(){return this.contentSize.width};b.prototype.getSliderWidth=function(){return this.sliderSize.width};b.prototype.processValueChange=function(){this.updateLayout()};b.prototype.updateLayout=function(){var a=this,b=setTimeout(function(){var c=a.commonService.getPadding(a.elemRef.nativeElement.firstElementChild);a.clientRect={width:a.elemRef.nativeElement.firstElementChild.clientWidth-(c.left+c.right),height:a.elemRef.nativeElement.firstElementChild.clientHeight-
(c.top+c.bottom)};a.contentSize={width:a.clientRect.width-2,height:a.clientRect.height-2};a.sliderSize={width:a.clientRect.width-4,height:a.clientRect.height-4};a.currentOrientation==integralui_core_1.IntegralUIOrientation.Horizontal?(a.contentSize.height=1,a.sliderSize.width=a.sliderSize.height/2):(a.contentSize.width=1,a.sliderSize.height=a.sliderSize.width/2);a.handleSize={width:a.handleElem.nativeElement.offsetWidth,height:a.handleElem.nativeElement.offsetHeight};if(a.currentValue<a.ctrlMinValue||
a.currentValue>a.ctrlMaxValue)a.currentValue=Math.max(a.ctrlMinValue,Math.min(a.ctrlMaxValue,a.currentValue));a.sliderPos=a.currentOrientation==integralui_core_1.IntegralUIOrientation.Horizontal?a.currentValue*(a.clientRect.width-a.handleSize.width)/a.ctrlMaxValue:a.currentValue*(a.clientRect.height-a.handleSize.height)/a.ctrlMaxValue;a.updateContentClass();a.updateSliderBackgroundClass();clearTimeout(b)},1)};b.prototype.ctrlMouseEnter=function(a){this.animationState="in"};b.prototype.ctrlMouseLeave=
function(a){this.isSliderChangeActive||(this.animationState="out")};b.prototype.ctrlMouseDown=function(a){this.isEnabled&&1==a.which&&(this.isSliderChangeActive=!0,this.currentOrientation==integralui_core_1.IntegralUIOrientation.Horizontal?0<this.clientRect.width&&(this.value=this.ctrlMaxValue*a.offsetX/this.clientRect.width):0<this.clientRect.height&&(this.value=this.ctrlMaxValue*(this.clientRect.height-a.offsetY)/this.clientRect.height),this.updateLayout(),a.stopPropagation())};b.prototype.ctrlMouseMove=
function(a){this.animationState="in"};b.prototype.ctrlMouseUp=function(a){this.isSliderChangeActive=!1};b.prototype.ctrlMouseWheel=function(a){this.isEnabled&&(a.preventDefault(),this.value+=(this.ctrlMaxValue-this.ctrlMinValue)/10*Math.max(-1,Math.min(1,a.wheelDelta||-a.detail))*-1,a.stopPropagation())};b.prototype.onWindowMouseMove=function(a){if(this.isEnabled&&1==a.which&&this.isSliderChangeActive){var b=this.commonService.getMousePos(a),c=this.commonService.getShiftPos();b.x-=c.x;b.y-=c.y;c=
this.commonService.getPageRect(this.elemRef.nativeElement.firstElementChild);var d=0;this.currentOrientation==integralui_core_1.IntegralUIOrientation.Horizontal?b.x<c.left?d=this.ctrlMinValue:b.x>c.right?d=this.ctrlMaxValue:0<this.clientRect.width&&(d=this.ctrlMaxValue*(b.x-c.left)/this.clientRect.width):b.y>c.bottom?d=this.ctrlMinValue:b.y<c.top?d=this.ctrlMaxValue:0<this.clientRect.height&&(d=this.ctrlMaxValue*(c.bottom-b.y)/this.clientRect.height);this.value=d;this.updateLayout();a.stopPropagation()}};
b.prototype.onWindowMouseUp=function(a){this.isSliderChangeActive=!1;this.animationState="out"};b.prototype.getControlStyle=function(){var a={};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");return a};b.prototype.getSliderBackStyle=function(){return this.currentOrientation==integralui_core_1.IntegralUIOrientation.Horizontal?{left:this.sliderPos+this.handleSize.width+"px",top:this.clientRect.height/2+"px",width:this.contentSize.width-
this.sliderPos-this.handleSize.width+"px"}:{left:this.clientRect.width/2+"px",bottom:this.sliderPos+this.handleSize.height+"px",height:this.contentSize.height-this.sliderPos-this.handleSize.height+"px"}};b.prototype.getSliderBackValueStyle=function(){return this.currentOrientation==integralui_core_1.IntegralUIOrientation.Horizontal?{left:"0",top:this.clientRect.height/2+"px",width:this.sliderPos+"px"}:{left:this.clientRect.width/2+"px",bottom:"0",height:this.sliderPos+"px"}};b.prototype.getSliderValueStyle=
function(){return this.currentOrientation==integralui_core_1.IntegralUIOrientation.Horizontal?{left:this.sliderPos+"px",top:"0",width:this.sliderSize.width+"px",height:this.sliderSize.height+"px"}:{left:"0",bottom:this.sliderPos+"px",width:this.sliderSize.width+"px",height:this.sliderSize.height+"px"}};b.prototype.updateContentClass=function(){this.contentClass.length=0;this.currentOrientation==integralui_core_1.IntegralUIOrientation.Horizontal?this.contentClass.push(this.contentClassName):this.contentClass.push(this.contentClassName+
"-vertical");this.options.currentStyle&&(this.contentClass.push(this.options.currentStyle.content.normal),this.state&integralui_core_1.IntegralUIObjectState.disabled?this.contentClass.push(this.options.currentStyle.content.disabled):this.state&integralui_core_1.IntegralUIObjectState.focused?this.contentClass.push(this.options.currentStyle.content.focused):this.state&integralui_core_1.IntegralUIObjectState.selected?this.contentClass.push(this.options.currentStyle.content.selected):this.state&integralui_core_1.IntegralUIObjectState.hovered&&
this.contentClass.push(this.options.currentStyle.content.hovered))};b.prototype.getSliderBackgroundClass=function(){return this.sliderBackgroundClass};b.prototype.updateSliderBackgroundClass=function(){this.sliderBackgroundClass.length=0;this.currentOrientation==integralui_core_1.IntegralUIOrientation.Horizontal?this.sliderBackgroundClass.push(this.sliderBackgroundClassName):this.sliderBackgroundClass.push(this.sliderBackgroundClassName+"-vertical");this.options.currentStyle&&(this.sliderBackgroundClass.push(this.options.currentStyle.slider.background.normal),
this.state&integralui_core_1.IntegralUIObjectState.disabled?this.sliderBackgroundClass.push(this.options.currentStyle.slider.background.disabled):this.state&integralui_core_1.IntegralUIObjectState.focused?this.sliderBackgroundClass.push(this.options.currentStyle.slider.background.focused):this.state&integralui_core_1.IntegralUIObjectState.selected?this.sliderBackgroundClass.push(this.options.currentStyle.slider.background.selected):this.state&integralui_core_1.IntegralUIObjectState.hovered&&this.sliderBackgroundClass.push(this.options.currentStyle.slider.background.hovered))};
b.prototype.getSliderButtonClass=function(){return this.sliderButtonClass};b.prototype.updateSliderButtonClass=function(){this.sliderButtonClass.length=0;this.sliderButtonClass.push(this.sliderButtonClassName);this.options.currentStyle&&(this.sliderButtonClass.push(this.options.currentStyle.slider.button.normal),this.state&integralui_core_1.IntegralUIObjectState.disabled?this.sliderButtonClass.push(this.options.currentStyle.slider.button.disabled):this.state&integralui_core_1.IntegralUIObjectState.focused?
this.sliderButtonClass.push(this.options.currentStyle.slider.button.focused):this.state&integralui_core_1.IntegralUIObjectState.selected?this.sliderButtonClass.push(this.options.currentStyle.slider.button.selected):this.state&integralui_core_1.IntegralUIObjectState.hovered&&this.sliderButtonClass.push(this.options.currentStyle.slider.button.hovered))};b.prototype.getSliderBackgroundStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,
this.sliderBackgroundClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.sliderBackgroundClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.sliderBackgroundClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.sliderBackgroundClassName),selected:this.commonService.isFieldAvailable(a.selected,this.sliderBackgroundClassName+"-selected")}:{disabled:this.defaultStyle.slider.background.disabled,focused:this.defaultStyle.slider.background.focused,
hovered:this.defaultStyle.slider.background.hovered,normal:this.defaultStyle.slider.background.normal,selected:this.defaultStyle.slider.background.selected}};b.prototype.getSliderButtonStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.sliderButtonClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.sliderButtonClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.sliderButtonClassName+
"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.sliderButtonClassName),selected:this.commonService.isFieldAvailable(a.selected,this.sliderButtonClassName+"-selected")}:{disabled:this.defaultStyle.slider.button.disabled,focused:this.defaultStyle.slider.button.focused,hovered:this.defaultStyle.slider.button.hovered,normal:this.defaultStyle.slider.button.normal,selected:this.defaultStyle.slider.button.selected}};b.prototype.getSliderStyle=function(a){return this.commonService.isString(a)?
a:a?{background:this.getSliderBackgroundStyle(a.background),button:this.getSliderButtonStyle(a.button)}:{background:{disabled:this.defaultStyle.slider.background.disabled,focused:this.defaultStyle.slider.background.focused,hovered:this.defaultStyle.slider.background.hovered,normal:this.defaultStyle.slider.background.normal,selected:this.defaultStyle.slider.background.selected},button:{disabled:this.defaultStyle.slider.button.disabled,focused:this.defaultStyle.slider.button.focused,hovered:this.defaultStyle.slider.button.hovered,
normal:this.defaultStyle.slider.button.normal,selected:this.defaultStyle.slider.button.selected}}};b.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),content:this.getContentStyle(a.content),slider:this.getSliderStyle(a.slider)}:{general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},
content:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,hovered:this.defaultStyle.content.hovered,normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected},slider:this.getSliderStyle()}};__decorate([core_1.ViewChild("handle",{"static":!1}),__metadata("design:type",core_1.ElementRef)],b.prototype,"handleElem",void 0);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],b.prototype,"orientation",
null);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],b.prototype,"min",null);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],b.prototype,"max",null);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"orientationChanged",void 0);__decorate([core_1.HostListener("document:mousemove",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",
[Object]),__metadata("design:returntype",void 0)],b.prototype,"onWindowMouseMove",null);__decorate([core_1.HostListener("document:mouseup",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],b.prototype,"onWindowMouseUp",null);return b=d=__decorate([core_1.Component({selector:"iui-slider",template:'\n\t\t<div [ngClass]="getControlClass()" [ngStyle]="getControlStyle()" draggable="true" (dragstart)="preventDragStart($event)" (mouseenter)="ctrlMouseEnter($event)" (mouseleave)="ctrlMouseLeave($event)" (mousedown)="ctrlMouseDown($event)" (mousemove)="ctrlMouseMove($event)" (mouseup)="ctrlMouseUp($event)" (DOMMouseScroll)="ctrlMouseWheel($event)" (mousewheel)="ctrlMouseWheel($event)">\n\t\t\t<div [ngClass]="getContentClass()" style="position:absolute" [ngStyle]="getSliderBackStyle()"></div>\n\t\t\t<div [ngClass]="getSliderBackgroundClass()" style="position:absolute" [ngStyle]="getSliderBackValueStyle()" [@ctrlAnimation]="allowAnimation && animationState"></div>\n\t\t\t<div [ngClass]="getSliderButtonClass()" style="position:absolute;" [ngStyle]="getSliderValueStyle()" [@ctrlAnimation]="allowAnimation && animationState" #handle></div>\n\t\t</div>\n\t',
inputs:"autoUpdate controlStyle data enabled name size state value".split(" "),outputs:["valueChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useExisting:core_1.forwardRef(function(){return d}),multi:!0}],animations:[animations_1.trigger("ctrlAnimation",[animations_1.state("out",animations_1.style({opacity:"0.6"})),animations_1.state("in",animations_1.style({opacity:"1"})),animations_1.transition("out => in",animations_1.animate("175ms ease-in")),animations_1.transition("in => out",animations_1.animate("175ms ease-out"))])],
encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[core_1.ElementRef,integralui_common_service_1.IntegralUICommonService])],b)}(integralui_core_1.IntegralUIBaseValueComponent);exports.IntegralUISlider=IntegralUISlider;