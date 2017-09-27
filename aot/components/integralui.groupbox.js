/*
  filename: integralui.groupbox.js
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
import { Component, ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Input, Output, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService, IntegralUIObjectState } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
var IntegralUIGroupBoxTags = (function () {
    function IntegralUIGroupBoxTags() {
    }
    return IntegralUIGroupBoxTags;
}());
export { IntegralUIGroupBoxTags };
IntegralUIGroupBoxTags.decorators = [
    { type: Directive, args: [{ selector: 'iui-group-header' },] },
];
/** @nocollapse */
IntegralUIGroupBoxTags.ctorParameters = function () { return []; };
var IntegralUIGroupBox = (function (_super) {
__extends(IntegralUIGroupBox,_super);
function IntegralUIGroupBox(a,b,d){var c=_super.call(this,a)||this;c.commonService=a;c.cmpResolver=b;c.baseService=d;c.expandState="none";c.isExpanded=!1;c.isSelected=!1;c.supressCallback=!1;c.contentHeight="0";c.contentDisplay="block";c.contentOpacity=1;c.maxBlockHeight=0;c.parentCtrl=null;c.contentClassName="";c.headerClassName="";c.headerExpandBoxClassName="";c.contentClass=[];c.headerBlockClass=[];c.afterCollapse=new EventEmitter;c.afterExpand=new EventEmitter;c.afterSelect=new EventEmitter;c.beforeCollapse=
new EventEmitter;c.beforeExpand=new EventEmitter;c.beforeSelect=new EventEmitter;c.selectedChanged=new EventEmitter;return c}
Object.defineProperty(IntegralUIGroupBox.prototype,"expanded",{get:function(){return this.isExpanded},set:function(a){if(this.isExpanded!=a){var b=this;if(b.callBeforeEvent(a)){b.expandState=a?"expand":"collapse";var d=setTimeout(function(){"collapse"==b.expandState&&(b.expandState="none");clearTimeout(d)},300);b.isExpanded=a;b.header.animationState=b.isExpanded?"expand":"collapse";b.updateContentClass();b.toggleContent()}}},enumerable:!0,configurable:!0});
Object.defineProperty(IntegralUIGroupBox.prototype,"selected",{get:function(){return this.isSelected},set:function(a){if(this.isSelected!=a){var b={cancel:!1,group:this.data};this.beforeSelect.emit(b);1!=b.cancel&&(this.isSelected=a,this.header&&(this.header.state=a?this.header.state|IntegralUIObjectState.selected:this.header.state&~IntegralUIObjectState.selected),this.afterSelect.emit({group:this.data}),this.selectedChanged.emit({group:this.data}),this.updateHeaderBlockClass())}},enumerable:!0,configurable:!0});
IntegralUIGroupBox.prototype.callBeforeEvent=function(a){var b=!0;this.parentCtrl&&this.parentCtrl.invokeEvent&&(b=this.parentCtrl.invokeEvent(a?"BEFORE_EXPAND":"BEFORE_COLLAPSE",this));b&&(b={cancel:!1,group:this.data},a?this.beforeExpand.emit(b):this.beforeCollapse.emit(b),b=!b.cancel);return b};
IntegralUIGroupBox.prototype.callAfterEvent=function(a){var b={group:this.data};a?this.afterExpand.emit(b):this.afterCollapse.emit(b);this.parentCtrl&&this.parentCtrl.invokeEvent&&this.parentCtrl.invokeEvent(a?"AFTER_EXPAND":"AFTER_COLLAPSE",this);return!0};
IntegralUIGroupBox.prototype.ngOnInit=function(){this.parentCtrl=this.baseService.getComponent();this.generalClassName="iui-groupbox";this.headerClassName=this.generalClassName+"-header";this.headerExpandBoxClassName=this.headerClassName+"-expand-box";this.contentClassName=this.generalClassName+"-content";this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+
"-selected"},header:{general:{disabled:this.headerClassName+"-disabled",focused:this.headerClassName+"-focused",normal:this.headerClassName,hovered:this.headerClassName+"-hovered",selected:this.headerClassName+"-selected"},expandBox:this.headerExpandBoxClassName},content:{general:this.contentClassName,expanded:this.contentClassName+"-expand",collapsed:this.contentClassName+"-collapse"}};this.updateStyle(this.controlStyle);this.updateControlClass();this.updateContentClass();this.updateHeaderBlockClass()};
IntegralUIGroupBox.prototype.ngAfterContentInit=function(){var a=this,b=setTimeout(function(){if(a.contentElem){var d=a.contentElem.nativeElement.firstElementChild.cloneNode(!0);d.style.position="absolute";d.style.top="-9999999px";a.controlElem.nativeElement.append(d);a.maxBlockHeight=d.offsetHeight;d.remove()}clearTimeout(b)},100)};IntegralUIGroupBox.prototype.ngOnDestroy=function(){};
IntegralUIGroupBox.prototype.onHeaderClick=function(a){1==a.buttons&&(this.parentCtrl&&this.parentCtrl.invokeMethod?this.parentCtrl.invokeMethod("SELECT_GROUP",this):(this.selected=!this.selected,this.expanded=!this.expanded))};IntegralUIGroupBox.prototype.collapse=function(){this.parentCtrl||(this.expanded=!1)};IntegralUIGroupBox.prototype.expand=function(){this.expanded=!0};IntegralUIGroupBox.prototype.toggle=function(){this.expanded=!this.expanded};
IntegralUIGroupBox.prototype.toggleContent=function(){if(this.parentCtrl&&this.parentCtrl.invokeMethod)this.expanded?this.parentCtrl.invokeMethod("TOGGLE_GROUPS",this):this.parentCtrl.invokeMethod("COLLAPSE_GROUP",this);else{var a=this,b=0,d=0;if(a.expanded){a.contentDisplay="block";var c=setInterval(function(){b<a.maxBlockHeight?(d=0==d?1:d+2,b+=d,a.contentHeight=b+"px"):(a.contentHeight="auto",a.expandState="none",a.callAfterEvent(!0),a.supressCallback=!1,clearInterval(c))},25)}else{a.maxBlockHeight=
a.contentElem.nativeElement.offsetHeight;b=a.maxBlockHeight;var e=setInterval(function(){0<b?(d=0==d?1:d+2,b-=d,a.contentHeight=b+"px"):(a.contentDisplay="none",a.contentHeight="0",a.expandState="none",a.callAfterEvent(),a.supressCallback=!1,clearInterval(e))},25)}}};IntegralUIGroupBox.prototype.getContentHeight=function(){return this.maxBlockHeight};IntegralUIGroupBox.prototype.setContentHeight=function(a){this.contentHeight=a};
IntegralUIGroupBox.prototype.updateContentClass=function(){this.contentClass.length=0;this.contentClass.push(this.options.currentStyle.content.general);0!=this.expanded?"expand"==this.expandState&&this.contentClass.push(this.options.currentStyle.content.expanded):"collapse"==this.expandState&&this.contentClass.push(this.options.currentStyle.content.collapsed)};IntegralUIGroupBox.prototype.getContentClass=function(){return this.contentClass};
IntegralUIGroupBox.prototype.getContentStyle=function(a){return this.commonService.isString(a)?a:a?{general:this.commonService.isFieldAvailable(a.general,this.contentClassName),expanded:this.commonService.isFieldAvailable(a.expanded,this.contentClassName+"-expand"),collapsed:this.commonService.isFieldAvailable(a.collapsed,this.contentClassName+"-collapse")}:{general:this.defaultStyle.content.general,expanded:this.defaultStyle.content.expanded,collapsed:this.defaultStyle.content.collapsed}};
IntegralUIGroupBox.prototype.updateHeaderBlockClass=function(){this.headerBlockClass.length=0;this.headerBlockClass.push("iui-groupbox-header-block");this.selected&&this.headerBlockClass.push("iui-groupbox-header-marker-down")};IntegralUIGroupBox.prototype.getHeaderBlockClass=function(){return this.headerBlockClass};
IntegralUIGroupBox.prototype.getHeaderClass=function(){var a=this.headerClassName;return a=this.state&IntegralUIObjectState.disabled?a+(" "+this.options.currentStyle.header.disabled):this.state&IntegralUIObjectState.focused?a+(" "+this.options.currentStyle.header.focused):this.state&IntegralUIObjectState.selected?a+(" "+this.options.currentStyle.header.selected):this.state&IntegralUIObjectState.hovered?a+(" "+this.options.currentStyle.header.hovered):a+(" "+this.options.currentStyle.header.normal)};
IntegralUIGroupBox.prototype.getHeaderGeneralStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.hovered,this.headerClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.hovered,this.headerClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.headerClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.headerClassName),selected:this.commonService.isFieldAvailable(a.selected,this.headerClassName+
"-selected")}:{disabled:this.defaultStyle.header.general.disabled,focused:this.defaultStyle.header.general.focused,hovered:this.defaultStyle.header.general.hovered,normal:this.defaultStyle.header.general.normal,selected:this.defaultStyle.header.general.selected}};
IntegralUIGroupBox.prototype.getHeaderStyle=function(a){return a?{general:this.getHeaderGeneralStyle(a.general),expandBox:this.commonService.isFieldAvailable(a.expandBox,this.headerExpandBoxClassName)}:{general:{disabled:this.defaultStyle.header.general.disabled,focused:this.defaultStyle.header.general.focused,hovered:this.defaultStyle.header.general.hovered,normal:this.defaultStyle.header.general.normal,selected:this.defaultStyle.header.general.selected},expandBox:this.defaultStyle.header.expandBox}};
IntegralUIGroupBox.prototype.getCurrentHeaderStyle=function(){return this.options.currentStyle.header};IntegralUIGroupBox.prototype.setOpacity=function(a){this.contentOpacity=a};
IntegralUIGroupBox.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),header:this.getHeaderStyle(a.header),content:this.getContentStyle(a.content)}:{general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},header:{general:{disabled:this.defaultStyle.header.general.disabled,focused:this.defaultStyle.header.general.focused,
hovered:this.defaultStyle.header.general.hovered,normal:this.defaultStyle.header.general.normal,selected:this.defaultStyle.header.general.selected},expandBox:this.defaultStyle.header.expandBox},content:{general:this.defaultStyle.content.general,expanded:this.defaultStyle.content.expanded,collapsed:this.defaultStyle.content.collapsed}}};    return IntegralUIGroupBox;
}(IntegralUIBaseComponent));
export { IntegralUIGroupBox };
IntegralUIGroupBox.decorators = [
    { type: Component, args: [{
                selector: 'iui-groupbox',
                template: "\n\t\t<div [ngClass]=\"getControlClass()\" #control>\n\t\t\t<div [ngClass]=\"getHeaderBlockClass()\" >\n\t\t\t\t<iui-header [controlStyle]=\"getCurrentHeaderStyle()\" [icon]=\"icon\" [text]=\"text\" (mouseDown)=\"onHeaderClick($event)\" [animationType]=\"expandBoxType\" #header>\n\t\t\t\t\t<ng-content select=\"iui-group-header\"></ng-content>\n\t\t\t\t</iui-header>\n\t\t\t</div>\n\t\t\t<div [ngClass]=\"getContentClass()\" [ngStyle]=\"{ 'display': contentDisplay, 'height': contentHeight, 'opacity': contentOpacity }\" #content>\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t</div>\n    ",
                inputs: ['controlStyle', 'data', 'name', 'state'],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUIGroupBox.ctorParameters = function () { return [
    { type: IntegralUICommonService, },
    { type: ComponentFactoryResolver, },
    { type: IntegralUIBaseService, },
]; };
IntegralUIGroupBox.propDecorators = {
    'controlElem': [{ type: ViewChild, args: ['control', { read: ElementRef },] },],
    'contentRef': [{ type: ViewChild, args: ['content', { read: ViewContainerRef },] },],
    'contentElem': [{ type: ViewChild, args: ['content', { read: ElementRef },] },],
    'header': [{ type: ViewChild, args: ['header',] },],
    'text': [{ type: Input },],
    'icon': [{ type: Input },],
    'expandBoxType': [{ type: Input },],
    'expanded': [{ type: Input },],
    'selected': [{ type: Input },],
    'afterCollapse': [{ type: Output },],
    'afterExpand': [{ type: Output },],
    'afterSelect': [{ type: Output },],
    'beforeCollapse': [{ type: Output },],
    'beforeExpand': [{ type: Output },],
    'beforeSelect': [{ type: Output },],
    'selectedChanged': [{ type: Output },],
};
//# sourceMappingURL=integralui.groupbox.js.map