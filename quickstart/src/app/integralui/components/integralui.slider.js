/*
  filename: integralui.slider.js
  version : 1.1.0
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(e,b){function a(){this.constructor=e}for(var f in b)b.hasOwnProperty(f)&&(e[f]=b[f]);e.prototype=null===b?Object.create(b):(a.prototype=b.prototype,new a)},__decorate=this&&this.__decorate||function(e,b,a,f){var c=arguments.length,d=3>c?b:null===f?f=Object.getOwnPropertyDescriptor(b,a):f,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)d=Reflect.decorate(e,b,a,f);else for(var h=e.length-1;0<=h;h--)if(g=e[h])d=(3>c?g(d):3<c?g(b,a,d):
g(b,a))||d;return 3<c&&d&&Object.defineProperty(b,a,d),d},__metadata=this&&this.__metadata||function(e,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,b)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),forms_1=require("@angular/forms"),IntegralUISlider=IntegralUISlider_1=function(e){function b(a,b){var c=e.call(this,a,b)||this;c.elemRef=a;c.commonService=
b;c.ctrlMaxValue=100;c.ctrlMinValue=0;c.currentOrientation=integralui_core_1.IntegralUIOrientation.Horizontal;c.contentSize={width:0,height:0};c.handleSize={width:0,height:0};c.sliderSize={width:0,height:0};c.sliderPos=0;c.sliderClass=[];c.orientationChanged=new core_1.EventEmitter;c.isSliderChangeActive=!1;return c}__extends(b,e);Object.defineProperty(b.prototype,"value",{get:function(){return Math.floor(this.currentValue)},set:function(a){a=Math.floor(a);a=Math.max(0,Math.min(this.ctrlMaxValue,
a));a!==this.currentValue&&a>=this.ctrlMinValue&&a<=this.ctrlMaxValue&&(this.currentValue=a,this.onChange(a),this.processValueChange(),this.valueChanged.emit({value:this.currentValue}))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"orientation",{get:function(){return this.currentOrientation},set:function(a){this.currentOrientation!=a&&(this.currentOrientation=a,this.updateLayout(),this.orientationChanged.emit(null))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"min",{get:function(){return this.ctrlMinValue},set:function(a){a=Math.floor(a);this.ctrlMinValue!=a&&(this.ctrlMinValue=a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"max",{get:function(){return this.ctrlMaxValue},set:function(a){a=Math.floor(a);this.ctrlMaxValue!=a&&(this.ctrlMaxValue=a)},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.generalClassName="iui-slider";this.contentClassName=this.generalClassName+"-content";this.sliderClassName=this.generalClassName+
"-value";this.initStyle()};b.prototype.ngAfterViewInit=function(){this.updateLayout()};b.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},content:{disabled:this.contentClassName+"-disabled",focused:this.contentClassName+"-focused",normal:this.contentClassName,hovered:this.contentClassName+"-hovered",
selected:this.contentClassName+"-selected"},slider:{disabled:this.sliderClassName+"-disabled",focused:this.sliderClassName+"-focused",normal:this.sliderClassName,hovered:this.sliderClassName+"-hovered",selected:this.sliderClassName+"-selected"}};this.updateStyle(this.controlStyle);this.updateControlClass();this.updateContentClass();this.updateSliderClass()};b.prototype.ngAfterContentChecked=function(){1==this.autoUpdate&&(this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth,
height:this.elemRef.nativeElement.firstElementChild.clientHeight},this.clientRect.width!=this.prevClientRect.width?(this.updateLayout(),this.prevClientRect.width=this.clientRect.width):this.clientRect.height!=this.prevClientRect.height&&(this.updateLayout(),this.prevClientRect.height=this.clientRect.height));this.handleElem&&(this.handleSize.width!=this.handleElem.nativeElement.offsetWidth&&(this.handleSize={width:this.handleElem.nativeElement.offsetWidth,height:this.handleElem.nativeElement.offsetHeight},
this.updateLayout()),this.handleSize.height!=this.handleElem.nativeElement.offsetHeight&&(this.handleSize={width:this.handleElem.nativeElement.offsetWidth,height:this.handleElem.nativeElement.offsetHeight},this.updateLayout()))};b.prototype.getContentWidth=function(){return this.contentSize.width};b.prototype.getSliderWidth=function(){return this.sliderSize.width};b.prototype.processValueChange=function(){this.updateLayout()};b.prototype.updateLayout=function(){var a=this,b=setTimeout(function(){var c=
a.commonService.getPadding(a.elemRef.nativeElement.firstElementChild);a.clientRect={width:a.elemRef.nativeElement.firstElementChild.clientWidth-(c.left+c.right),height:a.elemRef.nativeElement.firstElementChild.clientHeight-(c.top+c.bottom)};a.contentSize={width:a.clientRect.width-2,height:a.clientRect.height-2};a.sliderSize={width:a.clientRect.width-2,height:a.clientRect.height-2};a.currentOrientation==integralui_core_1.IntegralUIOrientation.Horizontal?(a.contentSize.height=1,a.sliderSize.width=a.sliderSize.height/
2):(a.contentSize.width=1,a.sliderSize.height=a.sliderSize.width/2);a.handleSize={width:a.handleElem.nativeElement.offsetWidth,height:a.handleElem.nativeElement.offsetHeight};if(a.currentValue<a.ctrlMinValue||a.currentValue>a.ctrlMaxValue)a.currentValue=Math.max(a.ctrlMinValue,Math.min(a.ctrlMaxValue,a.currentValue));a.sliderPos=a.currentOrientation==integralui_core_1.IntegralUIOrientation.Horizontal?a.currentValue*(a.clientRect.width-a.handleSize.width)/a.ctrlMaxValue:a.currentValue*(a.clientRect.height-
a.handleSize.height)/a.ctrlMaxValue;a.updateContentClass();clearTimeout(b)},1)};b.prototype.ctrlMouseDown=function(a){this.isEnabled&&1==a.which&&(this.isSliderChangeActive=!0,this.currentOrientation==integralui_core_1.IntegralUIOrientation.Horizontal?0<this.clientRect.width&&(this.value=this.ctrlMaxValue*a.offsetX/this.clientRect.width):0<this.clientRect.height&&(this.value=this.ctrlMaxValue*(this.clientRect.height-a.offsetY)/this.clientRect.height),this.updateLayout(),a.stopPropagation())};b.prototype.ctrlMouseMove=
function(a){};b.prototype.ctrlMouseUp=function(a){this.isSliderChangeActive=!1};b.prototype.ctrlMouseWheel=function(a){this.isEnabled&&(a.preventDefault(),this.value+=(this.ctrlMaxValue-this.ctrlMinValue)/10*Math.max(-1,Math.min(1,a.wheelDelta||-a.detail))*-1,a.stopPropagation())};b.prototype.onWindowMouseMove=function(a){if(this.isEnabled&&1==a.which&&this.isSliderChangeActive){var b=this.commonService.getMousePos(a),c=this.commonService.getShiftPos();b.x-=c.x;b.y-=c.y;c=this.commonService.getPageRect(this.elemRef.nativeElement.firstElementChild);
var d=0;this.currentOrientation==integralui_core_1.IntegralUIOrientation.Horizontal?b.x<c.left?d=this.ctrlMinValue:b.x>c.right?d=this.ctrlMaxValue:0<this.clientRect.width&&(d=this.ctrlMaxValue*(b.x-c.left)/this.clientRect.width):b.y>c.bottom?d=this.ctrlMinValue:b.y<c.top?d=this.ctrlMaxValue:0<this.clientRect.height&&(d=this.ctrlMaxValue*(c.bottom-b.y)/this.clientRect.height);this.value=d;this.updateLayout();a.stopPropagation()}};b.prototype.onWindowMouseUp=function(a){this.isSliderChangeActive=!1};
b.prototype.getControlStyle=function(){var a={};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");return a};b.prototype.getSliderBackStyle=function(){return this.currentOrientation==integralui_core_1.IntegralUIOrientation.Horizontal?{left:"0",top:this.clientRect.height/2+"px",width:this.contentSize.width+"px"}:{left:this.clientRect.width/2+"px",top:"0",height:this.contentSize.height+"px"}};b.prototype.getSliderValueStyle=function(){return this.currentOrientation==
integralui_core_1.IntegralUIOrientation.Horizontal?{left:this.sliderPos+"px",top:"0",width:this.sliderSize.width+"px",height:this.sliderSize.height+"px"}:{left:"0",bottom:this.sliderPos+"px",width:this.sliderSize.width+"px",height:this.sliderSize.height+"px"}};b.prototype.updateContentClass=function(){this.contentClass.length=0;this.currentOrientation==integralui_core_1.IntegralUIOrientation.Horizontal?this.contentClass.push(this.contentClassName):this.contentClass.push(this.contentClassName+"-vertical");
this.options.currentStyle&&(this.contentClass.push(this.options.currentStyle.content.normal),this.state&integralui_core_1.IntegralUIObjectState.disabled?this.contentClass.push(this.options.currentStyle.content.disabled):this.state&integralui_core_1.IntegralUIObjectState.focused?this.contentClass.push(this.options.currentStyle.content.focused):this.state&integralui_core_1.IntegralUIObjectState.selected?this.contentClass.push(this.options.currentStyle.content.selected):this.state&integralui_core_1.IntegralUIObjectState.hovered&&
this.contentClass.push(this.options.currentStyle.content.hovered))};b.prototype.getSliderValueClass=function(){return this.sliderClass};b.prototype.updateSliderClass=function(){this.sliderClass.length=0;this.sliderClass.push(this.sliderClassName);this.options.currentStyle&&(this.sliderClass.push(this.options.currentStyle.slider.normal),this.state&integralui_core_1.IntegralUIObjectState.disabled?this.sliderClass.push(this.options.currentStyle.slider.disabled):this.state&integralui_core_1.IntegralUIObjectState.focused?
this.sliderClass.push(this.options.currentStyle.slider.focused):this.state&integralui_core_1.IntegralUIObjectState.selected?this.sliderClass.push(this.options.currentStyle.slider.selected):this.state&integralui_core_1.IntegralUIObjectState.hovered&&this.sliderClass.push(this.options.currentStyle.slider.hovered))};b.prototype.getSliderStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.contentClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,
this.contentClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.contentClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.contentClassName),selected:this.commonService.isFieldAvailable(a.selected,this.contentClassName+"-selected")}:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,hovered:this.defaultStyle.content.hovered,normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected}};
b.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),content:this.getContentStyle(a.content),slider:this.getSliderStyle(a.slider)}:{general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},content:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,
hovered:this.defaultStyle.content.hovered,normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected},slider:{disabled:this.defaultStyle.slider.disabled,focused:this.defaultStyle.slider.focused,hovered:this.defaultStyle.slider.hovered,normal:this.defaultStyle.slider.normal,selected:this.defaultStyle.slider.selected}}};return b}(integralui_core_1.IntegralUIBaseValueComponent);
__decorate([core_1.ViewChild("handle"),__metadata("design:type",core_1.ElementRef)],IntegralUISlider.prototype,"handleElem",void 0);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],IntegralUISlider.prototype,"orientation",null);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],IntegralUISlider.prototype,"min",null);
__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],IntegralUISlider.prototype,"max",null);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUISlider.prototype,"orientationChanged",void 0);__decorate([core_1.HostListener("document:mousemove",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],IntegralUISlider.prototype,"onWindowMouseMove",null);
__decorate([core_1.HostListener("document:mouseup",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],IntegralUISlider.prototype,"onWindowMouseUp",null);
IntegralUISlider=IntegralUISlider_1=__decorate([core_1.Component({selector:"iui-slider",template:'\n\t\t<div [ngClass]="getControlClass()" [ngStyle]="getControlStyle()" draggable="true" (dragstart)="preventDragStart($event)" (mousedown)="ctrlMouseDown($event)" (mousemove)="ctrlMouseMove($event)" (mouseup)="ctrlMouseUp($event)" (DOMMouseScroll)="ctrlMouseWheel($event)" (mousewheel)="ctrlMouseWheel($event)">\n\t\t\t<div [ngClass]="getContentClass()" style="position:absolute" [ngStyle]="getSliderBackStyle()"></div>\n\t\t\t<div [ngClass]="getSliderValueClass()" style="position:absolute;" [ngStyle]="getSliderValueStyle()" #handle></div>\n\t\t</div>\n\t',inputs:"autoUpdate controlStyle data enabled name size state value".split(" "),
outputs:["valueChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useExisting:core_1.forwardRef(function(){return IntegralUISlider_1}),multi:!0}],encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[core_1.ElementRef,integralui_common_service_1.IntegralUICommonService])],IntegralUISlider);exports.IntegralUISlider=IntegralUISlider;var IntegralUISlider_1;