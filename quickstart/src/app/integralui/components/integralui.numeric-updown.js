/*
  filename: integralui.numeric-updown.js
  version : 1.2.0
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(d,b){function a(){this.constructor=d}for(var e in b)b.hasOwnProperty(e)&&(d[e]=b[e]);d.prototype=null===b?Object.create(b):(a.prototype=b.prototype,new a)},__decorate=this&&this.__decorate||function(d,b,a,e){var c=arguments.length,f=3>c?b:null===e?e=Object.getOwnPropertyDescriptor(b,a):e,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)f=Reflect.decorate(d,b,a,e);else for(var h=d.length-1;0<=h;h--)if(g=d[h])f=(3>c?g(f):3<c?g(b,a,f):
g(b,a))||f;return 3<c&&f&&Object.defineProperty(b,a,f),f},__metadata=this&&this.__metadata||function(d,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(d,b)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),forms_1=require("@angular/forms"),IntegralUINumericUpDown=IntegralUINumericUpDown_1=function(d){function b(a,b){var c=d.call(this,a,b)||this;c.elemRef=
a;c.commonService=b;c.ctrlMaxValue=100;c.ctrlMinValue=0;c.currentStep=1;c.currentAccelerator=0;c.valueTimer=null;c.valueCount=0;c.isChangeActive=!1;c.stopTimer=!0;c.contentSize={width:0,height:0};c.ctrlValueWidth=0;c.leftRightMarginTop=0;c.topBotomMarginLeft=0;c.currentDisplayMode=integralui_core_1.IntegralUINumericDisplayMode.InBound;c.mouseWheelSpeed=integralui_core_1.IntegralUISpeedMode.Normal;c.displayModeChanged=new core_1.EventEmitter;return c}__extends(b,d);Object.defineProperty(b.prototype,
"accelerator",{get:function(){return this.currentAccelerator},set:function(a){this.currentAccelerator!=a&&(this.currentAccelerator=a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"displayMode",{get:function(){return this.currentDisplayMode},set:function(a){this.currentDisplayMode!=a&&(this.currentDisplayMode=a,this.updateLayout(),this.displayModeChanged.emit(null))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"max",{get:function(){return this.ctrlMaxValue},
set:function(a){a=Math.floor(a);this.ctrlMaxValue!=a&&(this.ctrlMaxValue=a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"min",{get:function(){return this.ctrlMinValue},set:function(a){a=Math.floor(a);this.ctrlMinValue!=a&&(this.ctrlMinValue=a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"step",{get:function(){return this.currentStep},set:function(a){this.currentStep!=a&&(this.currentStep=a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"value",{get:function(){return Math.floor(this.currentValue)},set:function(a){a=Math.floor(a);a=Math.max(this.ctrlMinValue,Math.min(this.ctrlMaxValue,a));a!==this.currentValue&&a>=this.ctrlMinValue&&a<=this.ctrlMaxValue&&(this.currentValue=a,this.onChange(a),this.processValueChange(),this.valueChanged.emit({value:this.currentValue}))},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.generalClassName="iui-numeric";this.contentClassName=this.generalClassName+"-content";this.initStyle()};
b.prototype.ngAfterViewInit=function(){this.updateLayout()};b.prototype.ngOnDestroy=function(){this.valueTimer&&clearInterval(this.valueTimer)};b.prototype.ngAfterContentChecked=function(){1==this.autoUpdate&&(this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth,height:this.elemRef.nativeElement.firstElementChild.clientHeight},this.clientRect.width!=this.prevClientRect.width?(this.updateLayout(),this.prevClientRect.width=this.clientRect.width):this.clientRect.height!=this.prevClientRect.height&&
(this.updateLayout(),this.prevClientRect.height=this.clientRect.height))};b.prototype.getContentWidth=function(){return this.contentSize.width};b.prototype.updateLayout=function(){var a=this,b=setTimeout(function(){var c=a.commonService.getPadding(a.elemRef.nativeElement.firstElementChild);a.clientRect={width:a.elemRef.nativeElement.firstElementChild.clientWidth-(c.left+c.right),height:a.elemRef.nativeElement.firstElementChild.clientHeight-(c.top+c.bottom)};a.contentSize={width:100>a.currentValue?
Math.floor(a.clientRect.width*a.currentValue/100):a.clientRect.width,height:a.clientRect.height};c=a.commonService.getBorderWidth(a.valueElem.nativeElement);var e=a.commonService.getMargin(a.valueElem.nativeElement),d=a.commonService.getPadding(a.valueElem.nativeElement);switch(a.displayMode){case integralui_core_1.IntegralUINumericDisplayMode.LeftRight:a.leftrightButtonsElem&&(a.ctrlValueWidth=a.clientRect.width-(c.left+c.right+e.left+e.right+d.left+d.right+2*a.leftrightButtonsElem.nativeElement.offsetWidth),
a.valueElem&&(a.leftRightMarginTop=(a.valueElem.nativeElement.offsetHeight-a.leftrightButtonsElem.nativeElement.offsetHeight)/2));break;case integralui_core_1.IntegralUINumericDisplayMode.UpDown:a.topBottomButtonsChildElem&&a.valueElem&&(a.topBotomMarginLeft=(a.valueElem.nativeElement.offsetWidth-a.topBottomButtonsChildElem.nativeElement.offsetWidth)/2);break;default:a.inboundButtonsElem&&(a.ctrlValueWidth=a.clientRect.width-(c.left+c.right+e.left+e.right+d.left+d.right+a.inboundButtonsElem.nativeElement.offsetWidth))}clearTimeout(b)},
1)};b.prototype.changeValueTimerElapsed=function(a){0==this.valueCount&&(this.valueCount=1);this.valueCount+=this.currentAccelerator*this.step;this.stopTimer=!1;this.changeValue(a);this.stopTimer&&(clearInterval(this.valueTimer),this.isChangeActive=!1)};b.prototype.changeValue=function(a){a?this.value+this.valueCount<this.ctrlMaxValue?this.value+=this.valueCount:(this.stopTimer=!0,this.value=this.ctrlMaxValue):0<this.value-this.valueCount?this.value-=this.valueCount:(this.stopTimer=!0,this.value=
this.ctrlMinValue)};b.prototype.decreaseValue=function(){this.value-=this.step};b.prototype.increaseValue=function(){this.value+=this.step};b.prototype.startChange=function(a){var b=this;b.valueTimer&&clearInterval(this.valueTimer);b.valueCount=0;b.isChangeActive=!0;b.valueTimer=setInterval(function(){b.changeValueTimerElapsed(a)},100)};b.prototype.stopChange=function(){this.valueTimer&&clearInterval(this.valueTimer);this.isChangeActive=!1};b.prototype.ctrlMouseWheel=function(a){if(this.isEnabled){a.preventDefault();
var b=Math.max(-1,Math.min(1,a.wheelDelta||-a.detail)),c=5;switch(this.mouseWheelSpeed){case integralui_core_1.IntegralUISpeedMode.VerySlow:c=1;break;case integralui_core_1.IntegralUISpeedMode.Slow:c=2;break;case integralui_core_1.IntegralUISpeedMode.Fast:c=10;break;case integralui_core_1.IntegralUISpeedMode.VeryFast:c=100}this.value+=this.step*c*b;a.stopPropagation()}};b.prototype.onMouseDown=function(a,b){this.startChange(b)};b.prototype.onMouseUp=function(a){this.stopChange()};b.prototype.getControlStyle=
function(){var a={};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");return a};return b}(integralui_core_1.IntegralUIBaseValueComponent);__decorate([core_1.ViewChild("ctrlValue"),__metadata("design:type",core_1.ElementRef)],IntegralUINumericUpDown.prototype,"valueElem",void 0);__decorate([core_1.ViewChild("inboundButtons"),__metadata("design:type",core_1.ElementRef)],IntegralUINumericUpDown.prototype,"inboundButtonsElem",void 0);
__decorate([core_1.ViewChild("leftrightButtons"),__metadata("design:type",core_1.ElementRef)],IntegralUINumericUpDown.prototype,"leftrightButtonsElem",void 0);__decorate([core_1.ViewChild("topBottomButtons"),__metadata("design:type",core_1.ElementRef)],IntegralUINumericUpDown.prototype,"topBottomButtonsElem",void 0);__decorate([core_1.ViewChild("topBottomButtonsChild"),__metadata("design:type",core_1.ElementRef)],IntegralUINumericUpDown.prototype,"topBottomButtonsChildElem",void 0);
__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],IntegralUINumericUpDown.prototype,"accelerator",null);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],IntegralUINumericUpDown.prototype,"displayMode",null);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],IntegralUINumericUpDown.prototype,"max",null);
__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],IntegralUINumericUpDown.prototype,"min",null);__decorate([core_1.Input(),__metadata("design:type",Number)],IntegralUINumericUpDown.prototype,"mouseWheelSpeed",void 0);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],IntegralUINumericUpDown.prototype,"step",null);
__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUINumericUpDown.prototype,"displayModeChanged",void 0);
IntegralUINumericUpDown=IntegralUINumericUpDown_1=__decorate([core_1.Component({selector:"iui-numeric-updown",template:'\n\t\t<div [ngClass]="getControlClass()" [ngStyle]="getControlStyle()" draggable="true" (dragstart)="preventDragStart($event)" (DOMMouseScroll)="ctrlMouseWheel($event)" (mousewheel)="ctrlMouseWheel($event)">\n            <span [ngSwitch]="displayMode">\n                <span *ngSwitchCase="1">\n\t\t\t\t\t<div class="iui-numeric-leftright-buttons" style="float:left" [ngStyle]="{ \'margin-top\': leftRightMarginTop + \'px\' }" (click)="decreaseValue()" (mousedown)="onMouseDown($event)" (mouseup)="onMouseUp($event)" #leftrightButtons>\n\t\t\t\t\t\t<span class="iui-numeric-leftright-decrease"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="iui-numeric-leftright-value" [ngStyle]="{ width: ctrlValueWidth + \'px\' }" #ctrlValue>{{value}}</div>\n\t\t\t\t\t<div class="iui-numeric-leftright-buttons" style="float:right" [ngStyle]="{ \'margin-top\': leftRightMarginTop + \'px\' }" (click)="increaseValue()" (mousedown)="onMouseDown($event, true)" (mouseup)="onMouseUp($event)">\n\t\t\t\t\t\t<span class="iui-numeric-leftright-increase"></span>\n\t\t\t\t\t</div>\n                </span>\n                <span *ngSwitchCase="2">\n\t\t\t\t\t<div class="iui-numeric-updown-buttons" (click)="increaseValue()" (mousedown)="onMouseDown($event, true)" (mouseup)="onMouseUp($event)" #topBottomButtons>\n\t\t\t\t\t\t<span class="iui-numeric-updown-increase" [ngStyle]="{ \'margin-left\': topBotomMarginLeft + \'px\' }" #topBottomButtonsChild></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="iui-numeric-updown-value" #ctrlValue>{{value}}</div>\n\t\t\t\t\t<div class="iui-numeric-updown-buttons" (click)="decreaseValue()" (mousedown)="onMouseDown($event)" (mouseup)="onMouseUp($event)">\n\t\t\t\t\t\t<span class="iui-numeric-updown-decrease" [ngStyle]="{ \'margin-left\': topBotomMarginLeft + \'px\' }"></span>\n\t\t\t\t\t</div>\n                </span>\n                <span *ngSwitchDefault>\n\t\t\t\t\t<div class="iui-numeric-inbound-buttons" #inboundButtons>\n\t\t\t\t\t\t<div class="iui-numeric-inbound-btn" (click)="increaseValue()" (mousedown)="onMouseDown($event, true)" (mouseup)="onMouseUp($event)">\n\t\t\t\t\t\t\t<span class="iui-numeric-inbound-button-up"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="iui-numeric-inbound-btn" (click)="decreaseValue()" (mousedown)="onMouseDown($event)" (mouseup)="onMouseUp($event)">\n\t\t\t\t\t\t\t<span class="iui-numeric-inbound-button-down"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="iui-numeric-inbound-value" [ngStyle]="{ width: ctrlValueWidth + \'px\' }" #ctrlValue>{{value}}</div>\n                </span>\n            </span>\n\t\t</div>\n\t',inputs:"autoUpdate controlStyle data enabled name size state value".split(" "),
outputs:["valueChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useExisting:core_1.forwardRef(function(){return IntegralUINumericUpDown_1}),multi:!0}],encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[core_1.ElementRef,integralui_common_service_1.IntegralUICommonService])],IntegralUINumericUpDown);exports.IntegralUINumericUpDown=IntegralUINumericUpDown;var IntegralUINumericUpDown_1;