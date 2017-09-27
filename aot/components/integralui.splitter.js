/*
  filename: integralui.splitter.js
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
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIOrientation } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
var IntegralUISplitter = (function (_super) {
__extends(IntegralUISplitter,_super);
function IntegralUISplitter(a,d,b){var c=_super.call(this,b)||this;c.elemRef=a;c.elemRenderer=d;c.commonService=b;c.clientSize={width:0,height:0};c.currentSplitterDistance=0;c.maxPos={x:0,y:0};c.panel1Size={width:0,height:0};c.panel2Size={width:0,height:0};c.splitterSize={width:0,height:0};c.splitterHandleSize={width:0,height:0};c.handleClass=[];c.orientation=IntegralUIOrientation.Vertical;c.orientationChanged=new EventEmitter;c.splitterMoved=new EventEmitter;c.splitterMoving=new EventEmitter;c.splitterStartPos=
{x:0,y:0};c.isSplitterActive=!1;return c}Object.defineProperty(IntegralUISplitter.prototype,"splitterDistance",{get:function(){return this.currentSplitterDistance},set:function(a){this.currentSplitterDistance!=a&&(this.currentSplitterDistance=a,this.splitterMoved.emit({value:a}),this.updateLayout())},enumerable:!0,configurable:!0});IntegralUISplitter.prototype.ngOnInit=function(){this.generalClassName="iui-splitter";this.handleClassName=this.generalClassName+"-handle";this.initStyle()};
IntegralUISplitter.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},handle:{general:this.handleClassName,horizontal:this.handleClassName+"-horizontal",vertical:this.handleClassName+"-vertical"}};this.updateStyle(this.controlStyle);this.updateControlClass();this.updateHandleClass()};
IntegralUISplitter.prototype.ngAfterViewInit=function(){};
IntegralUISplitter.prototype.ngAfterContentInit=function(){var a=this,d=setTimeout(function(){a.clientSize={width:a.elemRef.nativeElement.parentElement.clientWidth,height:a.elemRef.nativeElement.parentElement.clientHeight};if(a.panel1&&a.panel1.nativeElement){var b=a.commonService.getBorderWidth(a.panel1.nativeElement);a.panel1Size={width:a.panel1.nativeElement.offsetWidth+b.left+b.right,height:a.panel1.nativeElement.offsetHeight+b.top+b.bottom}}a.panel2&&a.panel2.nativeElement&&(b=a.commonService.getBorderWidth(a.panel2.nativeElement),
a.panel2Size={width:a.panel2.nativeElement.offsetWidth+b.left+b.right,height:a.panel2.nativeElement.offsetHeight+b.top+b.bottom});a.splitterHandleSize={width:a.handleElem.nativeElement.offsetWidth,height:a.handleElem.nativeElement.offsetHeight};a.splitterSize=a.orientation==IntegralUIOrientation.Vertical?{width:a.splitterHandleSize.width,height:a.clientSize.height}:{width:a.clientSize.width,height:a.splitterHandleSize.height};a.maxPos={x:a.panel1Size.width+a.panel2Size.width+5,y:a.panel1Size.height+
a.panel2Size.height+5};0==a.currentSplitterDistance&&(a.currentSplitterDistance=a.orientation==IntegralUIOrientation.Vertical?a.panel1Size.width:a.panel1Size.height);a.updateLayout();clearTimeout(d)},1)};
IntegralUISplitter.prototype.ngAfterContentChecked=function(){this.clientSize={width:this.elemRef.nativeElement.parentElement.clientWidth,height:this.elemRef.nativeElement.parentElement.clientHeight};this.splitterSize=this.orientation==IntegralUIOrientation.Vertical?{width:this.splitterHandleSize.width,height:this.clientSize.height}:{width:this.clientSize.width,height:this.splitterHandleSize.height}};
IntegralUISplitter.prototype.calcSplitterDistance=function(a,d){var b=this.currentSplitterDistance;this.orientation==IntegralUIOrientation.Vertical?(a&&d&&(b+=d.x-a.x),b=Math.min(Math.max(0,b),this.maxPos.x),this.panel1Size.width=b,this.panel2Size.width=this.maxPos.x-b-this.splitterHandleSize.width):(a&&d&&(b+=d.y-a.y),b=Math.min(Math.max(0,b),this.maxPos.y),this.panel1Size.height=b,this.panel2Size.height=this.maxPos.y-b-this.splitterHandleSize.height);if(this.currentSplitterDistance!=b){var c={cancel:!1,
value:b};this.splitterMoving.emit(c);1!=c.cancel&&(this.currentSplitterDistance=b)}};
IntegralUISplitter.prototype.updateLayout=function(a,d){var b=this;if(b.panel1&&b.panel2)var c=setTimeout(function(){b.calcSplitterDistance(a,d);b.orientation==IntegralUIOrientation.Vertical?(b.elemRenderer.setElementStyle(b.panel1.nativeElement,"width",b.panel1Size.width+"px"),b.elemRenderer.setElementStyle(b.panel2.nativeElement,"width",b.panel2Size.width+"px")):(b.elemRenderer.setElementStyle(b.panel1.nativeElement,"height",b.panel1Size.height+"px"),b.elemRenderer.setElementStyle(b.panel2.nativeElement,
"height",b.panel2Size.height+"px"));clearTimeout(c)},10)};IntegralUISplitter.prototype.splitterMouseDown=function(a){var d=this.commonService.getShiftPos();this.splitterStartPos={x:a.pageX-d.x,y:a.pageY-d.y};this.isSplitterActive=!0};IntegralUISplitter.prototype.onWindowMouseMove=function(a){if(1==a.buttons&&this.isSplitterActive){var d=this.commonService.getShiftPos();a={x:a.pageX-d.x,y:a.pageY-d.y};this.updateLayout(this.splitterStartPos,a);this.splitterStartPos=a}};
IntegralUISplitter.prototype.onWindowMouseUp=function(a){this.isSplitterActive=!1;this.splitterMoved.emit({value:this.currentSplitterDistance})};IntegralUISplitter.prototype.getSplitterStyle=function(){var a={cursor:"ew-resize",width:"auto",height:"auto"};this.orientation==IntegralUIOrientation.Vertical?a.height=this.splitterSize.height-2+"px":(a.cursor="ns-resize",a.width=this.splitterSize.width-2+"px");return a};
IntegralUISplitter.prototype.getSplitterHandleStyle=function(){var a={"margin-top":"0","margin-left":"0"};this.orientation==IntegralUIOrientation.Vertical?a["margin-top"]=(this.clientSize.height-this.splitterHandleSize.height)/2+"px":a["margin-left"]=(this.clientSize.width-this.splitterHandleSize.width)/2+"px";return a};
IntegralUISplitter.prototype.updateHandleClass=function(){this.handleClass.length=0;this.handleClass.push(this.handleClassName);this.handleClass.push(this.options.currentStyle.handle.general);this.orientation==IntegralUIOrientation.Vertical?this.handleClass.push(this.options.currentStyle.handle.vertical):this.handleClass.push(this.options.currentStyle.handle.horizontal)};IntegralUISplitter.prototype.getHandleClass=function(){return this.handleClass};
IntegralUISplitter.prototype.getHandleStyle=function(a){return this.commonService.isString(a)?a:a?{general:this.commonService.isFieldAvailable(a.general,this.handleClassName),horizontal:this.commonService.isFieldAvailable(a.horizontal,this.handleClassName+"-horizontal"),vertical:this.commonService.isFieldAvailable(a.vertical,this.handleClassName+"-vertical")}:{general:this.defaultStyle.handle.general,horizontal:this.defaultStyle.handle.horizontal,vertical:this.defaultStyle.handle.vertical}};
IntegralUISplitter.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),handle:this.getHandleStyle(a.handle)}:{general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},handle:{general:this.defaultStyle.handle.general,horizontal:this.defaultStyle.handle.horizontal,vertical:this.defaultStyle.handle.vertical}}};    return IntegralUISplitter;
}(IntegralUIBaseComponent));
export { IntegralUISplitter };
IntegralUISplitter.decorators = [
    { type: Component, args: [{
                selector: 'iui-splitter',
                template: "\n\t\t<div [ngClass]=\"getControlClass()\" (mousedown)=\"splitterMouseDown($event)\" [ngStyle]=\"getSplitterStyle()\">\n\t\t\t<span #handle [ngClass]=\"getHandleClass()\" [ngStyle]=\"getSplitterHandleStyle()\"></span>\n\t\t</div>\n\t",
                inputs: ['controlStyle', 'data', 'name', 'state'],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
IntegralUISplitter.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
    { type: IntegralUICommonService, },
]; };
IntegralUISplitter.propDecorators = {
    'handleElem': [{ type: ViewChild, args: ['handle',] },],
    'orientation': [{ type: Input },],
    'panel1': [{ type: Input },],
    'panel2': [{ type: Input },],
    'splitterDistance': [{ type: Input },],
    'orientationChanged': [{ type: Output },],
    'splitterMoved': [{ type: Output },],
    'splitterMoving': [{ type: Output },],
    'onWindowMouseMove': [{ type: HostListener, args: ['document:mousemove', ['$event'],] },],
    'onWindowMouseUp': [{ type: HostListener, args: ['document:mouseup', ['$event'],] },],
};
//# sourceMappingURL=integralui.splitter.js.map