/*
  filename: integralui.tab.js
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
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIBaseService, IntegralUIObjectState } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
var IntegralUITab = (function (_super) {
__extends(IntegralUITab,_super);function IntegralUITab(a,c,d){var b=_super.call(this,c)||this;b.elemRef=a;b.commonService=c;b.baseService=d;b.parentCtrl=null;b.contentClass=[];b.isSelected=!1;b.topPos=0;b.leftPos=0;b.elemWidth="0";b.elemHeight="0";b.elemOrder=0;b.elemBorderColor="gray";b.selectedChanged=new EventEmitter;return b}
Object.defineProperty(IntegralUITab.prototype,"selected",{get:function(){return this.isSelected},set:function(a){this.isSelected!=a&&(this.state=a?this.state|IntegralUIObjectState.selected:this.state&~IntegralUIObjectState.selected,this.elemOrder=(this.isSelected=a)?2:0)},enumerable:!0,configurable:!0});
IntegralUITab.prototype.ngOnInit=function(){this.parentCtrl=this.baseService.getComponent();this.generalClassName="iui-tab";this.headerClassName=this.generalClassName+"-header";this.contentClassName=this.generalClassName+"-content";this.initStyle()};
IntegralUITab.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},header:{disabled:this.headerClassName+"-disabled",focused:this.headerClassName+"-focused",normal:this.headerClassName,hovered:this.headerClassName+"-hovered",selected:this.headerClassName+"-selected"},content:{disabled:this.contentClassName+
"-disabled",focused:this.contentClassName+"-focused",normal:this.contentClassName,hovered:this.contentClassName+"-hovered",selected:this.contentClassName+"-selected"}};this.updateStyle(this.controlStyle);this.updateControlClass();this.updateContentClass()};IntegralUITab.prototype.processStateChanged=function(){this.updateContentClass()};IntegralUITab.prototype.getSize=function(a){var c={width:0,height:0};a&&(c={width:a.offsetWidth,height:a.offsetHeight});return c};
IntegralUITab.prototype.updateLayout=function(a,c){this.topPos=a.top;this.leftPos=a.left;var d={top:0,right:0,bottom:0,left:0};this.contentElem&&(d=this.commonService.getPadding(this.contentElem.nativeElement));this.elemWidth=c.width-(d.left+d.right)+"px";this.elemHeight="auto"==c.height?"auto":c.height-(d.top+d.bottom)+"px"};
IntegralUITab.prototype.getLayoutParams=function(){var a={size:{width:0,height:0},padding:{top:0,right:0,bottom:0,left:0}};if(this.elemRef){var c=this.elemRef.nativeElement.children[0];a.size=this.getSize(c);a.padding=this.commonService.getPadding(c)}return a};
IntegralUITab.prototype.updateContentClass=function(){this.contentClass.length=0;this.contentClass.push(this.contentClassName);this.contentClass.push(this.options.currentStyle.content.normal);this.state&IntegralUIObjectState.disabled?this.contentClass.push(this.options.currentStyle.content.disabled):this.state&IntegralUIObjectState.focused?this.contentClass.push(this.options.currentStyle.content.focused):this.state&IntegralUIObjectState.selected?this.contentClass.push(this.options.currentStyle.content.selected):
this.state&IntegralUIObjectState.hovered&&this.contentClass.push(this.options.currentStyle.content.hovered)};IntegralUITab.prototype.getContentClass=function(){return this.contentClass};
IntegralUITab.prototype.getContentStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.contentClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.contentClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.contentClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.contentClassName),selected:this.commonService.isFieldAvailable(a.selected,this.contentClassName+
"-selected")}:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,hovered:this.defaultStyle.content.hovered,normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected}};
IntegralUITab.prototype.getHeaderClass=function(){var a=this.headerClassName;return a=this.state&IntegralUIObjectState.disabled?a+(" "+this.options.currentStyle.header.disabled):this.state&IntegralUIObjectState.focused?a+(" "+this.options.currentStyle.header.focused):this.state&IntegralUIObjectState.selected?a+(" "+this.options.currentStyle.header.selected):this.state&IntegralUIObjectState.hovered?a+(" "+this.options.currentStyle.header.hovered):a+(" "+this.options.currentStyle.header.normal)};
IntegralUITab.prototype.getHeaderStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.headerClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.headerClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.headerClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.headerClassName),selected:this.commonService.isFieldAvailable(a.selected,this.headerClassName+
"-selected")}:{disabled:this.defaultStyle.header.disabled,focused:this.defaultStyle.header.focused,hovered:this.defaultStyle.header.hovered,normal:this.defaultStyle.header.normal,selected:this.defaultStyle.header.selected}};
IntegralUITab.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),header:this.getHeaderStyle(a.header),content:this.getContentStyle(a.content)}:{general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},header:{disabled:this.defaultStyle.header.disabled,focused:this.defaultStyle.header.focused,
hovered:this.defaultStyle.header.hovered,normal:this.defaultStyle.header.normal,selected:this.defaultStyle.header.selected},content:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,hovered:this.defaultStyle.content.hovered,normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected}}};IntegralUITab.prototype.getCurrentTabStyle=function(){return this.options.currentStyle};
IntegralUITab.prototype.getTabContentClass=function(){var a="";this.selected&&(a+=" iui-tabstrip-tab-content-selected");return a};    return IntegralUITab;
}(IntegralUIBaseComponent));
export { IntegralUITab };
IntegralUITab.decorators = [
    { type: Component, args: [{
                selector: 'iui-tab',
                template: "\n\t\t<div [ngClass]=\"getContentClass()\" [ngStyle]=\"{ 'top': topPos + 'px', 'left': leftPos + 'px', 'width': elemWidth, 'height': elemHeight }\" [hidden]=\"selected==false\" #content>\n\t\t\t<div>\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t</div>\n\t",
                inputs: ['controlStyle', 'data', 'name', 'state'],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUITab.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: IntegralUICommonService, },
    { type: IntegralUIBaseService, },
]; };
IntegralUITab.propDecorators = {
    'contentElem': [{ type: ViewChild, args: ['content',] },],
    'text': [{ type: Input },],
    'icon': [{ type: Input },],
    'selected': [{ type: Input },],
    'selectedChanged': [{ type: Output },],
};
//# sourceMappingURL=integralui.tab.js.map