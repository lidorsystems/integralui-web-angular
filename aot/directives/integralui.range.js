/*
  filename: integralui.range.js
  version : 1.2.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer } from '@angular/core';
import { IntegralUIAnchorStyle } from '../components/integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
var IntegralUIRange = (function () {
function IntegralUIRange(a,c,b){this.elemRef=a;this.elemRenderer=c;this.commonService=b;this.defaultSettings={anchor:IntegralUIAnchorStyle.Top|IntegralUIAnchorStyle.Left,factor:1,height:0,maxHeight:9999999,maxWidth:9999999,minHeight:0,minWidth:0,ref:"parent",width:0};this.resizeInterval=null;this.originalElemSize={width:0,height:0};this.sizeChanged=new EventEmitter}
IntegralUIRange.prototype.ngAfterViewInit=function(){var a=this;a.defaultSettings.width=parseInt(a.elemRef.nativeElement.width,10);var c={anchor:IntegralUIAnchorStyle.Top|IntegralUIAnchorStyle.Left,factor:1,height:0,maxHeight:9999999,maxWidth:9999999,minHeight:0,minWidth:0,ref:"parent",width:0};a.settings&&(c.anchor=a.commonService.isFieldAvailable(a.settings.anchor,a.defaultSettings.anchor),c.factor=a.commonService.isFieldAvailable(a.settings.factor,a.defaultSettings.factor),c.minWidth=parseInt(a.commonService.isFieldAvailable(a.settings.minWidth,
a.defaultSettings.minWidth),10),c.maxWidth=parseInt(a.commonService.isFieldAvailable(a.settings.maxWidth,a.defaultSettings.maxWidth),10),c.minHeight=parseInt(a.commonService.isFieldAvailable(a.settings.minHeight,a.defaultSettings.minHeight),10),c.maxHeight=parseInt(a.commonService.isFieldAvailable(a.settings.maxHeight,a.defaultSettings.maxHeight),10));var b=a.elemRef.nativeElement.parentElement.offsetWidth,k=a.elemRef.nativeElement.parentElement.offsetHeight,g=0,h=0;a.originalElemSize={width:a.elemRef.nativeElement.offsetWidth,
height:a.elemRef.nativeElement.offsetHeight};var d={dx:0,dy:0};a.resizeInterval=setInterval(function(){var e=a.elemRef.nativeElement.parentElement.offsetWidth-2,f=a.elemRef.nativeElement.parentElement.offsetHeight-2;e!=g&&(d.dx=(e-b)*c.factor);f!=h&&(d.dy=(f-k)*c.factor);a.settings&&"parent"==a.settings.ref&&a.updateSize(c,d);g=e;h=f},10)};IntegralUIRange.prototype.ngOnDestroy=function(){null!=this.resizeInterval&&clearInterval(this.resizeInterval)};IntegralUIRange.prototype.onMouseEnter=function(){this.sizeChanged.emit(null)};
IntegralUIRange.prototype.onChange=function(a){};IntegralUIRange.prototype.onResize=function(a){};
IntegralUIRange.prototype.updateSize=function(a,c){this.commonService.getPadding(this.elemRef.nativeElement.parentElement);if(a.anchor&IntegralUIAnchorStyle.Right){var b=this.originalElemSize.width+c.dx;b=b<a.minWidth?a.minWidth:b;b=b>a.maxWidth?a.maxWidth:b;this.elemRenderer.setElementStyle(this.elemRef.nativeElement,"width",b-2+"px")}a.anchor&IntegralUIAnchorStyle.Bottom&&(b=this.originalElemSize.height+c.dy,b=b<a.minHeight?a.minHeight:b,b=b>a.maxHeight?a.maxHeight:b,this.elemRenderer.setElementStyle(this.elemRef.nativeElement,
"height",b-2+"px"))};    return IntegralUIRange;
}());
export { IntegralUIRange };
IntegralUIRange.decorators = [
    { type: Directive, args: [{
                selector: '[iuiRange]'
            },] },
];
/** @nocollapse */
IntegralUIRange.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
    { type: IntegralUICommonService, },
]; };
IntegralUIRange.propDecorators = {
    'settings': [{ type: Input, args: ['iuiRange',] },],
    'sizeChanged': [{ type: Output },],
    'onMouseEnter': [{ type: HostListener, args: ['mouseenter',] },],
    'onChange': [{ type: HostListener, args: ['change',] },],
    'onResize': [{ type: HostListener, args: ['window:resize',] },],
};
//# sourceMappingURL=integralui.range.js.map