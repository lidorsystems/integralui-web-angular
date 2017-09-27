/*
  filename: integralui.dropdown.js
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
import { Component, ComponentFactoryResolver, ContentChildren, Directive, ElementRef, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUITemplate } from '../components/integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
var IntegralUIDropDownComponent = (function (_super) {
__extends(IntegralUIDropDownComponent,_super);function IntegralUIDropDownComponent(a,c){var b=_super.call(this,c)||this;b.elemRef=a;b.commonService=c;b.showTimer=null;b.popupTimer=null;b.mousePos={x:0,y:0};b.dropdownDisplay="none";b.dropdownPos={top:0,left:0};b.dropdownSize={width:0,height:0};b.closed=new EventEmitter;b.updateOptions();return b}
Object.defineProperty(IntegralUIDropDownComponent.prototype,"options",{get:function(){return this.dropdownOptions},set:function(a){this.updateOptions(a)},enumerable:!0,configurable:!0});IntegralUIDropDownComponent.prototype.ngAfterContentInit=function(){var a=this,c=setTimeout(function(){a.elemRef.nativeElement.firstElementChild.focus();clearTimeout(c)},1)};IntegralUIDropDownComponent.prototype.ngOnDestroy=function(){};
IntegralUIDropDownComponent.prototype.updateAdjustment=function(a){return a?{top:this.commonService.isFieldAvailable(a.top,0),right:this.commonService.isFieldAvailable(a.right,0),bottom:this.commonService.isFieldAvailable(a.bottom,0),left:this.commonService.isFieldAvailable(a.left,0)}:{top:0,right:0,bottom:0,left:0}};
IntegralUIDropDownComponent.prototype.updateOptions=function(a){this.dropdownOptions=a?{adjustment:this.updateAdjustment(a.adjustment),autoClose:this.commonService.isFieldAvailable(a.autoClose,!0),autoPopDelay:this.commonService.isFieldAvailable(a.autoPopDelay,5E3),enabled:this.commonService.isFieldAvailable(a.enabled,!0),initialDelay:this.commonService.isFieldAvailable(a.initialDelay,500),position:this.commonService.isFieldAvailable(a.position,"mouse"),showMarker:this.commonService.isFieldAvailable(a.showMarker,
!0),title:this.commonService.isFieldAvailable(a.title,"")}:{adjustment:this.updateAdjustment(),autoClose:!0,autoPopDelay:5E3,enabled:!0,initialDelay:500,position:"mouse",showMarker:!0,title:""}};IntegralUIDropDownComponent.prototype.onBlur=function(a){0!=this.options.autoClose&&this.closed.emit(null)};IntegralUIDropDownComponent.prototype.onMouseDown=function(a){1==a.buttons&&this.closed.emit(null)};
IntegralUIDropDownComponent.prototype.removeTimers=function(){this.showTimer&&(clearTimeout(this.showTimer),this.showTimer=null);this.popupTimer&&(clearTimeout(this.popupTimer),this.popupTimer=null)};IntegralUIDropDownComponent.prototype.open=function(a,c){this.dropdownPos.top=-9999999;this.dropdownDisplay="block";this.dropdownSize=this.size();this.dropdownDisplay="none";this.removeTimers();this.dropdownOptions.enabled&&this.show(a,c)};
IntegralUIDropDownComponent.prototype.show=function(a,c){this.dropdownPos={top:this.mousePos.y+24,left:this.mousePos.x};var b=this.commonService.getShiftPos();switch(this.dropdownOptions.position){case "above":this.dropdownPos={top:a.top-4-this.dropdownSize.height,left:a.left+Math.floor((c.width-this.dropdownSize.width)/2)};break;case "left":this.dropdownPos={top:a.top+Math.floor((c.height-this.dropdownSize.height)/2),left:a.left-4-this.dropdownSize.width};break;case "right":this.dropdownPos={top:a.top+
Math.floor((c.height-this.dropdownSize.height)/2),left:a.right+4};break;default:this.dropdownPos={top:a.bottom+b.y+4+this.dropdownOptions.adjustment.top,left:a.left+b.x+this.dropdownOptions.adjustment.left}}this.dropdownDisplay="block"};IntegralUIDropDownComponent.prototype.size=function(){return{width:this.elemRef.nativeElement.firstElementChild.offsetWidth,height:this.elemRef.nativeElement.firstElementChild.offsetHeight}};
IntegralUIDropDownComponent.prototype.updateMousePos=function(a){this.mousePos!=a&&(this.mousePos=a)};
IntegralUIDropDownComponent.prototype.updateControlClass=function(){this.ctrlClass.length=0;this.ctrlClass.push("iui-dropdown");if(this.dropdownOptions.showMarker)switch(this.dropdownOptions.position){case "above":this.ctrlClass.push("iui-dropdown-marker-bottom");break;case "right":this.ctrlClass.push("iui-dropdown-marker-left");break;case "below":this.ctrlClass.push("iui-dropdown-marker-top");break;case "left":this.ctrlClass.push("iui-dropdown-marker-right")}};    return IntegralUIDropDownComponent;
}(IntegralUIBaseComponent));
export { IntegralUIDropDownComponent };
IntegralUIDropDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'iui-dropdown',
                template: "\n\t\t<div class=\"iui-dropdown\" [ngClass]=\"getControlClass()\" [ngStyle]=\"{ 'top': dropdownPos.top + 'px', 'left': dropdownPos.left + 'px' }\" (blur)=\"onBlur($event)\" (mousedown)=\"onMouseDown($event)\" tabindex=\"999\">\n\t\t\t<ng-template ngFor [ngForOf]=\"[templateObj.data]\" [ngForTemplate]=\"templateObj.template\"></ng-template>\n\t\t</div>\n\t",
                inputs: ['controlStyle', 'data', 'state'],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUIDropDownComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: IntegralUICommonService, },
]; };
IntegralUIDropDownComponent.propDecorators = {
    'options': [{ type: Input },],
    'closed': [{ type: Output },],
};
var IntegralUIDropDown = (function () {
function IntegralUIDropDown(b,a,c){this.elemRef=b;this.cmpResolver=a;this.commonService=c;this.eventList=[];this.templateData=[];this.cmpRef=null;this.templateList=[];this.dropDownOpen=new EventEmitter;this.dropDownClose=new EventEmitter}IntegralUIDropDown.prototype.ngAfterContentInit=function(){this.templateList=this.templates.toArray();for(var b=0;b<this.templateList.length;b++)if(this.templateList[b].settings)switch(this.templateList[b].settings.type){case "dropdown":this.templateData.push(this.templateList[b].getTemplate())}};
IntegralUIDropDown.prototype.closeDropDown=function(){this.cmpRef&&(this.eventList&&this.eventList.forEach(function(b){return b.unsubscribe()}),this.cmpRef.destroy());this.cmpRef=null;this.dropDownClose.emit(null)};IntegralUIDropDown.prototype.close=function(){this.closeDropDown()};IntegralUIDropDown.prototype.size=function(){return{width:this.elemRef.nativeElement.offsetWidth,height:this.elemRef.nativeElement.offsetHeight}};
IntegralUIDropDown.prototype.onMouseEnter=function(b){var a=this;if(1==b.which){var c=a.dropDownRef?a.dropDownRef:a.settings.appRef;if(c){a.closeDropDown();var d=a.cmpResolver.resolveComponentFactory(IntegralUIDropDownComponent);d&&(a.cmpRef=c.createComponent(d),a.cmpRef&&(c=null,a.cmpRef._component?c=a.cmpRef._component:a.cmpRef._hostElement&&(c=a.cmpRef._hostElement.component),c&&(c.options=a.settings,c.templateObj={data:a.settings.data,template:a.templateData[0]},c.updateMousePos(a.commonService.getMousePos(b)),
this.dropDownOpen.emit(null),d=this.elemRef.nativeElement.getBoundingClientRect(),c.open(d,a.size()),a.eventList.push(c.closed.subscribe(function(b){a.closeDropDown()})),b.stopPropagation())))}}};    return IntegralUIDropDown;
}());
export { IntegralUIDropDown };
IntegralUIDropDown.decorators = [
    { type: Directive, args: [{
                selector: '[iuiDropDown]',
            },] },
];
/** @nocollapse */
IntegralUIDropDown.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: ComponentFactoryResolver, },
    { type: IntegralUICommonService, },
]; };
IntegralUIDropDown.propDecorators = {
    'templates': [{ type: ContentChildren, args: [IntegralUITemplate,] },],
    'settings': [{ type: Input, args: ['iuiDropDown',] },],
    'dropDownRef': [{ type: Input },],
    'dropDownOpen': [{ type: Output },],
    'dropDownClose': [{ type: Output },],
    'onMouseEnter': [{ type: HostListener, args: ['mousedown', ['$event'],] },],
};
//# sourceMappingURL=integralui.dropdown.js.map