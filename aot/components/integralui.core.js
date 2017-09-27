/*
  filename: integralui.core.js
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
import { Component, ContentChild, Directive, ElementRef, EventEmitter, Injectable, Input, Output, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { IntegralUICommonService } from '../services/integralui.common.service';
// ---------------------------------------------------------------------------------------
// IntegralUITemplate Directive
// ---------------------------------------------------------------------------------------
var IntegralUITemplate = (function () {
function IntegralUITemplate(){}IntegralUITemplate.prototype.getTemplate=function(){return this.template};    return IntegralUITemplate;
}());
export { IntegralUITemplate };
IntegralUITemplate.decorators = [
    { type: Directive, args: [{
                selector: '[iuiTemplate]'
            },] },
];
/** @nocollapse */
IntegralUITemplate.ctorParameters = function () { return []; };
IntegralUITemplate.propDecorators = {
    'settings': [{ type: Input, args: ['iuiTemplate',] },],
    'template': [{ type: ContentChild, args: [TemplateRef,] },],
};
// ---------------------------------------------------------------------------------------
// IntegralUITemplateOutlet Directive
// ---------------------------------------------------------------------------------------
var IntegralUITemplateOutlet = (function () {
function IntegralUITemplateOutlet(a){this.containerRef=a}IntegralUITemplateOutlet.prototype.ngOnChanges=function(a){this.removeView();this.createView()};IntegralUITemplateOutlet.prototype.ngOnDestroy=function(){this.removeView()};IntegralUITemplateOutlet.prototype.createView=function(){this.iuiTemplateOutlet&&(this.viewRef=this.containerRef.createEmbeddedView(this.iuiTemplateOutlet,this.iuiTemplateOutletContext))};IntegralUITemplateOutlet.prototype.removeView=function(){this.viewRef&&this.containerRef.remove(this.containerRef.indexOf(this.viewRef))};    return IntegralUITemplateOutlet;
}());
export { IntegralUITemplateOutlet };
IntegralUITemplateOutlet.decorators = [
    { type: Directive, args: [{
                selector: '[iuiTemplateOutlet]'
            },] },
];
/** @nocollapse */
IntegralUITemplateOutlet.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
IntegralUITemplateOutlet.propDecorators = {
    'iuiTemplateOutletContext': [{ type: Input },],
    'iuiTemplateOutlet': [{ type: Input },],
};
// ---------------------------------------------------------------------------------------
// Anchor Styles Enumeration
// ---------------------------------------------------------------------------------------
export var IntegralUIAnchorStyle;
(function (IntegralUIAnchorStyle) {
    IntegralUIAnchorStyle[IntegralUIAnchorStyle["None"] = 0] = "None";
    IntegralUIAnchorStyle[IntegralUIAnchorStyle["Top"] = 1] = "Top";
    IntegralUIAnchorStyle[IntegralUIAnchorStyle["Right"] = 2] = "Right";
    IntegralUIAnchorStyle[IntegralUIAnchorStyle["Bottom"] = 4] = "Bottom";
    IntegralUIAnchorStyle[IntegralUIAnchorStyle["Left"] = 8] = "Left";
})(IntegralUIAnchorStyle || (IntegralUIAnchorStyle = {}));
// ---------------------------------------------------------------------------------------
// Object State Enumeration
// ---------------------------------------------------------------------------------------
export var IntegralUIObjectState;
(function (IntegralUIObjectState) {
    IntegralUIObjectState[IntegralUIObjectState["normal"] = 0] = "normal";
    IntegralUIObjectState[IntegralUIObjectState["hovered"] = 1] = "hovered";
    IntegralUIObjectState[IntegralUIObjectState["selected"] = 2] = "selected";
    IntegralUIObjectState[IntegralUIObjectState["focused"] = 4] = "focused";
    IntegralUIObjectState[IntegralUIObjectState["disabled"] = 8] = "disabled";
})(IntegralUIObjectState || (IntegralUIObjectState = {}));
// ---------------------------------------------------------------------------------------
// Selection Mode Enumeration
// ---------------------------------------------------------------------------------------
export var IntegralUIOrientation;
(function (IntegralUIOrientation) {
    IntegralUIOrientation[IntegralUIOrientation["Horizontal"] = 0] = "Horizontal";
    IntegralUIOrientation[IntegralUIOrientation["Vertical"] = 1] = "Vertical";
})(IntegralUIOrientation || (IntegralUIOrientation = {}));
// ---------------------------------------------------------------------------------------
// Scroll Mode Enumeration
// ---------------------------------------------------------------------------------------
export var IntegralUIScrollMode;
(function (IntegralUIScrollMode) {
    IntegralUIScrollMode[IntegralUIScrollMode["Horizontal"] = 0] = "Horizontal";
    IntegralUIScrollMode[IntegralUIScrollMode["Vertical"] = 1] = "Vertical";
})(IntegralUIScrollMode || (IntegralUIScrollMode = {}));
// ---------------------------------------------------------------------------------------
// Selection Mode Enumeration
// ---------------------------------------------------------------------------------------
export var IntegralUISelectionMode;
(function (IntegralUISelectionMode) {
    IntegralUISelectionMode[IntegralUISelectionMode["None"] = 0] = "None";
    IntegralUISelectionMode[IntegralUISelectionMode["One"] = 1] = "One";
    IntegralUISelectionMode[IntegralUISelectionMode["MultiSimple"] = 2] = "MultiSimple";
    IntegralUISelectionMode[IntegralUISelectionMode["MultiExtended"] = 3] = "MultiExtended";
})(IntegralUISelectionMode || (IntegralUISelectionMode = {}));
// ---------------------------------------------------------------------------------------
// SortOrder Enumeration
// ---------------------------------------------------------------------------------------
export var IntegralUISortOrder;
(function (IntegralUISortOrder) {
    IntegralUISortOrder[IntegralUISortOrder["None"] = 0] = "None";
    IntegralUISortOrder[IntegralUISortOrder["Ascending"] = 1] = "Ascending";
    IntegralUISortOrder[IntegralUISortOrder["Descending"] = 2] = "Descending";
})(IntegralUISortOrder || (IntegralUISortOrder = {}));
// ---------------------------------------------------------------------------------------
// TabStripPlacement Enumeration
// ---------------------------------------------------------------------------------------
export var IntegralUITabStripPlacement;
(function (IntegralUITabStripPlacement) {
    IntegralUITabStripPlacement[IntegralUITabStripPlacement["Top"] = 0] = "Top";
    IntegralUITabStripPlacement[IntegralUITabStripPlacement["Right"] = 1] = "Right";
    IntegralUITabStripPlacement[IntegralUITabStripPlacement["Middle"] = 2] = "Middle";
    IntegralUITabStripPlacement[IntegralUITabStripPlacement["Bottom"] = 3] = "Bottom";
    IntegralUITabStripPlacement[IntegralUITabStripPlacement["Left"] = 4] = "Left";
})(IntegralUITabStripPlacement || (IntegralUITabStripPlacement = {}));
// ---------------------------------------------------------------------------------------
// Visibility Enumeration
// ---------------------------------------------------------------------------------------
export var IntegralUIVisibility;
(function (IntegralUIVisibility) {
    IntegralUIVisibility[IntegralUIVisibility["None"] = 0] = "None";
    IntegralUIVisibility[IntegralUIVisibility["Hover"] = 1] = "Hover";
    IntegralUIVisibility[IntegralUIVisibility["Click"] = 2] = "Click";
    IntegralUIVisibility[IntegralUIVisibility["Always"] = 3] = "Always";
})(IntegralUIVisibility || (IntegralUIVisibility = {}));
// ---------------------------------------------------------------------------------------
// Base Component
// ---------------------------------------------------------------------------------------
var IntegralUIBaseComponent = (function () {
function IntegralUIBaseComponent(a){this.commonService=a;this.ctrlState=IntegralUIObjectState.normal;this.options={};this.generalClassName="";this.defaultStyle={};this.ctrlClass=[];this.styleChanged=new EventEmitter;this.stateChanged=new EventEmitter;this.options={currentStyle:null}}
Object.defineProperty(IntegralUIBaseComponent.prototype,"state",{get:function(){return this.ctrlState},set:function(a){this.ctrlState!=a&&(this.ctrlState=a,this.updateControlClass(),this.processStateChanged(),this.stateChanged.emit(this))},enumerable:!0,configurable:!0});IntegralUIBaseComponent.prototype.ngOnInit=function(){this.generalClassName="iui-control";this.initStyle()};
IntegralUIBaseComponent.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"}};this.updateStyle(this.controlStyle);this.updateControlClass()};IntegralUIBaseComponent.prototype.processStateChanged=function(){};
IntegralUIBaseComponent.prototype.updateControlClass=function(){this.ctrlClass.length=0;this.ctrlClass.push(this.generalClassName);this.options.currentStyle&&(this.ctrlClass.push(this.options.currentStyle.general.normal),this.state&IntegralUIObjectState.disabled?this.ctrlClass.push(this.options.currentStyle.general.disabled):this.state&IntegralUIObjectState.focused?this.ctrlClass.push(this.options.currentStyle.general.focused):this.state&IntegralUIObjectState.selected?this.ctrlClass.push(this.options.currentStyle.general.selected):
this.state&IntegralUIObjectState.hovered&&this.ctrlClass.push(this.options.currentStyle.general.hovered))};IntegralUIBaseComponent.prototype.getControlClass=function(){return this.ctrlClass};IntegralUIBaseComponent.prototype.getDefaultStyle=function(){return{general:this.getDefaultGeneralStyle()}};
IntegralUIBaseComponent.prototype.getDefaultGeneralStyle=function(){return{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected}};
IntegralUIBaseComponent.prototype.getGeneralStyle=function(a){if(this.commonService){if(this.commonService.isString(a))return a;if(a)return{disabled:this.commonService.isFieldAvailable(a.disabled,this.generalClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.generalClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.generalClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.generalClassName),selected:this.commonService.isFieldAvailable(a.selected,
this.generalClassName+"-selected")}}return this.getDefaultGeneralStyle()};IntegralUIBaseComponent.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general)}:this.getDefaultStyle()};    return IntegralUIBaseComponent;
}());
export { IntegralUIBaseComponent };
IntegralUIBaseComponent.decorators = [
    { type: Component, args: [{
                selector: 'iui-base',
                template: ''
            },] },
];
/** @nocollapse */
IntegralUIBaseComponent.ctorParameters = function () { return [
    { type: IntegralUICommonService, },
]; };
IntegralUIBaseComponent.propDecorators = {
    'controlStyle': [{ type: Input },],
    'data': [{ type: Input },],
    'name': [{ type: Input },],
    'state': [{ type: Input },],
    'styleChanged': [{ type: Output },],
    'stateChanged': [{ type: Output },],
};
// ---------------------------------------------------------------------------------------
// Base Service
// ---------------------------------------------------------------------------------------
var IntegralUIBaseService = (function () {
function IntegralUIBaseService(){this.componentRef=null}IntegralUIBaseService.prototype.getComponent=function(){return this.componentRef};IntegralUIBaseService.prototype.setComponent=function(a){this.componentRef=a};    return IntegralUIBaseService;
}());
export { IntegralUIBaseService };
IntegralUIBaseService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
IntegralUIBaseService.ctorParameters = function () { return []; };
// ---------------------------------------------------------------------------------------
// Drag Window Component
// ---------------------------------------------------------------------------------------
var IntegralUIDragWindow = (function () {
function IntegralUIDragWindow(){this.iconClass="";this.position={x:0,y:0};this.size={width:0,height:0};this.title="";this.display="block"}IntegralUIDragWindow.prototype.updatePos=function(a){a&&(a["class"]&&(this.iconClass=a["class"]),this.position={x:a.left,y:a.top},a.text&&(this.title=a.text))};    return IntegralUIDragWindow;
}());
export { IntegralUIDragWindow };
IntegralUIDragWindow.decorators = [
    { type: Component, args: [{
                selector: 'iui-dragwin',
                template: "\n        <div class=\"iui-dragwin\" data-element=\"drag-window\" [ngStyle]=\"{ 'display': display, 'top': position.y + 'px', 'left': position.x + 'px' }\">\n            <span [ngClass]=\"iconClass\"></span>\n            <span class='iui-dragwin-title'>{{title}}</span>\n        </div>\n    "
            },] },
];
/** @nocollapse */
IntegralUIDragWindow.ctorParameters = function () { return []; };
IntegralUIDragWindow.propDecorators = {
    'iconClass': [{ type: Input },],
    'position': [{ type: Input },],
    'size': [{ type: Input },],
    'title': [{ type: Input },],
    'display': [{ type: Input },],
};
// ---------------------------------------------------------------------------------------
// Item Component
// ---------------------------------------------------------------------------------------
var IntegralUIItem = (function (_super) {
__extends(IntegralUIItem,_super);function IntegralUIItem(a,c){var b=_super.call(this,c)||this;b.elemRef=a;b.commonService=c;b.itemPos={top:0,left:0};b.positionType="static";b.contentClass=[];b.click=new EventEmitter;b.mouseDown=new EventEmitter;b.mouseUp=new EventEmitter;b.mouseEnter=new EventEmitter;b.mouseMove=new EventEmitter;b.mouseLeave=new EventEmitter;return b}
IntegralUIItem.prototype.ngOnInit=function(){this.generalClassName="iui-item";this.contentClassName=this.generalClassName+"-content";this.initStyle()};
IntegralUIItem.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},content:{disabled:this.contentClassName+"-disabled",focused:this.contentClassName+"-focused",normal:this.contentClassName,hovered:this.contentClassName+"-hovered",selected:this.contentClassName+"-selected"}};this.updateStyle(this.controlStyle);
this.updateControlClass();this.updateContentClass()};
IntegralUIItem.prototype.updateContentClass=function(){this.contentClass.length=0;this.contentClass.push(this.contentClassName);this.contentClass.push(this.options.currentStyle.content.normal);this.state&IntegralUIObjectState.disabled?this.contentClass.push(this.options.currentStyle.content.disabled):this.state&IntegralUIObjectState.focused?this.contentClass.push(this.options.currentStyle.content.focused):this.state&IntegralUIObjectState.selected?this.contentClass.push(this.options.currentStyle.content.selected):
this.state&IntegralUIObjectState.hovered&&this.contentClass.push(this.options.currentStyle.content.hovered)};IntegralUIItem.prototype.getContentClass=function(){return this.contentClass};
IntegralUIItem.prototype.getContentStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.contentClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.contentClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.contentClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.contentClassName),selected:this.commonService.isFieldAvailable(a.selected,this.contentClassName+
"-selected")}:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,hovered:this.defaultStyle.content.hovered,normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected}};
IntegralUIItem.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),content:this.getContentStyle(a.content)}:{general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},content:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,hovered:this.defaultStyle.content.hovered,
normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected}}};IntegralUIItem.prototype.processStateChanged=function(){this.updateContentClass()};IntegralUIItem.prototype.onClick=function(a){this.click.emit(a);a.stopPropagation()};IntegralUIItem.prototype.onMouseDown=function(a){this.mouseDown.emit(a);a.stopPropagation()};IntegralUIItem.prototype.onMouseUp=function(a){this.mouseUp.emit(a);a.stopPropagation()};
IntegralUIItem.prototype.onMouseEnter=function(a){this.state|=IntegralUIObjectState.hovered;this.mouseEnter.emit(a);a.stopPropagation()};IntegralUIItem.prototype.onMouseMove=function(a){this.mouseMove.emit(a);a.stopPropagation()};IntegralUIItem.prototype.onMouseLeave=function(a){this.state&=~IntegralUIObjectState.hovered;this.mouseLeave.emit(a);a.stopPropagation()};
IntegralUIItem.prototype.getContentSize=function(){var a={width:0,height:0};this.contentElem&&(a=this.commonService.getMargin(this.contentElem.nativeElement),a={width:this.contentElem.nativeElement.offsetWidth+(a.left+a.right),height:this.contentElem.nativeElement.offsetHeight+(a.top+a.bottom)/2});return a};IntegralUIItem.prototype.getIconStatus=function(){return this.icon?"inline-block":"none"};
IntegralUIItem.prototype.getMargin=function(){return this.elemRef?this.commonService.getMargin(this.elemRef.nativeElement.firstElementChild):{top:0,right:0,bottom:0,left:0}};IntegralUIItem.prototype.getPageRect=function(){var a={top:0,right:0,bottom:0,left:0};this.elemRef&&(a=this.commonService.getPageRect(this.elemRef.nativeElement.firstElementChild));return a};
IntegralUIItem.prototype.getSize=function(){var a={width:0,height:0};this.elemRef&&(a=this.commonService.getMargin(this.elemRef.nativeElement.firstElementChild),a={width:this.elemRef.nativeElement.firstElementChild.offsetWidth+(a.left+a.right),height:this.elemRef.nativeElement.firstElementChild.offsetHeight+(a.top+a.bottom)/2});return a};IntegralUIItem.prototype.resetPos=function(){this.updateLayout("static",{x:"auto",y:"auto"})};
IntegralUIItem.prototype.updateLayout=function(a,c){this.positionType=a;this.itemPos={top:c.y,left:c.x}};IntegralUIItem.prototype.updatePos=function(a){this.updateLayout("absolute",a)};    return IntegralUIItem;
}(IntegralUIBaseComponent));
export { IntegralUIItem };
IntegralUIItem.decorators = [
    { type: Component, args: [{
                selector: 'iui-item',
                template: "\n        <div [ngClass]=\"getControlClass()\" (click)=\"onClick($event)\" (mousedown)=\"onMouseDown($event)\" (mouseup)=\"onMouseUp($event)\" (mouseenter)=\"onMouseEnter($event)\" (mousemove)=\"onMouseMove($event)\" (mouseleave)=\"onMouseLeave($event)\" [ngStyle]=\"{ 'position': positionType, 'top': itemPos.top + 'px', 'left': itemPos.left + 'px' }\" #content>\n            <span *ngIf=\"icon\" class=\"iui-item-icon\" [ngClass]=\"icon\" [style.display]=\"getIconStatus()\"></span>\n            <span *ngIf=\"text\" class=\"iui-item-label\">{{text}}</span>\n            <ng-content></ng-content>\n        </div>\n    ",
                inputs: ['controlStyle', 'data', 'name', 'state'],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUIItem.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: IntegralUICommonService, },
]; };
IntegralUIItem.propDecorators = {
    'contentElem': [{ type: ViewChild, args: ['content', { read: ElementRef },] },],
    'icon': [{ type: Input },],
    'text': [{ type: Input },],
    'click': [{ type: Output },],
    'mouseDown': [{ type: Output },],
    'mouseUp': [{ type: Output },],
    'mouseEnter': [{ type: Output },],
    'mouseMove': [{ type: Output },],
    'mouseLeave': [{ type: Output },],
};
// ---------------------------------------------------------------------------------------
// Focus Directive
// ---------------------------------------------------------------------------------------
var IntegralUIFocus = (function () {
function IntegralUIFocus(a){this.elemRef=a;this.settings=!1}Object.defineProperty(IntegralUIFocus.prototype,"settings",{get:function(){return this.isFocused},set:function(a){if(this.isFocused!=a&&(this.isFocused=a))var b=this,c=setTimeout(function(){b.elemRef.nativeElement.focus();clearTimeout(c)},1)},enumerable:!0,configurable:!0});    return IntegralUIFocus;
}());
export { IntegralUIFocus };
IntegralUIFocus.decorators = [
    { type: Directive, args: [{
                selector: '[iuiFocus]'
            },] },
];
/** @nocollapse */
IntegralUIFocus.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
IntegralUIFocus.propDecorators = {
    'settings': [{ type: Input, args: ['iuiFocus',] },],
};
// ---------------------------------------------------------------------------------------
// Header Component
// ---------------------------------------------------------------------------------------
var IntegralUIHeaderItem = (function (_super) {
__extends(IntegralUIHeaderItem,_super);function IntegralUIHeaderItem(b,c){var a=_super.call(this,b,c)||this;a.elemRef=b;a.commonService=c;a.expandHorizontalClass=[];a.expandVerticalClass=[];a.expandArrowBottomLeftClass=[];a.expandArrowBottomRightClass=[];a.expandArrowVerticalClass=[];a.expandArrowTopLeftClass=[];a.expandArrowTopRightClass=[];a.animationType="";a.animationState="";a.expandClicked=new EventEmitter;return a}
IntegralUIHeaderItem.prototype.ngOnInit=function(){this.generalClassName="iui-header";this.expandBoxClassName=this.generalClassName+"expand-box";this.contentClassName=this.generalClassName+"-content";this.initStyle()};
IntegralUIHeaderItem.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},content:{disabled:this.contentClassName+"-disabled",focused:this.contentClassName+"-focused",normal:this.contentClassName,hovered:this.contentClassName+"-hovered",selected:this.contentClassName+"-selected"},expandBox:this.expandBoxClassName};
this.updateStyle(this.controlStyle);this.updateControlClass();this.updateContentClass()};
IntegralUIHeaderItem.prototype.getExpandVerticalClass=function(){this.expandVerticalClass.length=0;this.expandVerticalClass.push("iui-header-expand-box-vertical");this.state&IntegralUIObjectState.selected?this.expandVerticalClass.push("iui-header-expand-box-vertical-collapse"):this.expandVerticalClass.push("iui-header-expand-box-vertical-expand");this.options.currentStyle.expandBox&&this.expandVerticalClass.push(this.options.currentStyle.expandBox);return this.expandVerticalClass};
IntegralUIHeaderItem.prototype.getExpandHorizontalClass=function(){this.expandHorizontalClass.length=0;this.expandHorizontalClass.push("iui-header-expand-box-horizontal");this.state&IntegralUIObjectState.selected?this.expandHorizontalClass.push("iui-header-expand-box-horizontal-collapse"):this.expandHorizontalClass.push("iui-header-expand-box-horizontal-expand");this.options.currentStyle.expandBox&&this.expandHorizontalClass.push(this.options.currentStyle.expandBox);return this.expandHorizontalClass};
IntegralUIHeaderItem.prototype.getExpandArrowBottomLeftClass=function(){this.expandArrowBottomLeftClass.length=0;this.expandArrowBottomLeftClass.push("iui-header-expand-box-arrow-bottom-left");"expand"==this.animationState?this.expandArrowBottomLeftClass.push("iui-header-expand-box-arrow-bottom-left-collapse"):this.expandArrowBottomLeftClass.push("iui-header-expand-box-arrow-bottom-left-expand");this.options.currentStyle.expandBox&&this.expandArrowBottomLeftClass.push(this.options.currentStyle.expandBox);
return this.expandArrowBottomLeftClass};
IntegralUIHeaderItem.prototype.getExpandArrowBottomRightClass=function(){this.expandArrowBottomRightClass.length=0;this.expandArrowBottomRightClass.push("iui-header-expand-box-arrow-bottom-right");"expand"==this.animationState?this.expandArrowBottomRightClass.push("iui-header-expand-box-arrow-bottom-right-collapse"):this.expandArrowBottomRightClass.push("iui-header-expand-box-arrow-bottom-right-expand");this.options.currentStyle.expandBox&&this.expandArrowBottomRightClass.push(this.options.currentStyle.expandBox);return this.expandArrowBottomRightClass};
IntegralUIHeaderItem.prototype.getExpandArrowVerticalClass=function(){this.expandArrowVerticalClass.length=0;this.expandArrowVerticalClass.push("iui-header-expand-box-arrow-vertical");"expand"==this.animationState?this.expandArrowVerticalClass.push("iui-header-expand-box-arrow-vertical-collapse"):this.expandArrowVerticalClass.push("iui-header-expand-box-arrow-vertical-expand");this.options.currentStyle.expandBox&&this.expandArrowVerticalClass.push(this.options.currentStyle.expandBox);return this.expandArrowVerticalClass};
IntegralUIHeaderItem.prototype.getExpandArrowTopLeftClass=function(){this.expandArrowTopLeftClass.length=0;this.expandArrowTopLeftClass.push("iui-header-expand-box-arrow-top-left");"expand"==this.animationState?this.expandArrowTopLeftClass.push("iui-header-expand-box-arrow-top-left-expand"):this.expandArrowTopLeftClass.push("iui-header-expand-box-arrow-top-left-collapse");this.options.currentStyle.expandBox&&this.expandArrowTopLeftClass.push(this.options.currentStyle.expandBox);return this.expandArrowTopLeftClass};
IntegralUIHeaderItem.prototype.getExpandArrowTopRightClass=function(){this.expandArrowTopRightClass.length=0;this.expandArrowTopRightClass.push("iui-header-expand-box-arrow-top-right");"expand"==this.animationState?this.expandArrowTopRightClass.push("iui-header-expand-box-arrow-top-right-expand"):this.expandArrowTopRightClass.push("iui-header-expand-box-arrow-top-right-collapse");this.options.currentStyle.expandBox&&this.expandArrowTopRightClass.push(this.options.currentStyle.expandBox);return this.expandArrowTopRightClass};
IntegralUIHeaderItem.prototype.expandBoxClicked=function(b){1==b.buttons&&this.expandClicked.emit(null)};
IntegralUIHeaderItem.prototype.updateStyle=function(b){this.options.currentStyle=b?{general:this.getGeneralStyle(b.general),content:this.getContentStyle(b.content),expandBox:this.commonService.isFieldAvailable(b.expandBox,this.expandBoxClassName)}:{general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},content:{disabled:this.defaultStyle.content.disabled,
focused:this.defaultStyle.content.focused,hovered:this.defaultStyle.content.hovered,normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected},expandBox:this.defaultStyle.expandBox}};    return IntegralUIHeaderItem;
}(IntegralUIItem));
export { IntegralUIHeaderItem };
IntegralUIHeaderItem.decorators = [
    { type: Component, args: [{
                selector: 'iui-header',
                template: "\n        <div [ngClass]=\"getControlClass()\" (click)=\"onClick($event)\" (mousedown)=\"onMouseDown($event)\" (mouseup)=\"onMouseUp($event)\" (mouseenter)=\"onMouseEnter($event)\" (mousemove)=\"onMouseMove($event)\" (mouseleave)=\"onMouseLeave($event)\" #content>\n            <span *ngIf=\"icon\" class=\"iui-item-icon\" [ngClass]=\"icon\" [style.display]=\"getIconStatus()\"></span>\n            <span *ngIf=\"text\" class=\"iui-item-label\">{{text}}</span>\n            <div class=\"iui-header-expand-box\" [ngStyle]=\"{ display: animationType=='plus-minus' ? 'block' : 'none' }\" (mousedown)=\"expandBoxClicked($event)\">\n                <span class=\"iui-header-expand-box-vertical\" [ngClass]=\"getExpandVerticalClass()\"></span>\n                <span class=\"iui-header-expand-box-horizontal\" [ngClass]=\"getExpandHorizontalClass()\"></span>\n            </div>\n            <div class=\"iui-header-expand-box-arrow\" [ngStyle]=\"{ display: animationType=='arrow' ? 'block' : 'none' }\" (mousedown)=\"expandBoxClicked($event)\">\n                <span class=\"iui-header-expand-box-arrow-bottom-left\" [ngClass]=\"getExpandArrowBottomLeftClass()\"></span>\n                <span class=\"iui-header-expand-box-arrow-bottom-right\" [ngClass]=\"getExpandArrowBottomRightClass()\"></span>\n                <!-- <span class=\"iui-header-expand-box-arrow-vertical\" [ngClass]=\"getExpandArrowVerticalClass()\"></span> -->\n                <span class=\"iui-header-expand-box-arrow-top-left\" [ngClass]=\"getExpandArrowTopLeftClass()\"></span>\n                <span class=\"iui-header-expand-box-arrow-top-right\" [ngClass]=\"getExpandArrowTopRightClass()\"></span>\n            </div>\n            <ng-content></ng-content>\n        </div>\n    ",
                inputs: ['controlStyle', 'data', 'icon', 'name', 'state', 'text'],
                outputs: ['click', 'mouseDown', 'mouseEnter', 'mouseLeave', 'mouseMove', 'mouseUp'],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUIHeaderItem.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: IntegralUICommonService, },
]; };
IntegralUIHeaderItem.propDecorators = {
    'animationType': [{ type: Input },],
    'animationState': [{ type: Input },],
    'expandClicked': [{ type: Output },],
};
// ---------------------------------------------------------------------------------------
// Trial Component
// ---------------------------------------------------------------------------------------
var IntegralUITComponent = (function () {
function IntegralUITComponent(){this.tvData="";this.tvTimer=null;this.tvCycle=6E4;this.tvDefault="none"}IntegralUITComponent.prototype.crpar=function(){return["si","Tri","Ver","on","al "]};IntegralUITComponent.prototype.crtr=function(a){return a[1]+a[4]+a[2]+a[0]+a[3]};
IntegralUITComponent.prototype.ngOnInit=function(){var a=this;a.tvData=a.crtr(a.crpar());a.tvStyle=a.tvDefault;a.tvTimer=setInterval(function(){a.tvStyle="block";var b=setTimeout(function(){a.tvStyle=a.tvDefault;clearTimeout(b)},3E3)},a.tvCycle)};IntegralUITComponent.prototype.ngOnDestroy=function(){this.tvTimer&&clearInterval(this.tvTimer)};    return IntegralUITComponent;
}());
export { IntegralUITComponent };
IntegralUITComponent.decorators = [
    { type: Component, args: [{
                selector: 'iui-tc',
                template: "\n        <style>\n            .tr-cmp\n            {\n            \tbackground: white;\n            \tcolor: #c60d0d;\n            \tborder: thin solid black;\n            \tpadding: 5px;\n            \tposition: absolute;\n            \ttop: 0;\n            \tleft: 0;\n            \tz-index: 999;\n            }\n        </style>\n\t\t<div class=\"tr-cmp\" [ngStyle]=\"{ 'display': tvStyle }\">{{tvData}}</div>\n\t"
            },] },
];
/** @nocollapse */
IntegralUITComponent.ctorParameters = function () { return []; };
IntegralUITComponent.propDecorators = {
    'tvStyle': [{ type: Input },],
};
//# sourceMappingURL=integralui.core.js.map