/*
  filename: integralui.listitem.js
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
import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUIBaseService, IntegralUIItem, IntegralUIObjectState } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
var IntegralUIListItem = (function (_super) {
__extends(IntegralUIListItem,_super);function IntegralUIListItem(a,c,d){var b=_super.call(this,a,c)||this;b.elemRef=a;b.commonService=c;b.baseService=d;b.parentCtrl=null;b.allowSelection=!0;return b}IntegralUIListItem.prototype.ngOnInit=function(){this.parentCtrl=this.baseService.getComponent();this.generalClassName="iui-listitem";this.contentClassName=this.generalClassName+"-content";this.initStyle()};
IntegralUIListItem.prototype.itemDragStart=function(a){if(this.parentCtrl){var c=this.parentCtrl.getItemFromComponent(this);this.parentCtrl.processDragStart(a,c)}a.stopPropagation()};IntegralUIListItem.prototype.itemDragOver=function(a,c){if(this.parentCtrl){var d=this.parentCtrl.getItemFromComponent(this),b=this.getPageRect(),e=this.getContentSize();this.parentCtrl.processDragOver(a,d,{x:b.left,y:b.top,width:b.right-b.left,height:e.height},c)}a.stopPropagation()};
IntegralUIListItem.prototype.itemDragDrop=function(a){if(this.parentCtrl){var c=this.parentCtrl.getItemFromComponent(this);this.parentCtrl.processDragDrop(a,c)}a.stopPropagation()};IntegralUIListItem.prototype.onMouseDown=function(a){this.parentCtrl&&(this.allowSelection=this.parentCtrl.invokeMethod("SELECT_ITEM",{event:a,item:this.parentCtrl.getItemFromComponent(this)}));this.mouseDown.emit(a);a.stopPropagation()};
IntegralUIListItem.prototype.onMouseUp=function(a){this.parentCtrl&&this.allowSelection&&this.parentCtrl.invokeMethod("UPDATE_SELECTION",{event:a,item:this.parentCtrl.getItemFromComponent(this)});this.mouseUp.emit(a);a.stopPropagation()};IntegralUIListItem.prototype.selectItem=function(){this.state|=IntegralUIObjectState.selected};    return IntegralUIListItem;
}(IntegralUIItem));
export { IntegralUIListItem };
IntegralUIListItem.decorators = [
    { type: Component, args: [{
                selector: 'iui-listitem',
                template: "\n        <li [ngClass]=\"getControlClass()\" [ngStyle]=\"{ 'position': positionType, 'top': itemPos.top + 'px', 'left': itemPos.left + 'px' }\">\n            <div [ngClass]=\"getContentClass()\" (click)=\"onClick($event)\" (mousedown)=\"onMouseDown($event)\" (mouseup)=\"onMouseUp($event)\" (mouseenter)=\"onMouseEnter($event)\" (mousemove)=\"onMouseMove($event)\" (mouseleave)=\"onMouseLeave($event)\" draggable=\"true\" (dragstart)=\"itemDragStart($event)\" (dragover)=\"itemDragOver($event, true)\" (drop)=\"itemDragDrop($event)\" #dragElem #content>\n                <span *ngIf=\"icon\" class=\"iui-item-icon\" [ngClass]=\"icon\" [style.display]=\"getIconStatus()\"></span>\n                <span *ngIf=\"text\" class=\"iui-item-label\">{{text}}</span>\n                <ng-content></ng-content>\n            </div>\n        </li>\n    ",
                inputs: ['controlStyle', 'data', 'icon', 'name', 'state', 'text'],
                outputs: ['click', 'mouseDown', 'mouseEnter', 'mouseLeave', 'mouseMove', 'mouseUp'],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUIListItem.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: IntegralUICommonService, },
    { type: IntegralUIBaseService, },
]; };
IntegralUIListItem.propDecorators = {
    'contentElem': [{ type: ViewChild, args: ['content', { read: ElementRef },] },],
    'dragElem': [{ type: ViewChild, args: ['dragElem', { read: ElementRef },] },],
};
//# sourceMappingURL=integralui.listitem.js.map