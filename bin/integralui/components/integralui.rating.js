/*
  filename: integralui.rating.js
  version : 1.3.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var e=function(c,a){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return e(c,a)};return function(c,a){function b(){this.constructor=c}e(c,a);c.prototype=null===a?Object.create(a):(b.prototype=a.prototype,new b)}}();Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),forms_1=require("@angular/forms"),i0=require("@angular/core"),i1=require("../services/integralui.common.service"),i2=require("@angular/common"),_c0=function(e){return{width:e}},IntegralUIRating=function(e){function c(a,c){var b=e.call(this,a,c)||this;b.elemRef=a;b.commonService=c;b.ctrlMaxValue=5;b.currentDivision=1;b.currentStepSize=16;b.currentIncrement=
integralui_core_1.IntegralUIIncrementMode.Free;b.isRatingChangeActive=!1;b.contentSize={width:0,height:0};b.ratingSize={width:0,height:0};b.ratingClass=[];return b}__extends(c,e);Object.defineProperty(c.prototype,"division",{get:function(){return this.currentDivision},set:function(a){void 0!=a&&1<=a&&(a=Math.floor(a),this.currentDivision!=a&&(this.currentDivision=a))},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"value",{get:function(){return this.currentValue},set:function(a){var b=
Math.floor(a);switch(this.currentIncrement){case integralui_core_1.IntegralUIIncrementMode.Partial:if(1<this.currentDivision){a=this.currentDivision/4;var c=this.currentDivision/2,d=Math.floor(b/this.currentDivision);a=b>d*this.currentDivision+a?d*this.currentDivision+c:b>d*this.currentDivision+3*a?(d+1)*this.currentDivision:d*this.currentDivision}else a=a>b+.25?b+.5:a>b+.75?b+1:b;break;case integralui_core_1.IntegralUIIncrementMode.Full:1<this.currentDivision?(d=Math.floor(b/this.currentDivision)+
1,a=Math.max(b,d*this.currentDivision)):a=a>b+.5?b+1:b}a=Math.max(0,Math.min(this.ctrlMaxValue*this.currentDivision,a));a!==this.currentValue&&a<=this.ctrlMaxValue*this.currentDivision&&(this.currentValue=a,this.onChange(a),this.processValueChange(),this.valueChanged.emit({value:this.currentValue}))},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"increment",{get:function(){return this.currentIncrement},set:function(a){this.currentIncrement!=a&&(this.currentIncrement=a)},enumerable:!0,
configurable:!0});Object.defineProperty(c.prototype,"max",{get:function(){return this.ctrlMaxValue},set:function(a){void 0!=a&&(a=Math.floor(a),this.ctrlMaxValue!=a&&(this.ctrlMaxValue=a,this.updateLayout()))},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"stepSize",{get:function(){return this.currentStepSize},set:function(a){void 0!=a&&(a=Math.floor(a),this.currentStepSize!=a&&1<=a&&(this.currentStepSize=a,this.updateLayout()))},enumerable:!0,configurable:!0});c.prototype.ngOnInit=
function(){this.generalClassName="iui-rating";this.contentClassName=this.generalClassName+"-content";this.ratingClassName=this.generalClassName+"-value";this.initStyle()};c.prototype.ngAfterViewInit=function(){this.updateLayout()};c.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},content:{disabled:this.contentClassName+
"-disabled",focused:this.contentClassName+"-focused",normal:this.contentClassName,hovered:this.contentClassName+"-hovered",selected:this.contentClassName+"-selected"},rating:{disabled:this.ratingClassName+"-disabled",focused:this.ratingClassName+"-focused",normal:this.ratingClassName,hovered:this.ratingClassName+"-hovered",selected:this.ratingClassName+"-selected"}};this.updateStyle(this.controlStyle);this.updateControlClass();this.updateContentClass();this.updateRatingClass()};c.prototype.ngAfterContentChecked=
function(){1==this.autoUpdate&&(this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth,height:this.elemRef.nativeElement.firstElementChild.clientHeight},this.clientRect.width!=this.prevClientRect.width?(this.updateLayout(),this.prevClientRect.width=this.clientRect.width):this.clientRect.height!=this.prevClientRect.height&&(this.updateLayout(),this.prevClientRect.height=this.clientRect.height))};c.prototype.getContentWidth=function(){return this.contentSize.width};c.prototype.getRatingWidth=
function(){return this.ratingSize.width};c.prototype.processValueChange=function(){this.updateLayout()};c.prototype.updateLayout=function(){var a=this.commonService.getPadding(this.elemRef.nativeElement.firstElementChild);this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth-(a.left+a.right),height:this.elemRef.nativeElement.firstElementChild.clientHeight-(a.top+a.bottom)};this.contentSize={width:this.ctrlMaxValue*this.currentStepSize,height:this.clientRect.height};this.ratingSize=
{width:this.currentValue<this.ctrlMaxValue*this.currentDivision?this.currentValue*this.currentStepSize/this.currentDivision:this.contentSize.width,height:this.clientRect.height}};c.prototype.ctrlMouseDown=function(a){this.isEnabled&&1==a.which&&(this.isRatingChangeActive=!0,this.value=a.offsetX*this.currentDivision/this.currentStepSize,this.updateLayout(),a.stopPropagation())};c.prototype.ctrlMouseMove=function(a){this.isEnabled&&1==a.which&&this.isRatingChangeActive&&(this.value=a.offsetX*this.currentDivision/
this.currentStepSize,this.updateLayout(),a.stopPropagation())};c.prototype.ctrlMouseUp=function(a){this.isRatingChangeActive=!1};c.prototype.ctrlMouseWheel=function(a){this.isEnabled&&(a.preventDefault(),this.value+=-1*Math.max(-1,Math.min(1,a.wheelDelta||-a.detail)),a.stopPropagation())};c.prototype.ctrlTouchEnd=function(a){if(this.isEnabled){var b=this.commonService.getTouchData(a);if(b&&0<b.length){var c=this.commonService.getPageRect(this.elemRef.nativeElement),d=this.commonService.getShiftPos();
this.value=(b[0].pageX-c.left-d.x)*this.currentDivision/this.currentStepSize;this.updateLayout();a.stopPropagation()}}};c.prototype.onWindowMouseUp=function(a){this.isRatingChangeActive=!1};c.prototype.getControlStyle=function(){var a={width:this.getContentWidth()+"px"};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");return a};c.prototype.getRatingValueClass=function(){return this.ratingClass};c.prototype.updateRatingClass=function(){this.ratingClass.length=
0;this.ratingClass.push(this.ratingClassName);this.options.currentStyle&&(this.ratingClass.push(this.options.currentStyle.rating.normal),this.state&integralui_core_1.IntegralUIObjectState.disabled?this.ratingClass.push(this.options.currentStyle.rating.disabled):this.state&integralui_core_1.IntegralUIObjectState.focused?this.ratingClass.push(this.options.currentStyle.rating.focused):this.state&integralui_core_1.IntegralUIObjectState.selected?this.ratingClass.push(this.options.currentStyle.rating.selected):
this.state&integralui_core_1.IntegralUIObjectState.hovered&&this.ratingClass.push(this.options.currentStyle.rating.hovered))};c.prototype.getRatingStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.ratingClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.ratingClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.ratingClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,
this.ratingClassName),selected:this.commonService.isFieldAvailable(a.selected,this.ratingClassName+"-selected")}:{disabled:this.defaultStyle.rating.disabled,focused:this.defaultStyle.rating.focused,hovered:this.defaultStyle.rating.hovered,normal:this.defaultStyle.rating.normal,selected:this.defaultStyle.rating.selected}};c.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),content:this.getContentStyle(a.content),rating:this.getRatingStyle(a.rating)}:
{general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},content:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,hovered:this.defaultStyle.content.hovered,normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected},rating:{disabled:this.defaultStyle.rating.disabled,focused:this.defaultStyle.rating.focused,
hovered:this.defaultStyle.rating.hovered,normal:this.defaultStyle.rating.normal,selected:this.defaultStyle.rating.selected}}};c.\u0275fac=function(a){return new (a||c)(i0.\u0275\u0275directiveInject(i0.ElementRef),i0.\u0275\u0275directiveInject(i1.IntegralUICommonService))};c.\u0275cmp=i0.\u0275\u0275defineComponent({type:c,selectors:[["iui-rating"]],hostBindings:function(a,b){a&1&&i0.\u0275\u0275listener("mouseup",function(a){return b.onWindowMouseUp(a)},!1,i0.\u0275\u0275resolveDocument)},inputs:{autoUpdate:"autoUpdate",
controlStyle:"controlStyle",data:"data",enabled:"enabled",name:"name",size:"size",state:"state",value:"value",division:"division",increment:"increment",max:"max",stepSize:"stepSize"},outputs:{valueChanged:"valueChanged"},features:[i0.\u0275\u0275ProvidersFeature([{provide:forms_1.NG_VALUE_ACCESSOR,useExisting:core_1.forwardRef(function(){return c}),multi:!0}]),i0.\u0275\u0275InheritDefinitionFeature],decls:3,vars:10,consts:[["draggable","true",3,"ngClass","ngStyle","dragstart","mousedown","mousemove",
"mouseup","DOMMouseScroll","mousewheel","touchend"],[2,"position","absolute",3,"ngClass","ngStyle"]],template:function(a,b){a&1&&(i0.\u0275\u0275elementStart(0,"div",0),i0.\u0275\u0275listener("dragstart",function(a){return b.preventDragStart(a)})("mousedown",function(a){return b.ctrlMouseDown(a)})("mousemove",function(a){return b.ctrlMouseMove(a)})("mouseup",function(a){return b.ctrlMouseUp(a)})("DOMMouseScroll",function(a){return b.ctrlMouseWheel(a)})("mousewheel",function(a){return b.ctrlMouseWheel(a)})("touchend",
function(a){return b.ctrlTouchEnd(a)}),i0.\u0275\u0275element(1,"div",1),i0.\u0275\u0275element(2,"div",1),i0.\u0275\u0275elementEnd());a&2&&(i0.\u0275\u0275property("ngClass",b.getControlClass())("ngStyle",b.getControlStyle()),i0.\u0275\u0275advance(1),i0.\u0275\u0275property("ngClass",b.getContentClass())("ngStyle",i0.\u0275\u0275pureFunction1(6,_c0,b.getContentWidth()+"px")),i0.\u0275\u0275advance(1),i0.\u0275\u0275property("ngClass",b.getRatingValueClass())("ngStyle",i0.\u0275\u0275pureFunction1(8,
_c0,b.getRatingWidth()+"px")))},directives:[i2.NgClass,i2.NgStyle],encapsulation:2});return c}(integralui_core_1.IntegralUIBaseValueComponent);exports.IntegralUIRating=IntegralUIRating;
(function(){i0.\u0275setClassMetadata(IntegralUIRating,[{type:core_1.Component,args:[{selector:"iui-rating",template:'\n\t\t<div [ngClass]="getControlClass()" [ngStyle]="getControlStyle()" draggable="true" (dragstart)="preventDragStart($event)" (mousedown)="ctrlMouseDown($event)" (mousemove)="ctrlMouseMove($event)" (mouseup)="ctrlMouseUp($event)" (DOMMouseScroll)="ctrlMouseWheel($event)" (mousewheel)="ctrlMouseWheel($event)" (touchend)="ctrlTouchEnd($event)">\n\t\t\t<div [ngClass]="getContentClass()" style="position:absolute" [ngStyle]="{ width: getContentWidth() + \'px\' }"></div>\n\t\t\t<div [ngClass]="getRatingValueClass()" style="position:absolute" [ngStyle]="{ width: getRatingWidth() + \'px\' }"></div>\n\t\t</div>\n\t',inputs:"autoUpdate controlStyle data enabled name size state value".split(" "),
outputs:["valueChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useExisting:core_1.forwardRef(function(){return IntegralUIRating}),multi:!0}],encapsulation:core_1.ViewEncapsulation.None}]}],function(){return[{type:i0.ElementRef},{type:i1.IntegralUICommonService}]},{division:[{type:core_1.Input}],increment:[{type:core_1.Input}],max:[{type:core_1.Input}],stepSize:[{type:core_1.Input}],onWindowMouseUp:[{type:core_1.HostListener,args:["document:mouseup",["$event"]]}]})})();