/*
  filename: integralui.listgroup.js
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
import { Component, ComponentFactoryResolver, ContentChildren, ElementRef, Input, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { IntegralUIBaseService, IntegralUIItem, IntegralUIObjectState } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIGroupBox } from './integralui.groupbox';
var IntegralUIListGroup = (function (_super) {
__extends(IntegralUIListGroup,_super);function IntegralUIListGroup(a,b,c,e){var d=_super.call(this,b,c)||this;d.dataService=a;d.commonService=b;d.cmpResolver=c;d.baseService=e;d.numItems=0;d.itemEventList=[];d.headerExpandBoxClassName="";d.itemClassName="";return d}
IntegralUIListGroup.prototype.ngOnInit=function(){this.parentCtrl=this.baseService.getComponent();this.dataService.init([{data:this.items}]);this.generalClassName="iui-listgroup";this.headerClassName=this.generalClassName+"-header";this.headerExpandBoxClassName=this.headerClassName+"-expand-box";this.contentClassName=this.generalClassName+"-content";this.itemClassName=this.generalClassName+"-item";this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+
"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},header:{general:{disabled:this.headerClassName+"-disabled",focused:this.headerClassName+"-focused",normal:this.headerClassName,hovered:this.headerClassName+"-hovered",selected:this.headerClassName+"-selected"},expandBox:this.headerExpandBoxClassName},content:{general:this.contentClassName,expanded:this.contentClassName+"-expand",collapsed:this.contentClassName+"-collapse"},
item:{general:{disabled:this.itemClassName+"-disabled",focused:this.itemClassName+"-focused",normal:this.itemClassName,hovered:this.itemClassName+"-hovered",selected:this.itemClassName+"-selected"}}};this.updateStyle(this.controlStyle);this.updateControlClass();this.updateContentClass()};
IntegralUIListGroup.prototype.ngAfterContentInit=function(){var a=this;a.itemList=a.contentList.toArray();a.numItems=a.itemList.length;a.attachItemEvents();var b=setTimeout(function(){if(a.contentElem){var c=a.contentElem.nativeElement.firstElementChild.cloneNode(!0);c.style.position="absolute";c.style.top="-9999999px";a.controlElem.nativeElement.append(c);a.maxBlockHeight=c.offsetHeight;c.remove()}clearTimeout(b)},100)};IntegralUIListGroup.prototype.ngOnDestroy=function(){};
IntegralUIListGroup.prototype.ngAfterContentChecked=function(){this.contentList&&(this.itemList=this.contentList.toArray(),this.numItems!=this.itemList.length&&(this.attachItemEvents(),this.numItems=this.itemList.length))};IntegralUIListGroup.prototype.onHeaderClick=function(a){1==a.buttons&&(this.selected=!0,this.supressCallback||this.expanded||(this.expanded=!0))};IntegralUIListGroup.prototype.onHeaderExpand=function(){this.supressCallback=!0;this.expanded=!this.expanded};
IntegralUIListGroup.prototype.toggleContent=function(){var a=this,b=0,c=0;if(a.expanded){a.contentDisplay="block";var e=setInterval(function(){b<a.maxBlockHeight?(c=0==c?1:c+2,b+=c,a.contentHeight=b+"px"):(a.contentHeight="auto",a.expandState="none",a.callAfterEvent(!0),a.supressCallback=!1,clearInterval(e))},25)}else{a.maxBlockHeight=a.contentElem.nativeElement.offsetHeight;b=a.maxBlockHeight;var d=setInterval(function(){0<b?(c=0==c?1:c+2,b-=c,a.contentHeight=b+"px"):(a.contentDisplay="none",a.contentHeight=
"0",a.expandState="none",a.callAfterEvent(),a.supressCallback=!1,clearInterval(d))},25)}};IntegralUIListGroup.prototype.getComponentData=function(a){if(a){if(a.data)return a.data;a=this.getItemDataIndex(a);if(this.items&&0<=a&&a<this.items.length)return this.items[a]}return null};IntegralUIListGroup.prototype.getItemCurrentIndex=function(a){this.itemList=this.contentList.toArray();return a&&this.itemList?this.itemList.indexOf(a):-1};
IntegralUIListGroup.prototype.getItemDataIndex=function(a){return a&&(a=this.getItemCurrentIndex(a),this.items&&0<=a&&a<this.items.length)?a:-1};
IntegralUIListGroup.prototype.attachItemEvents=function(){var a=this;this.itemList=this.contentList.toArray();a.itemEventList&&(a.itemEventList.forEach(function(a){a.forEach(function(a){a.unsubscribe()})}),a.itemEventList.length=0);this.itemList&&0<this.itemList.length&&this.itemList.forEach(function(b){var c=[];c.push(b.mouseDown.subscribe(function(c){b&&(a.clearSelection(),b.state|=IntegralUIObjectState.selected,a.selected=!0,a.updateSelectedItemFromComponent(b),a.afterSelect.emit({group:a.data,
item:a.getComponentData(b)}))}));a.itemEventList.push(c)})};IntegralUIListGroup.prototype.updateSelectedItemFromComponent=function(a){this.itemList&&0<this.itemList.length&&a&&this.itemList.indexOf(a)};IntegralUIListGroup.prototype.clearSelection=function(a){this.itemList=this.contentList.toArray();this.itemList.forEach(function(b){b!=a&&(b.state&=~IntegralUIObjectState.selected)})};
IntegralUIListGroup.prototype.getItemGeneralStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.itemClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.itemClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.itemClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.itemClassName),selected:this.commonService.isFieldAvailable(a.selected,this.itemClassName+
"-selected")}:{disabled:this.defaultStyle.item.general.disabled,focused:this.defaultStyle.item.general.focused,hovered:this.defaultStyle.item.general.hovered,normal:this.defaultStyle.item.general.normal,selected:this.defaultStyle.item.general.selected}};IntegralUIListGroup.prototype.getItemStyle=function(a){return{general:this.getItemGeneralStyle(a.general)}};
IntegralUIListGroup.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),header:this.getHeaderStyle(a.header),content:this.getContentStyle(a.content),item:this.getItemStyle(a.item)}:{general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},header:{general:{disabled:this.defaultStyle.header.general.disabled,
focused:this.defaultStyle.header.general.focused,hovered:this.defaultStyle.header.general.hovered,normal:this.defaultStyle.header.general.normal,selected:this.defaultStyle.header.general.selected},expandBox:this.defaultStyle.header.expandBox},content:{general:this.defaultStyle.content.general,expanded:this.defaultStyle.content.expanded,collapsed:this.defaultStyle.content.collapsed},item:{general:{disabled:this.defaultStyle.item.general.disabled,focused:this.defaultStyle.item.general.focused,hovered:this.defaultStyle.item.general.hovered,
normal:this.defaultStyle.item.general.normal,selected:this.defaultStyle.item.general.selected}}}};    return IntegralUIListGroup;
}(IntegralUIGroupBox));
export { IntegralUIListGroup };
IntegralUIListGroup.decorators = [
    { type: Component, args: [{
                selector: 'iui-listgroup',
                template: "\n\t\t<div [ngClass]=\"getControlClass()\" #control>\n\t\t\t<iui-header [controlStyle]=\"getCurrentHeaderStyle()\" [icon]=\"icon\" [text]=\"text\" (mouseDown)=\"onHeaderClick($event)\" [animationType]=\"expandBoxType\" (expandClicked)=\"onHeaderExpand()\" #header>\n\t\t\t\t<ng-content select=\"[header]\"></ng-content>\n\t\t\t</iui-header>\n\t\t\t<div [ngClass]=\"getContentClass()\" [ngStyle]=\"{ 'display': contentDisplay, 'height': contentHeight, 'opacity': contentOpacity }\" #content>\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t</div>\n    ",
                inputs: ['controlStyle', 'data', 'expandBoxType', 'icon', 'name', 'state', 'text'],
                outputs: ['afterCollapse', 'afterExpand', 'afterSelect', 'beforeCollapse', 'beforeExpand', 'beforeSelect', 'selectedChanged'],
                providers: [IntegralUIDataService],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUIListGroup.ctorParameters = function () { return [
    { type: IntegralUIDataService, },
    { type: IntegralUICommonService, },
    { type: ComponentFactoryResolver, },
    { type: IntegralUIBaseService, },
]; };
IntegralUIListGroup.propDecorators = {
    'controlElem': [{ type: ViewChild, args: ['control', { read: ElementRef },] },],
    'contentRef': [{ type: ViewChild, args: ['content', { read: ViewContainerRef },] },],
    'contentElem': [{ type: ViewChild, args: ['content', { read: ElementRef },] },],
    'header': [{ type: ViewChild, args: ['header',] },],
    'contentList': [{ type: ContentChildren, args: [IntegralUIItem,] },],
    'items': [{ type: Input },],
};
//# sourceMappingURL=integralui.listgroup.js.map