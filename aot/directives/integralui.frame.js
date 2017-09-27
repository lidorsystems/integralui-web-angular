import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer } from '@angular/core';
import { IntegralUIVisibility } from '../components/integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
var IntegralUIFrame = (function () {
function IntegralUIFrame(a,b,c){this.elemRef=a;this.elemRenderer=b;this.commonService=c;this.isActive=!1;this.startPos={x:0,y:0};this.currentPos={x:0,y:0};this.newSizeDistance={dx:0,dy:0};this.parentElem=null;this.sizeChanged=new EventEmitter}IntegralUIFrame.prototype.ngAfterViewInit=function(){this.resizerElem=this.elemRenderer.createElement(this.elemRef.nativeElement,"div");this.elemRenderer.setElementClass(this.resizerElem,"iui-frame",!0);this.settings.visible==IntegralUIVisibility.Hover&&this.hideFrame()};
IntegralUIFrame.prototype.ngOnDestroy=function(){this.resizerElem&&this.resizerElem.remove()};IntegralUIFrame.prototype.onMouseEnter=function(a){this.settings.visible==IntegralUIVisibility.Hover&&this.showFrame()};IntegralUIFrame.prototype.onMouseLeave=function(){this.settings.visible==IntegralUIVisibility.Hover&&this.hideFrame()};
IntegralUIFrame.prototype.onMouseDown=function(a){if(1==a.buttons){var b=this.getElemSize();a.offsetX>b.width-16&&a.offsetY>b.height-16?(this.isActive=!0,this.startPos={x:a.pageX,y:a.pageY}):this.isActive=!1}};IntegralUIFrame.prototype.onMouseUp=function(a){this.isActive=!1};
IntegralUIFrame.prototype.onWindowMouseMove=function(a){1==a.buttons&&this.isActive&&(this.newSizeDistance={dx:a.pageX-this.startPos.x,dy:a.pageY-this.startPos.y},this.updateSize(this.newSizeDistance),this.startPos={x:a.pageX,y:a.pageY})};IntegralUIFrame.prototype.onWindowMouseUp=function(a){this.isActive=!1};
IntegralUIFrame.prototype.hideFrame=function(){this.resizerElem&&this.elemRef&&(this.elemRenderer.setElementStyle(this.resizerElem,"display","none"),this.elemRenderer.setElementStyle(this.elemRef.nativeElement,"border-color","transparent"))};IntegralUIFrame.prototype.showFrame=function(){this.resizerElem&&this.elemRef&&(this.elemRenderer.setElementStyle(this.resizerElem,"display","block"),this.elemRenderer.setElementStyle(this.elemRef.nativeElement,"border-color","#bcbcbc"))};
IntegralUIFrame.prototype.getElemSize=function(){return{width:this.elemRef.nativeElement.offsetWidth-2,height:this.elemRef.nativeElement.offsetHeight-2}};
/*
  filename: integralui.frame.js
  version : 1.2.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
IntegralUIFrame.prototype.updateSize=function(a){var b=this.getElemSize(),c=this.commonService.getPadding(this.elemRef.nativeElement);16<b.width+a.dx&&(b.width=b.width+a.dx-(c.left+c.right));16<b.height+a.dy&&(b.height=b.height+a.dy-(c.top+c.bottom));this.elemRenderer.setElementStyle(this.elemRef.nativeElement,"width",b.width+"px");this.elemRenderer.setElementStyle(this.elemRef.nativeElement,"height",b.height+"px");this.sizeChanged.emit(b)};    return IntegralUIFrame;
}());
export { IntegralUIFrame };
IntegralUIFrame.decorators = [
    { type: Directive, args: [{
                selector: '[iuiFrame]'
            },] },
];
/** @nocollapse */
IntegralUIFrame.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
    { type: IntegralUICommonService, },
]; };
IntegralUIFrame.propDecorators = {
    'settings': [{ type: Input, args: ['iuiFrame',] },],
    'sizeChanged': [{ type: Output },],
    'onMouseEnter': [{ type: HostListener, args: ['mouseenter', ['$event'],] },],
    'onMouseLeave': [{ type: HostListener, args: ['mouseleave',] },],
    'onMouseDown': [{ type: HostListener, args: ['mousedown', ['$event'],] },],
    'onMouseUp': [{ type: HostListener, args: ['mouseup', ['$event'],] },],
    'onWindowMouseMove': [{ type: HostListener, args: ['document:mousemove', ['$event'],] },],
    'onWindowMouseUp': [{ type: HostListener, args: ['document:mouseup', ['$event'],] },],
};
//# sourceMappingURL=integralui.frame.js.map