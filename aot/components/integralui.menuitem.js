/*
  filename: integralui.menuitem.js
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
import { Component, ContentChildren, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUIBaseService, IntegralUIItem, IntegralUIObjectState } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
var IntegralUIMenuItem = (function (_super) {
__extends(IntegralUIMenuItem,_super);
function IntegralUIMenuItem(a,e,c,d){var b=_super.call(this,e,c)||this;b.dataService=a;b.elemRef=e;b.commonService=c;b.baseService=d;b.contentAnimation={display:"none",left:0,width:0,height:0};b.eventList=[];b.expandState="none";b.isEnabled=!0;b.isItemHovered=!1;b.isInitialized=!1;b.blockPos={top:0,left:0};b.popupOrder=999;b.blockDisplay="none";b.blockElemWidth="0";b.blockElemHeight="0";b.blockOverflow="hidden";b.blockOpacity=0;b.pauseTimer=null;b.parentCtrl=null;b.parentItem=null;b.pause=300;return b}
Object.defineProperty(IntegralUIMenuItem.prototype,"enabled",{get:function(){return this.isEnabled},set:function(a){this.isEnabled!=a&&(this.isEnabled=a,this.isInitialized&&(this.state=a?this.state&~IntegralUIObjectState.disabled:this.state|IntegralUIObjectState.disabled))},enumerable:!0,configurable:!0});
Object.defineProperty(IntegralUIMenuItem.prototype,"expanded",{get:function(){return this.isExpanded},set:function(a){this.isExpanded!=a&&0!=this.enabled&&(this.expandState=a?"expand":"collapse",this.isExpanded=a,this.toggleContent())},enumerable:!0,configurable:!0});
IntegralUIMenuItem.prototype.ngOnInit=function(){this.parentCtrl=this.baseService.getComponent();this.dataService.init([{data:this.items}]);this.isExpanded=this.data&&void 0!=this.data.expanded?this.data.expanded:!1;this.blockElemHeight="0";this.generalClassName=this.data&&!this.data.pid?"iui-menuitem-root":"iui-menuitem";this.blockClassName="iui-menuitem-block";this.contentClassName=this.generalClassName+"-content";this.expandBoxClassName="iui-menu-marker-expand";this.expandBoxSpaceClassName=this.expandBoxClassName+
"-space";this.separatorClassName=this.generalClassName+"-separator";this.initStyle();this.isInitialized=!0;this.state=(this.isEnabled=this.data&&0!=this.data.enabled?!0:!1)?this.state&~IntegralUIObjectState.disabled:this.state|IntegralUIObjectState.disabled};
IntegralUIMenuItem.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},expandBox:{general:this.expandBoxClassName,animated:this.expandBoxClassName+"-load",expanded:this.expandBoxClassName+"-open",collapsed:this.expandBoxClassName+"-close"},content:{disabled:this.contentClassName+"-disabled",focused:this.contentClassName+
"-focused",normal:this.contentClassName,hovered:this.contentClassName+"-hovered",selected:this.contentClassName+"-selected"},separator:this.separatorClassName};this.updateStyle(this.controlStyle);this.updateControlClass()};IntegralUIMenuItem.prototype.ngOnDestroy=function(){};IntegralUIMenuItem.prototype.ngAfterContentInit=function(){this.updateLayout()};IntegralUIMenuItem.prototype.collapse=function(){this.expanded=!1};IntegralUIMenuItem.prototype.expand=function(){this.expanded=!0};
IntegralUIMenuItem.prototype.toggle=function(){this.expanded=!this.expanded};IntegralUIMenuItem.prototype.onExpandBoxMouseDown=function(a){this.toggle()};IntegralUIMenuItem.prototype.getDataType=function(){return this.data&&this.data.type?this.data.type:"item"};IntegralUIMenuItem.prototype.isThereChildren=function(){return this.items&&0<this.items.length};IntegralUIMenuItem.prototype.isBlockVisible=function(){return this.isItemHovered&&this.isThereChildren()};
IntegralUIMenuItem.prototype.updateLayout=function(){var a=this,e=setTimeout(function(){a.data&&(a.data.pid?a.elemRef.nativeElement.parentElement&&(a.blockPos={top:-3,left:a.elemRef.nativeElement.parentElement.offsetLeft+a.elemRef.nativeElement.parentElement.offsetWidth-3}):a.elemRef.nativeElement.parentElement&&(a.blockPos={top:a.elemRef.nativeElement.parentElement.offsetHeight-8,left:-1}));clearTimeout(e)},1)};
IntegralUIMenuItem.prototype.onMouseDown=function(a){0!=this.enabled&&(1==a.buttons&&this.parentCtrl&&this.parentCtrl.invokeMethod("ITEM_CLICK",{event:a,cmp:this}),this.mouseDown.emit(a));a.stopPropagation()};IntegralUIMenuItem.prototype.onMouseEnter=function(a){0!=this.enabled&&(this.state|=IntegralUIObjectState.hovered,this.isItemHovered=!0,this.updateLayout(),this.expand(),this.mouseEnter.emit(a));a.stopPropagation()};
IntegralUIMenuItem.prototype.onMouseLeave=function(a){0!=this.enabled&&(this.state&=~IntegralUIObjectState.hovered,this.removePauseTimer(),this.isItemHovered=!1,this.collapse(),this.mouseLeave.emit(a));a.stopPropagation()};IntegralUIMenuItem.prototype.onContextMenu=function(a){a.preventDefault();a.stopPropagation()};IntegralUIMenuItem.prototype.removePauseTimer=function(){this.pauseTimer&&clearTimeout(this.pauseTimer)};
IntegralUIMenuItem.prototype.toggleContent=function(){var a=this;if(a.items){var e=a.elemRef.nativeElement.firstElementChild.offsetHeight/2*a.items.length,c=0,d=0;if(a.expanded)a.removePauseTimer(),a.pauseTimer=setTimeout(function(){if(a.pauseTimer){a.blockDisplay="block";var b=setInterval(function(){c<e?(d=0==d?1:d+2,c+=d,a.blockElemHeight=c+"px",a.blockOpacity=c/e):(a.blockElemHeight="auto",a.blockOverflow="visible",a.blockOpacity=1,a.expandState="none",clearInterval(b))},25)}a.removePauseTimer()},
300);else{a.blockOverflow="hidden";a.blockElem&&(c=a.blockElem.nativeElement.offsetHeight);var b=setInterval(function(){0<c?(d=0==d?1:d+2,c-=d,a.blockElemHeight=c+"px",a.blockOpacity=c/e):(a.blockDisplay="none",a.blockElemHeight="0",a.blockOpacity=0,a.expandState="none",clearInterval(b))},25)}}};
IntegralUIMenuItem.prototype.getItemDisplay=function(){return void 0!=this.data.pid?this.orientation?"vertical"==this.orientation?"block":"inline-block":"block":this.orientation?"vertical"==this.orientation?"block":"inline-block":"inline-block"};
IntegralUIMenuItem.prototype.updateControlClass=function(){this.ctrlClass.length=0;this.ctrlClass.push(this.generalClassName);if("separator"==this.getDataType())this.ctrlClass.push(this.getSeparatorClass());else if(this.ctrlClass.push(this.options.currentStyle.general.normal),this.state&IntegralUIObjectState.disabled?this.ctrlClass.push(this.options.currentStyle.general.disabled):this.state&IntegralUIObjectState.focused?this.ctrlClass.push(this.options.currentStyle.general.focused):this.state&IntegralUIObjectState.selected?
this.ctrlClass.push(this.options.currentStyle.general.selected):this.state&IntegralUIObjectState.hovered&&this.ctrlClass.push(this.options.currentStyle.general.hovered),this.isThereChildren()){var a=this.getExpandBoxClass();a=this.data.pid?a+"-right":a+"-down";this.ctrlClass.push(a);this.ctrlClass.push(this.getExpandBoxSpaceClass())}};IntegralUIMenuItem.prototype.getExpandBoxSpaceClass=function(){var a="";this.isThereChildren()&&(a=this.expandBoxSpaceClassName);return a};
IntegralUIMenuItem.prototype.getSeparatorClass=function(){return this.options.currentStyle.separator};IntegralUIMenuItem.prototype.getBlockClass=function(){var a=this.blockClassName;this.isThereChildren()&&(a=0!=this.expanded?a+(" "+this.blockClassName+"-open"):a+(" "+this.blockClassName+"-close"));return a};IntegralUIMenuItem.prototype.getGeneralClass=function(){return this.generalClassName};
IntegralUIMenuItem.prototype.getExpandBoxClass=function(){var a="";this.isThereChildren()&&(a+=" "+this.options.currentStyle.expandBox.general);return a};
IntegralUIMenuItem.prototype.getExpandBoxStyle=function(a){return this.commonService.isString(a)?a:a?{general:this.commonService.isFieldAvailable(a.general,this.expandBoxClassName),animated:this.commonService.isFieldAvailable(a.animated,this.expandBoxClassName+"-load"),expanded:this.commonService.isFieldAvailable(a.expanded,this.expandBoxClassName+"-open"),collapsed:this.commonService.isFieldAvailable(a.collapsed,this.expandBoxClassName+"-close")}:{general:this.defaultStyle.expandBox.general,animated:this.defaultStyle.expandBox.animated,
expanded:this.defaultStyle.expandBox.expanded,collapsed:this.defaultStyle.expandBox.collapsed}};
IntegralUIMenuItem.prototype.updateStyle=function(a){this.options.currentStyle=a?{content:this.getContentStyle(a.content),expandBox:this.getExpandBoxStyle(a.expandBox),general:this.getGeneralStyle(a.general),separator:this.commonService.isFieldAvailable(a.separator,this.separatorClassName)}:{content:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,hovered:this.defaultStyle.content.hovered,normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected},
expandBox:{general:this.defaultStyle.expandBox.general,animated:this.defaultStyle.expandBox.animated,expanded:this.defaultStyle.expandBox.expanded,collapsed:this.defaultStyle.expandBox.collapsed},general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},separator:this.defaultStyle.separator}};    return IntegralUIMenuItem;
}(IntegralUIItem));
export { IntegralUIMenuItem };
IntegralUIMenuItem.decorators = [
    { type: Component, args: [{
                selector: 'iui-menuitem',
                template: "\n        <li [ngClass]=\"getControlClass()\" (click)=\"onClick($event)\" (mousedown)=\"onMouseDown($event)\" (mouseup)=\"onMouseUp($event)\" (mouseenter)=\"onMouseEnter($event)\" (mousemove)=\"onMouseMove($event)\" (mouseleave)=\"onMouseLeave($event)\" (contextmenu)=\"onContextMenu($event)\" [ngStyle]=\"{ 'display': getItemDisplay() }\">\n            <div *ngIf=\"getDataType()=='item'\">\n                <div #content>\n                    <span *ngIf=\"icon\" class=\"iui-item-icon\" [ngClass]=\"icon\" [style.display]=\"getIconStatus()\"></span>\n                    <span *ngIf=\"text\" class=\"iui-item-label\">{{text}}</span>\n                </div>\n                <!-- <ul *ngIf=\"isBlockVisible()\" #block class=\"iui-menuitem-block\" [ngStyle]=\"{'top': blockPos.top, 'left': blockPos.left, 'height': blockElemHeight }\">\n                <ul #block class=\"iui-menuitem-block\" [ngStyle]=\"{ 'display': blockDisplay, 'top': blockPos.top, 'left': blockPos.left, 'width': blockElemWidth, 'height': blockElemHeight, 'overflow': blockOverflow, 'opacity2': blockOpacity }\"> -->\n                <ul #block class=\"iui-menuitem-block\" [ngStyle]=\"{ 'display': blockDisplay, 'top': blockPos.top + 'px', 'left': blockPos.left + 'px', 'height': blockElemHeight, 'overflow': blockOverflow, 'opacity': blockOpacity }\">\n                    <ng-content></ng-content>\n                </ul>\n            </div>\n            <hr *ngIf=\"getDataType()=='separator'\" />\n        </li>\n    ",
                inputs: ['controlStyle', 'data', 'icon', 'name', 'state', 'text'],
                outputs: ['click', 'mouseDown', 'mouseEnter', 'mouseLeave', 'mouseMove', 'mouseUp'],
                providers: [IntegralUIDataService],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUIMenuItem.ctorParameters = function () { return [
    { type: IntegralUIDataService, },
    { type: ElementRef, },
    { type: IntegralUICommonService, },
    { type: IntegralUIBaseService, },
]; };
IntegralUIMenuItem.propDecorators = {
    'blockElem': [{ type: ViewChild, args: ['block', { read: ElementRef },] },],
    'contentElem': [{ type: ViewChild, args: ['content', { read: ElementRef },] },],
    'contentList': [{ type: ContentChildren, args: [IntegralUIMenuItem,] },],
    'items': [{ type: Input },],
    'orientation': [{ type: Input },],
    'pause': [{ type: Input },],
    'enabled': [{ type: Input },],
    'expanded': [{ type: Input },],
};
//# sourceMappingURL=integralui.menuitem.js.map