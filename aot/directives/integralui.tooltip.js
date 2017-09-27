/*
  filename: integralui.tooltip.js
  version : 1.2.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ComponentFactoryResolver, Directive, ElementRef, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';
import { IntegralUIBaseComponent } from '../components/integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
var IntegralUITooltipComponent = (function (_super) {
__extends(IntegralUITooltipComponent,_super);function IntegralUITooltipComponent(b,c){var a=_super.call(this,c)||this;a.elemRef=b;a.commonService=c;a.showTimer=null;a.popupTimer=null;a.mousePos={x:0,y:0};a.tooltipDisplay="none";a.tooltipPos={top:0,left:0};a.tooltipSize={width:0,height:0};a.closed=new EventEmitter;a.updateOptions();return a}
Object.defineProperty(IntegralUITooltipComponent.prototype,"options",{get:function(){return this.tooltipOptions},set:function(b){this.updateOptions(b)},enumerable:!0,configurable:!0});
IntegralUITooltipComponent.prototype.updateOptions=function(b){this.tooltipOptions=b?{autoPopDelay:this.commonService.isFieldAvailable(b.autoPopDelay,5E3),enabled:this.commonService.isFieldAvailable(b.enabled,!0),initialDelay:this.commonService.isFieldAvailable(b.initialDelay,500),position:this.commonService.isFieldAvailable(b.position,"mouse"),showMarker:this.commonService.isFieldAvailable(b.showMarker,!0),title:this.commonService.isFieldAvailable(b.title,"")}:{autoPopDelay:5E3,enabled:!0,initialDelay:500,
position:"mouse",showMarker:!0,title:""}};IntegralUITooltipComponent.prototype.removeTimers=function(){this.showTimer&&(clearTimeout(this.showTimer),this.showTimer=null);this.popupTimer&&(clearTimeout(this.popupTimer),this.popupTimer=null)};
IntegralUITooltipComponent.prototype.open=function(b,c){var a=this;a.tooltipPos.top=-9999999;a.tooltipDisplay="block";var d=setTimeout(function(){a.tooltipSize=a.size();a.tooltipDisplay="none";a.removeTimers();a.tooltipOptions.enabled&&""!=a.tooltipOptions.title&&(a.showTimer=setTimeout(function(){a.show(b,c);a.popupTimer=setTimeout(function(){a.closed.emit(null);clearTimeout(a.popupTimer)},a.tooltipOptions.autoPopDelay);clearTimeout(a.showTimer)},a.tooltipOptions.initialDelay));clearTimeout(d)},
1)};
IntegralUITooltipComponent.prototype.show=function(b,c){this.tooltipPos={top:this.mousePos.y+24,left:this.mousePos.x};switch(this.tooltipOptions.position){case "above":this.tooltipPos={top:b.top-4-this.tooltipSize.height,left:b.left+Math.floor((c.width-this.tooltipSize.width)/2)};break;case "below":this.tooltipPos={top:b.bottom+4,left:b.left+Math.floor((c.width-this.tooltipSize.width)/2)};break;case "left":this.tooltipPos={top:b.top+Math.floor((c.height-this.tooltipSize.height)/2),left:b.left-4-this.tooltipSize.width};
break;case "right":this.tooltipPos={top:b.top+Math.floor((c.height-this.tooltipSize.height)/2),left:b.right+4}}this.tooltipDisplay="block"};IntegralUITooltipComponent.prototype.size=function(){return{width:this.elemRef.nativeElement.firstElementChild.offsetWidth,height:this.elemRef.nativeElement.firstElementChild.offsetHeight}};IntegralUITooltipComponent.prototype.updateMousePos=function(b){this.mousePos!=b&&(this.mousePos=b)};
IntegralUITooltipComponent.prototype.updateControlClass=function(){this.ctrlClass.length=0;this.ctrlClass.push("iui-tooltip");if(this.tooltipOptions.showMarker)switch(this.tooltipOptions.position){case "above":this.ctrlClass.push("iui-tooltip-marker-bottom");break;case "right":this.ctrlClass.push("iui-tooltip-marker-left");break;case "below":this.ctrlClass.push("iui-tooltip-marker-top");break;case "left":this.ctrlClass.push("iui-tooltip-marker-right")}};    return IntegralUITooltipComponent;
}(IntegralUIBaseComponent));
export { IntegralUITooltipComponent };
IntegralUITooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'iui-tooltip',
                template: "\n\t\t<div class=\"iui-tooltip\" [ngClass]=\"getControlClass()\" [ngStyle]=\"{ 'display': tooltipDisplay, 'top': tooltipPos.top + 'px', 'left': tooltipPos.left + 'px' }\" style=\"opacity:1 !important\">{{tooltipOptions.title}}</div>\n\t",
                inputs: ['controlStyle', 'data', 'state'],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUITooltipComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: IntegralUICommonService, },
]; };
IntegralUITooltipComponent.propDecorators = {
    'options': [{ type: Input },],
    'closed': [{ type: Output },],
};
var IntegralUITooltip = (function () {
function IntegralUITooltip(c,a,b){this.elemRef=c;this.cmpResolver=a;this.commonService=b;this.eventList=[];this.cmpRef=null}IntegralUITooltip.prototype.closeTooltip=function(){this.cmpRef&&(this.eventList&&this.eventList.forEach(function(c){return c.unsubscribe()}),this.cmpRef.destroy())};IntegralUITooltip.prototype.size=function(){return{width:this.elemRef.nativeElement.offsetWidth,height:this.elemRef.nativeElement.offsetHeight}};
IntegralUITooltip.prototype.onMouseEnter=function(c){var a=this,b=a.tooltipRef?a.tooltipRef:a.settings.appRef;if(b){a.closeTooltip();var d=a.cmpResolver.resolveComponentFactory(IntegralUITooltipComponent);d&&(a.cmpRef=b.createComponent(d),a.cmpRef&&(b=null,a.cmpRef._component?b=a.cmpRef._component:a.cmpRef._hostElement&&(b=a.cmpRef._hostElement.component),b&&(b.options=a.settings,b.updateMousePos(a.commonService.getMousePos(c)),c=this.elemRef.nativeElement.getBoundingClientRect(),b.open(c,a.size()),
a.eventList.push(b.closed.subscribe(function(b){a.closeTooltip()})))))}};IntegralUITooltip.prototype.onMouseLeave=function(c){this.closeTooltip()};IntegralUITooltip.prototype.onMouseMove=function(c){if(this.cmpRef)if(this.cmpRef._component){var a=this.cmpRef._component;a.updateMousePos(this.commonService.getMousePos(c))}else this.cmpRef&&this.cmpRef._hostElement&&(a=this.cmpRef._hostElement.component,a.updateMousePos(this.commonService.getMousePos(c)))};    return IntegralUITooltip;
}());
export { IntegralUITooltip };
IntegralUITooltip.decorators = [
    { type: Directive, args: [{
                selector: '[iuiTooltip]',
            },] },
];
/** @nocollapse */
IntegralUITooltip.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: ComponentFactoryResolver, },
    { type: IntegralUICommonService, },
]; };
IntegralUITooltip.propDecorators = {
    'settings': [{ type: Input, args: ['iuiTooltip',] },],
    'tooltipRef': [{ type: Input },],
    'onMouseEnter': [{ type: HostListener, args: ['mouseenter', ['$event'],] },],
    'onMouseLeave': [{ type: HostListener, args: ['mouseleave', ['$event'],] },],
    'onMouseMove': [{ type: HostListener, args: ['mousemove', ['$event'],] },],
};
//# sourceMappingURL=integralui.tooltip.js.map