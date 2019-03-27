/*
  filename: integralui.popover.js
  version : 1.0.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var d in a)a.hasOwnProperty(d)&&(b[d]=a[d])};return function(b,a){function d(){this.constructor=b}e(b,a);b.prototype=null===a?Object.create(a):(d.prototype=a.prototype,new d)}}();Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("../components/integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_tooltip_1=require("./integralui.tooltip"),IntegralUIPopOverComponent=function(e){function b(a,d){var c=e.call(this,a,d)||this;c.elemRef=a;c.commonService=d;c.popoverDisplay="none";c.popoverPos={top:0,left:0};c.popoverSize={width:0,height:0};c.closed=new core_1.EventEmitter;c.updateOptions();return c}__extends(b,e);Object.defineProperty(b.prototype,
"options",{get:function(){return this.popoverOptions},set:function(a){this.updateOptions(a)},enumerable:!0,configurable:!0});b.prototype.updateOptions=function(a){this.popoverOptions=a?{activation:this.commonService.isFieldAvailable(a.activation,"auto"),autoPopDelay:this.commonService.isFieldAvailable(a.autoPopDelay,5E3),closeButton:this.commonService.isFieldAvailable(a.closeButton,!0),enabled:this.commonService.isFieldAvailable(a.enabled,!0),header:this.commonService.isFieldAvailable(a.header,!0),
initialDelay:this.commonService.isFieldAvailable(a.initialDelay,500),position:this.commonService.isFieldAvailable(a.position,"mouse"),showMarker:this.commonService.isFieldAvailable(a.showMarker,!0),title:this.commonService.isFieldAvailable(a.title,"")}:{activation:"auto",autoPopDelay:5E3,closeButton:!0,enabled:!0,header:!0,initialDelay:500,position:"mouse",showMarker:!0,title:""}};b.prototype.preventBubbleUp=function(a){a.stopPropagation()};b.prototype.close=function(){this.closed.emit(null)};b.prototype.open=
function(a,d){var c=this;c.popoverPos.top=-9999999;c.popoverDisplay="block";var b=setTimeout(function(){c.popoverSize=c.getSize();c.popoverDisplay="none";c.removeTimers();c.popoverOptions.enabled&&(c.showTimer=setTimeout(function(){c.show(a,d);"auto"==c.popoverOptions.activation&&(c.popupTimer=setTimeout(function(){c.closed.emit(null);clearTimeout(c.popupTimer)},c.popoverOptions.autoPopDelay));clearTimeout(c.showTimer)},c.popoverOptions.initialDelay));clearTimeout(b)},1)};b.prototype.show=function(a,
d){this.popoverPos={top:this.mousePos.y+24,left:this.mousePos.x};switch(this.popoverOptions.position){case "above":this.popoverPos={top:a.top-4-this.popoverSize.height,left:a.left+Math.floor((d.width-this.popoverSize.width)/2)};break;case "below":this.popoverPos={top:a.bottom+4,left:a.left+Math.floor((d.width-this.popoverSize.width)/2)};break;case "left":this.popoverPos={top:a.top+Math.floor((d.height-this.popoverSize.height)/2),left:a.left-4-this.popoverSize.width};break;case "right":this.popoverPos=
{top:a.top+Math.floor((d.height-this.popoverSize.height)/2),left:a.right+4}}this.popoverDisplay="block"};b.prototype.getSize=function(){return{width:this.elemRef.nativeElement.firstElementChild.offsetWidth,height:this.elemRef.nativeElement.firstElementChild.offsetHeight}};b.prototype.updateMousePos=function(a){this.mousePos!=a&&(this.mousePos=a)};b.prototype.updateControlClass=function(){this.ctrlClass.length=0;this.ctrlClass.push("iui-popover");if(this.popoverOptions.showMarker)switch(this.popoverOptions.position){case "above":this.ctrlClass.push("iui-popover-marker-bottom");
break;case "right":this.ctrlClass.push("iui-popover-marker-left");break;case "below":this.ctrlClass.push("iui-popover-marker-top");break;case "left":this.ctrlClass.push("iui-popover-marker-right")}};b.decorators=[{type:core_1.Component,args:[{selector:"iui-popover",template:'\n\t\t<div class="iui-popover" [ngClass]="getControlClass()" [ngStyle]="{ \'display\': popoverDisplay, \'top\': popoverPos.top + \'px\', \'left\': popoverPos.left + \'px\' }" style="opacity:1 !important" (click)="preventBubbleUp($event)" (mousedown)="preventBubbleUp($event)" (mouseup)="preventBubbleUp($event)">\n\t\t\t<div *ngIf="popoverOptions.header" class="iui-popover-header">\n                <div *ngIf="popoverOptions.closeButton" class="iui-popover-close-button" (click)="close()"><span></span></div>\n\t\t\t\t<span *ngIf="popoverOptions.title" class="iui-popover-title">{{popoverOptions.title}}</span>\n\t\t\t</div>\n\t\t\t<div class="iui-popover-content"><ng-template ngFor [ngForOf]="[templateObj.data]" [ngForTemplate]="templateObj.template"></ng-template></div>\n\t\t</div>\n\t',
inputs:["controlStyle","data","state"],encapsulation:core_1.ViewEncapsulation.None}]}];b.ctorParameters=function(){return[{type:core_1.ElementRef},{type:integralui_common_service_1.IntegralUICommonService}]};b.propDecorators={options:[{type:core_1.Input}],closed:[{type:core_1.Output}]};return b}(integralui_tooltip_1.IntegralUITooltipComponent);exports.IntegralUIPopOverComponent=IntegralUIPopOverComponent;
var IntegralUIPopOver=function(e){function b(a,d,b){var c=e.call(this,a,d,b)||this;c.elemRef=a;c.cmpResolver=d;c.commonService=b;c.currentSettings=!1;c.templateData=[];c.currentMousePos={x:0,y:0};c.templateList=[];c.popOverClosed=new core_1.EventEmitter;return c}__extends(b,e);Object.defineProperty(b.prototype,"settings",{get:function(){return this.currentSettings},set:function(a){this.currentSettings!=a&&(this.currentSettings=a,this.updateTemplate())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"popOverShow",{get:function(){return this.isVisible},set:function(a){this.isVisible!=a&&(this.isVisible=a,this.toggle())},enumerable:!0,configurable:!0});b.prototype.ngAfterContentInit=function(){this.updateTemplate()};b.prototype.updateTemplate=function(){this.templateData.length=0;if(this.templates){this.templateList=this.templates.toArray();for(var a=0;a<this.templateList.length;a++)if(this.templateList[a].settings)switch(this.templateList[a].settings.type){case "popover":this.templateData.push(this.templateList[a].getTemplate())}}};
b.prototype.closePopOver=function(){this.cmpRef&&(this.eventList&&this.eventList.forEach(function(a){return a.unsubscribe()}),this.cmpRef.destroy());this.cmpRef=null};b.prototype.openPopOver=function(a){var b=this,c=b.popoverRef?b.popoverRef:b.settings.appRef;if(c){b.closePopOver();var e=b.cmpResolver.resolveComponentFactory(IntegralUIPopOverComponent);e&&(b.cmpRef=c.createComponent(e),b.cmpRef&&(c=null,b.cmpRef._component?c=b.cmpRef._component:b.cmpRef._hostElement&&(c=b.cmpRef._hostElement.component),
c&&(c.options=b.settings,b.templateData[0]&&(c.templateObj={data:b.settings.data||{},template:b.templateData[0]}),a&&c.updateMousePos(a),a=this.elemRef.nativeElement.getBoundingClientRect(),c.open(a,b.getSize()),b.eventList.push(c.closed.subscribe(function(a){b.closePopOver();b.popOverClosed.emit(null)})))))}};b.prototype.toggle=function(){1==this.popOverShow?this.openPopOver(0!=this.currentMousePos.x&&0!=this.currentMousePos.y?this.currentMousePos:void 0):this.closePopOver()};b.prototype.onMouseEnter=
function(a){void 0==this.popOverShow&&(a=this.commonService.getMousePos(a),this.openPopOver(a))};b.prototype.onMouseLeave=function(a){void 0==this.popOverShow&&this.closePopOver()};b.prototype.onMouseMove=function(a){if(this.cmpRef&&void 0==this.popOverShow)if(this.cmpRef._component){var b=this.cmpRef._component;b.updateMousePos(this.commonService.getMousePos(a))}else this.cmpRef&&this.cmpRef._hostElement&&(b=this.cmpRef._hostElement.component,b.updateMousePos(this.commonService.getMousePos(a)));
else this.currentMousePos=this.commonService.getMousePos(a)};b.decorators=[{type:core_1.Directive,args:[{selector:"[iuiPopOver]"}]}];b.ctorParameters=function(){return[{type:core_1.ElementRef},{type:core_1.ComponentFactoryResolver},{type:integralui_common_service_1.IntegralUICommonService}]};b.propDecorators={templates:[{type:core_1.ContentChildren,args:[integralui_core_1.IntegralUITemplate]}],settings:[{type:core_1.Input,args:["iuiPopOver"]}],popoverRef:[{type:core_1.Input}],popOverShow:[{type:core_1.Input}],
popOverClosed:[{type:core_1.Output}],onMouseEnter:[{type:core_1.HostListener,args:["mouseenter",["$event"]]}],onMouseLeave:[{type:core_1.HostListener,args:["mouseleave",["$event"]]}],onMouseMove:[{type:core_1.HostListener,args:["mousemove",["$event"]]}]};return b}(integralui_tooltip_1.IntegralUITooltip);exports.IntegralUIPopOver=IntegralUIPopOver;