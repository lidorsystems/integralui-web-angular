/*
  filename: integralui.combobox.js
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
import { Component, ComponentFactoryResolver, ContentChildren, ElementRef, EventEmitter, Input, Output, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIItem, IntegralUIObjectState, IntegralUITComponent } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
var IntegralUIComboBox = (function (_super) {
__extends(IntegralUIComboBox,_super);
function IntegralUIComboBox(a,c){var b=_super.call(this,a)||this;b.commonService=a;b.cmpResolver=c;b.eventList=[];b.expandState="none";b.initStatus=!0;b.isExpanded=!1;b.isSelected=!1;b.supressCallback=!1;b.contentBorder="0px";b.contentHeight="0";b.contentDisplay="block";b.contentOpacity=1;b.contentOverflowY="hidden";b.listSize={width:0,height:0};b.maxBlockHeight=0;b.itemSizeList=[];b.contentClassName="";b.headerClassName="";b.headerExpandBoxClassName="";b.itemGeneralClassName="";b.itemContentClassName=
"";b.contentClass=[];b.trialRef=null;b.click=new EventEmitter;b.dropDownClosed=new EventEmitter;b.dropDownClosing=new EventEmitter;b.dropDownOpened=new EventEmitter;b.dropDownOpening=new EventEmitter;b.selectedItemChanged=new EventEmitter;b.selectedIndexChanged=new EventEmitter;b.itemList=[];b.integralHeight=!1;b.maxDropDownItems=5;b.listSize={width:0,height:0};b.itemSizeList=[];return b}
Object.defineProperty(IntegralUIComboBox.prototype,"dropDownWidth",{get:function(){return this.listSize.width},set:function(a){this.listSize.width!=a&&(!this.comboWidth||a>=this.comboWidth?this.listSize.width=a:this.comboWidth&&(this.listSize.width=this.comboWidth))},enumerable:!0,configurable:!0});
Object.defineProperty(IntegralUIComboBox.prototype,"expanded",{get:function(){return this.isExpanded},set:function(a){if(this.isExpanded!=a){var c=this;if(c.callBeforeEvent(a)){c.expandState=a?"expand":"collapse";var b=setTimeout(function(){"collapse"==c.expandState&&(c.expandState="none");clearTimeout(b)},300);c.isExpanded=a;c.header.state=a?c.header.state|IntegralUIObjectState.selected:c.header.state&~IntegralUIObjectState.selected;c.header.animationState=c.isExpanded?"expand":"collapse";c.updateContentClass();
c.toggleContent()}}},enumerable:!0,configurable:!0});Object.defineProperty(IntegralUIComboBox.prototype,"selectedIndex",{get:function(){return this.currentIndex},set:function(a){this.updateSelection(a)},enumerable:!0,configurable:!0});Object.defineProperty(IntegralUIComboBox.prototype,"selectedItem",{get:function(){return this.currentSelection},set:function(a){this.currentSelection!=a&&(a=this.items?this.items.indexOf(a):-1,this.updateSelection(a))},enumerable:!0,configurable:!0});
IntegralUIComboBox.prototype.ngOnInit=function(){this.generalClassName="iui-combobox";this.headerClassName=this.generalClassName+"-header";this.headerExpandBoxClassName=this.headerClassName+"-expand-box";this.contentClassName=this.generalClassName+"-dropdown";this.itemGeneralClassName=this.generalClassName+"-item";this.itemContentClassName=this.itemGeneralClassName+"-content";this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,
hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},header:{general:{disabled:this.headerClassName+"-disabled",focused:this.headerClassName+"-focused",normal:this.headerClassName,hovered:this.headerClassName+"-hovered",selected:this.headerClassName+"-selected"},expandBox:this.headerExpandBoxClassName},content:{general:this.contentClassName,expanded:this.contentClassName+"-expand",collapsed:this.contentClassName+"-collapse"},item:{general:{disabled:this.itemGeneralClassName+
"-disabled",focused:this.itemGeneralClassName+"-focused",normal:this.itemGeneralClassName,hovered:this.itemGeneralClassName+"-hovered",selected:this.itemGeneralClassName+"-selected"},content:{disabled:this.itemContentClassName+"-disabled",focused:this.itemContentClassName+"-focused",normal:this.itemContentClassName,hovered:this.itemContentClassName+"-hovered",selected:this.itemContentClassName+"-selected"}}};this.updateStyle(this.controlStyle);this.updateControlClass();this.updateContentClass()};
IntegralUIComboBox.prototype.ngAfterViewInit=function(){var a=this,c=setTimeout(function(){var b=a.cmpResolver.resolveComponentFactory(IntegralUITComponent);b&&a.headerRef&&(a.trialRef=a.headerRef.createComponent(b));clearTimeout(c)},100);a.headerElem&&(a.comboWidth=a.headerElem.nativeElement.firstElementChild.clientWidth,a.dropDownWidth<a.comboWidth&&(a.dropDownWidth=a.comboWidth))};
IntegralUIComboBox.prototype.ngAfterContentInit=function(){var a=this;a.attachItemEvents();a.contentList.changes.subscribe(function(){a.attachItemEvents()});a.updateSelectedIndex(a.selectedIndex);var c=setTimeout(function(){a.calcBlockHeight();a.contentDisplay="none";a.contentHeight="0";a.expandState="none";clearTimeout(c)},100)};IntegralUIComboBox.prototype.ngOnDestroy=function(){this.trialRef&&this.trialRef.destroy()};
IntegralUIComboBox.prototype.attachItemEvents=function(){var a=this;this.itemList=this.contentList.toArray();a.eventList&&(a.eventList.forEach(function(a){a.forEach(function(a){a.unsubscribe()})}),a.eventList.length=0);this.itemList&&0<this.itemList.length&&this.itemList.forEach(function(c){var b=[];b.push(c.mouseDown.subscribe(function(b){b=a.itemList.indexOf(c);a.updateSelection(b);a.closeDropDown()}));a.eventList.push(b)})};
IntegralUIComboBox.prototype.comboClick=function(a){1==a.buttons&&(this.initStatus=!1,this.expanded?this.closeDropDown():this.openDropDown())};IntegralUIComboBox.prototype.dropDownBlurEvent=function(a){a.preventDefault();var c=this,b=setTimeout(function(){c.closeDropDown();clearTimeout(b)},1);a.stopPropagation()};IntegralUIComboBox.prototype.callBeforeEvent=function(a){var c={cancel:!1};a?this.dropDownOpening.emit(c):this.dropDownClosing.emit(c);return!c.cancel};
IntegralUIComboBox.prototype.callAfterEvent=function(a){a?this.dropDownOpened.emit(null):this.dropDownClosed.emit(null)};IntegralUIComboBox.prototype.closeDropDown=function(){this.expanded=!1;this.dropDownElem&&this.dropDownElem.nativeElement.blur()};IntegralUIComboBox.prototype.openDropDown=function(){var a=this;a.expanded=!0;var c=setTimeout(function(){a.dropDownElem&&a.dropDownElem.nativeElement.focus();clearTimeout(c)},5)};
IntegralUIComboBox.prototype.getComboIcon=function(){return this.selectedItem?this.selectedItem.icon:""};IntegralUIComboBox.prototype.getComboText=function(){return this.selectedItem?this.selectedItem.text:"TEST"};IntegralUIComboBox.prototype.isIndexInRange=function(a){return this.items?0<=a&&a<this.items.length:!1};IntegralUIComboBox.prototype.getDropDownWidth=function(){return 0<this.dropDownWidth?this.dropDownWidth:this.comboWidth?this.comboWidth:0};
IntegralUIComboBox.prototype.calcBlockHeight=function(){var a=this;a.itemSizeList.length=0;a.itemList=a.contentList.toArray();if(a.itemList&&0<a.itemList.length){var c=0;a.itemList.forEach(function(b){var d=b.getSize();b=b.getMargin();a.itemSizeList.push({size:d,margin:b});c++})}};
IntegralUIComboBox.prototype.getDropDownHeight=function(){var a=this;if(0<a.dropDownHeight)return a.dropDownHeight;var c=0,b=0;a.itemList=a.contentList.toArray();if(a.itemList&&0<a.itemList.length){var d=0,e=-1,g=!1;a.itemList.forEach(function(h,f){f<a.itemSizeList.length&&(d<a.maxDropDownItems&&(c+=a.itemSizeList[f].size.height,!g&&a.itemSizeList[f].size.height!=e&&0<e&&(g=!0),e=a.itemSizeList[f].size.height,b=a.itemSizeList[f].margin.bottom),d++)});0<d&&(c+=b);a.integralHeight||(c=Math.floor(c/
(d<a.maxDropDownItems?d:a.maxDropDownItems))*(g?a.maxDropDownItems+1:a.maxDropDownItems))}return c};
IntegralUIComboBox.prototype.toggleContent=function(){var a=this,c=0,b=0;a.maxBlockHeight=a.getDropDownHeight();a.contentOverflowY="hidden";if(a.expanded){a.contentDisplay="block";a.contentBorder="1px";var d=setInterval(function(){c+b<a.maxBlockHeight?(b=0==b?1:b+2,c+=b,a.contentHeight=c+"px"):(a.contentHeight=a.maxBlockHeight+"px",a.contentOverflowY="auto",a.expandState="none",a.callAfterEvent(!0),clearInterval(d))},15)}else{c=a.maxBlockHeight;var e=setInterval(function(){0<c?(b=0==b?1:b+2,c-=b,
a.contentHeight=c+"px"):(a.contentBorder="0px",a.contentDisplay="none",a.contentHeight="0",a.expandState="none",a.callAfterEvent(),clearInterval(e))},15)}};IntegralUIComboBox.prototype.clearSelection=function(a){this.itemList=this.contentList.toArray();this.itemList.forEach(function(c,b){c!=a&&(c.state&=~IntegralUIObjectState.selected)})};
IntegralUIComboBox.prototype.updateSelectedIndex=function(a){this.isIndexInRange(a)&&(this.currentSelection=this.items[a],this.selectedItemChanged.emit({item:this.currentSelection}),this.contentList&&(this.itemList=this.contentList.toArray())&&a<this.itemList.length&&(this.itemList[a].state|=IntegralUIObjectState.selected))};
IntegralUIComboBox.prototype.updateSelection=function(a){if(this.currentIndex!=a&&this.isIndexInRange(a)){this.currentIndex=a;var c=this,b=setTimeout(function(){c.clearSelection();c.updateSelectedIndex(a);c.selectedIndexChanged.emit({index:a});clearTimeout(b)},1)}};
IntegralUIComboBox.prototype.updateContentClass=function(){this.contentClass.length=0;this.contentClass.push(this.options.currentStyle.content.general);0!=this.expanded?"expand"==this.expandState&&this.contentClass.push(this.options.currentStyle.content.expanded):"collapse"==this.expandState&&this.contentClass.push(this.options.currentStyle.content.collapsed)};IntegralUIComboBox.prototype.getContentClass=function(){return this.contentClass};
IntegralUIComboBox.prototype.getContentStyle=function(a){return this.commonService.isString(a)?a:a?{general:this.commonService.isFieldAvailable(a.general,this.contentClassName),expanded:this.commonService.isFieldAvailable(a.expanded,this.contentClassName+"-expand"),collapsed:this.commonService.isFieldAvailable(a.collapsed,this.contentClassName+"-collapse")}:{general:this.defaultStyle.content.general,expanded:this.defaultStyle.content.expanded,collapsed:this.defaultStyle.content.collapsed}};
IntegralUIComboBox.prototype.getHeaderClass=function(){var a=this.headerClassName;return a=this.state&IntegralUIObjectState.disabled?a+(" "+this.options.currentStyle.header.disabled):this.state&IntegralUIObjectState.focused?a+(" "+this.options.currentStyle.header.focused):this.state&IntegralUIObjectState.selected?a+(" "+this.options.currentStyle.header.selected):this.state&IntegralUIObjectState.hovered?a+(" "+this.options.currentStyle.header.hovered):a+(" "+this.options.currentStyle.header.normal)};
IntegralUIComboBox.prototype.getHeaderGeneralStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.hovered,this.headerClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.hovered,this.headerClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.headerClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.headerClassName),selected:this.commonService.isFieldAvailable(a.selected,this.headerClassName+
"-selected")}:{disabled:this.defaultStyle.header.general.disabled,focused:this.defaultStyle.header.general.focused,hovered:this.defaultStyle.header.general.hovered,normal:this.defaultStyle.header.general.normal,selected:this.defaultStyle.header.general.selected}};
IntegralUIComboBox.prototype.getHeaderStyle=function(a){return a?{general:this.getHeaderGeneralStyle(a.general),expandBox:this.commonService.isFieldAvailable(a.expandBox,this.headerExpandBoxClassName)}:{general:this.getHeaderGeneralStyle(),expandBox:this.defaultStyle.header.expandBox}};IntegralUIComboBox.prototype.getCurrentHeaderStyle=function(){return this.options.currentStyle.header};
IntegralUIComboBox.prototype.getItemStyle=function(a){return a?{general:this.getItemGeneralStyle(a.general),content:this.getItemContentStyle(a.content)}:{general:this.getItemGeneralStyle(),content:this.getItemContentStyle()}};
IntegralUIComboBox.prototype.getItemGeneralStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.itemGeneralClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.itemGeneralClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.itemGeneralClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.itemGeneralClassName),selected:this.commonService.isFieldAvailable(a.selected,
this.itemGeneralClassName+"-selected")}:{disabled:this.defaultStyle.item.general.disabled,focused:this.defaultStyle.item.general.focused,hovered:this.defaultStyle.item.general.hovered,normal:this.defaultStyle.item.general.normal,selected:this.defaultStyle.item.general.selected}};
IntegralUIComboBox.prototype.getItemContentStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.itemContentClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.itemContentClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.itemContentClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.itemContentClassName),selected:this.commonService.isFieldAvailable(a.selected,
this.itemContentClassName+"-selected")}:{disabled:this.defaultStyle.item.content.disabled,focused:this.defaultStyle.item.content.focused,hovered:this.defaultStyle.item.content.hovered,normal:this.defaultStyle.item.content.normal,selected:this.defaultStyle.item.content.selected}};
IntegralUIComboBox.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),header:this.getHeaderStyle(a.header),content:this.getContentStyle(a.content),item:this.getItemStyle(a.content)}:{general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},header:{general:{disabled:this.defaultStyle.header.general.disabled,
focused:this.defaultStyle.header.general.focused,hovered:this.defaultStyle.header.general.hovered,normal:this.defaultStyle.header.general.normal,selected:this.defaultStyle.header.general.selected},expandBox:this.defaultStyle.header.expandBox},content:{general:this.defaultStyle.content.general,expanded:this.defaultStyle.content.expanded,collapsed:this.defaultStyle.content.collapsed},item:{general:{disabled:this.defaultStyle.item.general.disabled,focused:this.defaultStyle.item.general.focused,hovered:this.defaultStyle.item.general.hovered,
normal:this.defaultStyle.item.general.normal,selected:this.defaultStyle.item.general.selected},content:{disabled:this.defaultStyle.item.content.disabled,focused:this.defaultStyle.item.content.focused,hovered:this.defaultStyle.item.content.hovered,normal:this.defaultStyle.item.content.normal,selected:this.defaultStyle.item.content.selected}}}};    return IntegralUIComboBox;
}(IntegralUIBaseComponent));
export { IntegralUIComboBox };
IntegralUIComboBox.decorators = [
    { type: Component, args: [{
                selector: 'iui-combobox',
                template: "\n\t\t<div [ngClass]=\"getControlClass()\" #control>\n\t\t\t<iui-header [controlStyle]=\"getCurrentHeaderStyle()\" [icon]=\"getComboIcon()\" [text]=\"getComboText()\" (mouseDown)=\"comboClick($event)\" [animationType]=\"'arrow'\" #header>\n\t\t\t</iui-header>\n\t\t\t<div [ngClass]=\"getContentClass()\" [ngStyle]=\"{ 'border-width': contentBorder, 'display': contentDisplay, 'height': contentHeight, 'opacity': contentOpacity, 'overflow-y': contentOverflowY, 'width': getDropDownWidth() + 'px' }\" tabindex=\"999\" (blur)=\"dropDownBlurEvent($event)\" #dropdown> \n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div> \n\t\t</div>\n\t",
                inputs: ['controlStyle', 'data', 'name', 'state'],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUIComboBox.ctorParameters = function () { return [
    { type: IntegralUICommonService, },
    { type: ComponentFactoryResolver, },
]; };
IntegralUIComboBox.propDecorators = {
    'controlElem': [{ type: ViewChild, args: ['control', { read: ElementRef },] },],
    'header': [{ type: ViewChild, args: ['header',] },],
    'headerElem': [{ type: ViewChild, args: ['header', { read: ElementRef },] },],
    'headerRef': [{ type: ViewChild, args: ['header', { read: ViewContainerRef },] },],
    'dropDownElem': [{ type: ViewChild, args: ['dropdown', { read: ElementRef },] },],
    'contentList': [{ type: ContentChildren, args: [IntegralUIItem,] },],
    'dropDownHeight': [{ type: Input },],
    'integralHeight': [{ type: Input },],
    'items': [{ type: Input },],
    'maxDropDownItems': [{ type: Input },],
    'dropDownWidth': [{ type: Input },],
    'expanded': [{ type: Input },],
    'selectedIndex': [{ type: Input },],
    'selectedItem': [{ type: Input },],
    'click': [{ type: Output },],
    'dropDownClosed': [{ type: Output },],
    'dropDownClosing': [{ type: Output },],
    'dropDownOpened': [{ type: Output },],
    'dropDownOpening': [{ type: Output },],
    'selectedItemChanged': [{ type: Output },],
    'selectedIndexChanged': [{ type: Output },],
};
//# sourceMappingURL=integralui.combobox.js.map