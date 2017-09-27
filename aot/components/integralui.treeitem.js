/*
  filename: integralui.treeitem.js
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
import { Component, ElementRef, Input, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { IntegralUIBaseService, IntegralUIObjectState } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
import { IntegralUIListItem } from './integralui.listitem';
var IntegralUITreeItem = (function (_super) {
__extends(IntegralUITreeItem,_super);function IntegralUITreeItem(a,b,c,d){var e=_super.call(this,a,c,d)||this;e.elemRef=a;e.dataService=b;e.commonService=c;e.baseService=d;e.contentAnimation={display:"none",left:0,width:0,height:0};e.numItems=0;e.templateData=[];e.expandState="none";e.blockElemHeight="0";e.eventList=[];e.parentItem=null;e.blockClass=[];e.expandBoxClass=[];return e}
Object.defineProperty(IntegralUITreeItem.prototype,"expanded",{get:function(){return this.isExpanded},set:function(a){if(this.isExpanded!=a){var b=!0;this.parentCtrl&&this.parentCtrl.invokeEvent&&(b=this.parentCtrl.invokeEvent(a?"BEFORE_EXPAND":"BEFORE_COLLAPSE",this.data));b&&(this.expandState=a?"expand":"collapse",this.isExpanded=a,this.parentCtrl&&this.parentCtrl.invokeMethod("CHANGE_EXPANDED",{component:this}),this.updateBlockClass(),this.updateExpandBoxClass(),this.toggleContent(),this.parentCtrl&&
this.parentCtrl.invokeEvent&&this.parentCtrl.invokeEvent(a?"AFTER_EXPAND":"AFTER_COLLAPSE",this.data))}},enumerable:!0,configurable:!0});
IntegralUITreeItem.prototype.ngOnInit=function(){this.templateData.push(this.data);this.parentCtrl=this.baseService.getComponent();this.dataService.init([{data:this.items}]);this.isExpanded=this.parentCtrl?this.parentCtrl.isItemExpanded(this.data):!0;this.blockElemHeight="0";this.generalClassName="iui-treeitem";this.blockClassName=this.generalClassName+"-block";this.contentClassName=this.generalClassName+"-content";this.expandBoxClassName=this.generalClassName+"-expand-box";this.initStyle()};
IntegralUITreeItem.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},expandBox:{general:this.expandBoxClassName,load:this.expandBoxClassName+"-load",expanded:this.expandBoxClassName+"-open",collapsed:this.expandBoxClassName+"-close"},content:{disabled:this.contentClassName+"-disabled",focused:this.contentClassName+
"-focused",normal:this.contentClassName,hovered:this.contentClassName+"-hovered",selected:this.contentClassName+"-selected"}};this.updateStyle(this.controlStyle);this.refresh()};IntegralUITreeItem.prototype.ngAfterViewInit=function(){this.contentElem&&(this.contentAnimation={display:"none",left:this.contentElem.nativeElement.offsetWidth/2,width:0,height:this.contentElem.nativeElement.offsetHeight},this.toggleContent())};
IntegralUITreeItem.prototype.ngAfterContentChecked=function(){this.contentList&&(this.itemList=this.contentList.toArray(),this.numItems!=this.itemList.length&&(this.numItems=this.itemList.length,this.refresh()))};
IntegralUITreeItem.prototype.itemDragOver=function(a,b){if(this.parentCtrl){var c=this.parentCtrl.getItemFromComponent(this),d=this.getPageRect(),e=this.getContentSize();d={x:d.left,y:d.top,width:d.right-d.left,height:e.height};this.parentCtrl.expandOnDelay(c);this.parentCtrl.processDragOver(a,c,d,b)}a.stopPropagation()};
IntegralUITreeItem.prototype.itemDragDrop=function(a){if(this.parentCtrl){this.parentCtrl.processDragDrop(a,this.data);var b=this;if(b.expanded&&!b.isBlockExpanded())var c=setTimeout(function(){b.toggleContent();clearTimeout(c)},100)}a.stopPropagation()};IntegralUITreeItem.prototype.isBlockExpanded=function(){return"0"==this.blockElemHeight?!1:!0};IntegralUITreeItem.prototype.collapse=function(a){this.expanded=!1;a&&(this.itemList=this.contentList.toArray())&&0<this.itemList.length&&this.itemList.forEach(function(b){b.collapse(a)})};
IntegralUITreeItem.prototype.expand=function(a){this.expanded=!0;a&&(this.itemList=this.contentList.toArray())&&0<this.itemList.length&&this.itemList.forEach(function(b){b.expand(a)})};IntegralUITreeItem.prototype.toggle=function(a,b){this.expanded=void 0!=a?a:!this.expanded;b&&(this.itemList=this.contentList.toArray())&&0<this.itemList.length&&this.itemList.forEach(function(c){c.toggle(a,b)})};IntegralUITreeItem.prototype.onExpandBoxMouseDown=function(a){this.toggle()};
IntegralUITreeItem.prototype.toggleContent=function(){var a=this;if(a.items){var b=a.contentElem.nativeElement.offsetHeight*a.items.length,c=0,d=0;if(a.expanded)var e=setInterval(function(){c<b?(d=0==d?1:d+2,c+=d,a.blockElemHeight=c+"px"):(a.blockElemHeight="auto",a.expandState="none",a.updateExpandBoxClass(),a.parentCtrl&&a.parentCtrl.updateLayout(),clearInterval(e))},25);else{c=a.blockElem.nativeElement.offsetHeight;var f=setInterval(function(){0<c?(d=0==d?1:d+2,c-=d,a.blockElemHeight=c+"px"):(a.blockElemHeight=
"0",a.expandState="none",a.updateExpandBoxClass(),a.parentCtrl&&a.parentCtrl.updateLayout(),clearInterval(f))},25)}}};IntegralUITreeItem.prototype.getComponentFromItem=function(a){var b=null;if((this.itemList=this.contentList.toArray())&&0<this.itemList.length)for(var c=0;!b&&c<this.itemList.length;){b=this.itemList[c];if(this.getItemFromComponent(b)==a)break;else b=b.getComponentFromItem(a);c++}return b};
IntegralUITreeItem.prototype.getItemFromComponent=function(a){return a&&a.data?a.data:this.items&&(this.itemList=this.contentList.toArray(),a=this.itemList.indexOf(a),0<=a&&a<this.items.length)?this.items[a]:null};IntegralUITreeItem.prototype.isThereVisibleChildren=function(){var a=!1;if(this.data&&this.parentCtrl){var b=this.data[this.parentCtrl.getDataFields().items];b&&0<b.length&&(a=!0)}return a};
IntegralUITreeItem.prototype.clearComponentSelection=function(){(this.itemList=this.contentList.toArray())&&0<this.itemList.length&&this.itemList.forEach(function(a){a.state&=~IntegralUIObjectState.selected;a.clearComponentSelection()})};IntegralUITreeItem.prototype.selectItem=function(){this.parentCtrl&&this.parentCtrl.clearSelection();this.state|=IntegralUIObjectState.selected};
IntegralUITreeItem.prototype.refresh=function(){this.updateControlClass();this.updateContentClass();this.updateBlockClass();this.updateExpandBoxClass();if(this.contentList){this.itemList=this.contentList.toArray();for(var a=0;a<this.itemList.length;a++)this.itemList[a].refresh()}};
IntegralUITreeItem.prototype.updateBlockClass=function(){this.blockClass.length=0;this.blockClass.push(this.blockClassName);this.items&&0<this.items.length&&(0!=this.expanded?this.blockClass.push(this.blockClassName+"-open"):this.blockClass.push(this.blockClassName+"-close"))};IntegralUITreeItem.prototype.getBlockClass=function(){return this.blockClass};IntegralUITreeItem.prototype.getGeneralClass=function(){return this.generalClassName};
IntegralUITreeItem.prototype.updateExpandBoxClass=function(){this.expandBoxClass.length=0;if(this.options.currentStyle){var a=this.parentCtrl.getDataFields();(this.parentCtrl&&this.parentCtrl.isThereChildren()||this.data&&this.data[a.hasChildren])&&this.expandBoxClass.push(this.options.currentStyle.expandBox.general);if(this.data&&this.data[a.hasChildren]&&(this.isThereVisibleChildren()||!this.data[a.items]||this.data[a.items]&&0==this.data[a.items].length)||this.isThereVisibleChildren())this.parentCtrl&&
this.parentCtrl.isItemLoading(this.data)?this.expandBoxClass.push(this.options.currentStyle.expandBox.load):0!=this.expanded?"none"==this.expandState?this.expandBoxClass.push(this.options.currentStyle.expandBox.expanded):"expand"==this.expandState&&this.expandBoxClass.push(this.options.currentStyle.expandBox.expanded+"-animate"):"none"==this.expandState?this.expandBoxClass.push(this.options.currentStyle.expandBox.collapsed):"collapse"==this.expandState&&this.expandBoxClass.push(this.options.currentStyle.expandBox.collapsed+
"-animate")}};IntegralUITreeItem.prototype.getExpandBoxClass=function(){return this.expandBoxClass};
IntegralUITreeItem.prototype.getExpandBoxStyle=function(a){return this.commonService.isString(a)?a:a?{general:this.commonService.isFieldAvailable(a.general,this.expandBoxClassName),load:this.commonService.isFieldAvailable(a.load,this.expandBoxClassName+"-load"),expanded:this.commonService.isFieldAvailable(a.expanded,this.expandBoxClassName+"-open"),collapsed:this.commonService.isFieldAvailable(a.collapsed,this.expandBoxClassName+"-close")}:{general:this.defaultStyle.expandBox.general,load:this.defaultStyle.expandBox.load,
expanded:this.defaultStyle.expandBox.expanded,collapsed:this.defaultStyle.expandBox.collapsed}};
IntegralUITreeItem.prototype.updateStyle=function(a){this.options.currentStyle=a?{content:this.getContentStyle(a.content),expandBox:this.getExpandBoxStyle(a.expandBox),general:this.getGeneralStyle(a.general)}:{content:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,hovered:this.defaultStyle.content.hovered,normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected},expandBox:{general:this.defaultStyle.expandBox.general,load:this.defaultStyle.expandBox.load,
expanded:this.defaultStyle.expandBox.expanded,collapsed:this.defaultStyle.expandBox.collapsed},general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected}}};    return IntegralUITreeItem;
}(IntegralUIListItem));
export { IntegralUITreeItem };
IntegralUITreeItem.decorators = [
    { type: Component, args: [{
                selector: 'iui-treeitem',
                template: "\n        <li [ngClass]=\"getControlClass()\">\n            <div [ngClass]=\"getContentClass()\" (dragover)=\"itemDragOver($event)\" (drop)=\"itemDragDrop($event)\" #content>\n                <span [ngClass]=\"getExpandBoxClass()\" (mousedown)=\"onExpandBoxMouseDown($event)\"></span>\n                <div draggable=\"true\" (click)=\"onClick($event)\" (mousedown)=\"onMouseDown($event)\" (mouseup)=\"onMouseUp($event)\" (mouseenter)=\"onMouseEnter($event)\" (mousemove)=\"onMouseMove($event)\" (mouseleave)=\"onMouseLeave($event)\" (dragstart)=\"itemDragStart($event)\" #dragElem>\n                    <ng-template ngFor [ngForOf]=\"templateData\" [ngForTemplate]=\"templateRef\"></ng-template> \n                </div>\n            </div> \n            <ul [ngClass]=\"getBlockClass()\" [ngStyle]=\"{ 'height': blockElemHeight }\" #block>\n                <iui-treeitem *ngFor=\"let item of items\" [expanded]=\"item.expanded\" [text]=\"item.text\" [items]=\"item.items\" [templateRef]=\"templateRef\" [data]=\"item\"></iui-treeitem>\n            </ul>\n        </li>\n    ",
                inputs: ['controlStyle', 'data', 'icon', 'name', 'state', 'text'],
                outputs: ['click', 'mouseDown', 'mouseEnter', 'mouseLeave', 'mouseMove', 'mouseUp'],
                providers: [IntegralUIDataService],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUITreeItem.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: IntegralUIDataService, },
    { type: IntegralUICommonService, },
    { type: IntegralUIBaseService, },
]; };
IntegralUITreeItem.propDecorators = {
    'contentElem': [{ type: ViewChild, args: ['content', { read: ElementRef },] },],
    'dragElem': [{ type: ViewChild, args: ['dragElem', { read: ElementRef },] },],
    'blockElem': [{ type: ViewChild, args: ['block', { read: ElementRef },] },],
    'contentList': [{ type: ViewChildren, args: [IntegralUITreeItem,] },],
    'items': [{ type: Input },],
    'templateRef': [{ type: Input },],
    'expanded': [{ type: Input },],
};
//# sourceMappingURL=integralui.treeitem.js.map