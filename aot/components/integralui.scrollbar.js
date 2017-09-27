/*
  filename: integralui.scrollbar.js
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
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer, ViewEncapsulation } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIOrientation } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
var IntegralUIScrollBar = (function (_super) {
__extends(IntegralUIScrollBar,_super);
function IntegralUIScrollBar(a,b,d){var c=_super.call(this,d)||this;c.elemRef=a;c.elemRenderer=b;c.commonService=d;c.currentMaxValue=0;c.currentMinValue=0;c.currentValue=0;c.currentSplitterDistance={x:0,y:0};c.emptySpace=0;c.maxPos={x:0,y:0};c.scrollSize={width:0,height:0};c.thumbSize={width:0,height:0};c.thumbPos={x:2,y:20};c.smallChange=0;c.largeChangeValue=0;c.orientation=IntegralUIOrientation.Vertical;c.scrollStart=new EventEmitter;c.scrollEnd=new EventEmitter;c.valueChanged=new EventEmitter;
c.thumbStartPos={x:0,y:0};c.isThumbActive=!1;c.prevPos={x:0,y:0};c.scrollInterval=null;c.scrollTimeout=null;return c}Object.defineProperty(IntegralUIScrollBar.prototype,"height",{set:function(a){this.scrollSize.height!=a&&0<=a&&(this.scrollSize.height=a,this.updateLayout())},enumerable:!0,configurable:!0});Object.defineProperty(IntegralUIScrollBar.prototype,"largeChange",{set:function(a){this.largeChangeValue!=a&&0<=a&&(this.largeChangeValue=a)},enumerable:!0,configurable:!0});
Object.defineProperty(IntegralUIScrollBar.prototype,"max",{get:function(){return this.currentMaxValue},set:function(a){this.currentMaxValue!=a&&(this.currentMaxValue=0>=a?1:a,this.currentValue>this.currentMaxValue&&(this.currentValue=this.currentMaxValue),this.updateLayout())},enumerable:!0,configurable:!0});
Object.defineProperty(IntegralUIScrollBar.prototype,"min",{get:function(){return this.currentMinValue},set:function(a){this.currentMinValue!=a&&0<=a&&(this.currentMinValue=a,this.updateLayout())},enumerable:!0,configurable:!0});
Object.defineProperty(IntegralUIScrollBar.prototype,"value",{get:function(){return this.currentValue},set:function(a){this.currentValue!=a&&(this.currentValue=a<this.currentMinValue?this.currentMinValue:a>this.currentMaxValue?this.currentMaxValue:a,this.updateLayout(),this.valueChanged.emit({value:this.currentValue}))},enumerable:!0,configurable:!0});
Object.defineProperty(IntegralUIScrollBar.prototype,"width",{set:function(a){this.scrollSize.width!=a&&0<=a&&(this.scrollSize.width=a,this.updateLayout())},enumerable:!0,configurable:!0});IntegralUIScrollBar.prototype.ngOnInit=function(){this.generalClassName="iui-scrollbar";this.initStyle()};IntegralUIScrollBar.prototype.ngAfterViewInit=function(){};IntegralUIScrollBar.prototype.ngAfterContentInit=function(){var a=this,b=setTimeout(function(){a.updateLayout();clearTimeout(b)},1)};
IntegralUIScrollBar.prototype.ngOnDestroy=function(){this.clearScrolling()};IntegralUIScrollBar.prototype.isVertical=function(){return this.orientation==IntegralUIOrientation.Vertical?!0:!1};IntegralUIScrollBar.prototype.getSize=function(){return{width:this.elemRef.nativeElement.firstElementChild.offsetWidth,height:this.elemRef.nativeElement.firstElementChild.offsetHeight}};IntegralUIScrollBar.prototype.setScrollSize=function(a){this.scrollSize=a};
IntegralUIScrollBar.prototype.updateLayout=function(){if(this.orientation==IntegralUIOrientation.Horizontal){0==this.largeChangeValue&&(this.largeChangeValue=this.scrollSize.width);var a=this.scrollSize.width-2;var b=a/(this.currentMaxValue+this.largeChangeValue);b*=this.largeChangeValue;0>=this.currentMaxValue?b=a:7>b&&(b=7);this.thumbSize.width=b;this.emptySpace=a-b;0<this.currentMaxValue&&(this.thumbPos.x=2+this.currentValue*this.emptySpace/this.currentMaxValue)}else 0==this.largeChangeValue&&
(this.largeChangeValue=this.scrollSize.height),a=this.scrollSize.height-2,b=a/(this.currentMaxValue+this.largeChangeValue),b*=this.largeChangeValue,0>=this.currentMaxValue?b=a:7>b&&(b=7),this.thumbSize.height=b,this.emptySpace=a-b,0<this.currentMaxValue&&(this.thumbPos.y=2+this.currentValue*this.emptySpace/this.currentMaxValue)};
IntegralUIScrollBar.prototype.thumbMouseDown=function(a){var b=this.commonService.getShiftPos();this.thumbStartPos={x:a.pageX-b.x,y:a.pageY-b.y};this.isThumbActive=!0;this.prevPos={x:this.value,y:this.value};this.scrollStart.emit({value:this.currentValue});a.stopPropagation()};
IntegralUIScrollBar.prototype.onWindowMouseMove=function(a){if(1==a.buttons&&this.isThumbActive){var b=this.commonService.getShiftPos(),d=a.pageX-b.x;a=a.pageY-b.y;b=0;this.orientation==IntegralUIOrientation.Horizontal?0<this.emptySpace&&(b=this.prevPos.x+(d-this.thumbStartPos.x)*this.currentMaxValue/this.emptySpace):0<this.emptySpace&&(b=this.prevPos.y+(a-this.thumbStartPos.y)*this.currentMaxValue/this.emptySpace);this.value=b}};
IntegralUIScrollBar.prototype.onWindowMouseUp=function(a){this.isThumbActive=!1;this.prevPos.y=this.currentValue;this.clearScrolling();this.scrollEnd.emit({value:this.currentValue})};
IntegralUIScrollBar.prototype.changeScrollPos=function(a){var b=this;b.processLargeChange(a);b.clearScrolling();b.scrollTimeout=setTimeout(function(){b.scrollInterval=setInterval(function(){b.currentValue>b.currentMinValue&&b.currentValue<b.currentMaxValue?b.processLargeChange(a):b.clearScrolling()},100);clearTimeout(b.scrollTimeout)},250)};
IntegralUIScrollBar.prototype.processLargeChange=function(a){switch(this.isVertical()?a.offsetY<this.thumbPos.y?1:a.offsetY>this.thumbPos.y+this.thumbSize.height?2:-1:a.offsetX<this.thumbPos.x?1:a.offsetX>this.thumbPos.x+this.thumbSize.width?2:-1){case 1:this.value-=this.largeChangeValue;break;case 2:this.value+=this.largeChangeValue}};
IntegralUIScrollBar.prototype.clearScrolling=function(){this.scrollTimeout&&clearTimeout(this.scrollTimeout);this.scrollInterval&&clearInterval(this.scrollInterval);this.scrollInterval=this.scrollTimeout=null};IntegralUIScrollBar.prototype.getScrollBarStyle=function(){return this.orientation==IntegralUIOrientation.Horizontal?{bottom:0,width:this.scrollSize.width+"px"}:{right:0,height:this.scrollSize.height+"px"}};    return IntegralUIScrollBar;
}(IntegralUIBaseComponent));
export { IntegralUIScrollBar };
IntegralUIScrollBar.decorators = [
    { type: Component, args: [{
                selector: 'iui-scrollbar',
                template: "\n\t\t<div *ngIf=\"isVertical()\" class=\"iui-scrollbar-vertical\" [ngStyle]=\"getScrollBarStyle()\" (mousedown)=\"changeScrollPos($event)\">\n\t\t\t<div class=\"iui-scroll-button-thumb-vertical\" [ngStyle]=\"{ top: thumbPos.y + 'px', height: thumbSize.height + 'px' }\" (mousedown)=\"thumbMouseDown($event)\"></div>\n\t\t</div>\n\t\t<div *ngIf=\"!isVertical()\" class=\"iui-scrollbar-horizontal\" [ngStyle]=\"getScrollBarStyle()\" (mousedown)=\"changeScrollPos($event)\">\n\t\t\t<div class=\"iui-scroll-button-thumb-horizontal\" [ngStyle]=\"{ left: thumbPos.x + 'px', width: thumbSize.width + 'px' }\" (mousedown)=\"thumbMouseDown($event)\"></div>\n\t\t</div>\n\t",
                inputs: ['controlStyle', 'data', 'name', 'state'],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUIScrollBar.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
    { type: IntegralUICommonService, },
]; };
IntegralUIScrollBar.propDecorators = {
    'height': [{ type: Input },],
    'largeChange': [{ type: Input },],
    'max': [{ type: Input },],
    'min': [{ type: Input },],
    'orientation': [{ type: Input },],
    'value': [{ type: Input },],
    'width': [{ type: Input },],
    'scrollStart': [{ type: Output },],
    'scrollEnd': [{ type: Output },],
    'valueChanged': [{ type: Output },],
    'onWindowMouseMove': [{ type: HostListener, args: ['document:mousemove', ['$event'],] },],
    'onWindowMouseUp': [{ type: HostListener, args: ['document:mouseup', ['$event'],] },],
};
//# sourceMappingURL=integralui.scrollbar.js.map