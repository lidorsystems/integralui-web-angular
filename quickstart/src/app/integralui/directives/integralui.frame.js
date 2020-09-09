/*
  filename: integralui.frame.js
  version : 20.2.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),integralui_core_1=require("../components/integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),i0=require("@angular/core"),i1=require("../services/integralui.common.service"),IntegralUIFrame=function(){function e(e,t,i){this.elemRef=e;this.elemRenderer=t;this.commonService=i;this.isActive=!1;this.startPos={x:0,y:0};this.currentPos={x:0,y:0};this.newSizeDistance={dx:0,dy:0};this.parentElem=null;this.sizeChanging=new core_1.EventEmitter;this.sizeChanged=new core_1.EventEmitter}e.prototype.ngAfterViewInit=function(){this.resizerElem=this.elemRenderer.createElement("div");this.elemRenderer.appendChild(this.elemRef.nativeElement,this.resizerElem);this.elemRenderer.addClass(this.resizerElem,"iui-frame");if(this.settings.visible==integralui_core_1.IntegralUIVisibility.Hover)this.hideFrame()};e.prototype.ngOnDestroy=function(){if(this.resizerElem)this.resizerElem.remove()};e.prototype.onMouseEnter=function(e){if(this.settings.visible==integralui_core_1.IntegralUIVisibility.Hover)this.showFrame()};e.prototype.onMouseLeave=function(){if(this.settings.visible==integralui_core_1.IntegralUIVisibility.Hover)this.hideFrame()};e.prototype.onMouseDown=function(e){if(1==e.buttons){var t=this.getElemSize();if(e.offsetX>t.width-16&&e.offsetY>t.height-16){this.isActive=!0;this.startPos={x:e.pageX,y:e.pageY}}else this.isActive=!1}};e.prototype.onMouseUp=function(e){this.isActive=!1};e.prototype.onWindowMouseMove=function(e){if(1==e.buttons&&this.isActive){this.newSizeDistance={dx:e.pageX-this.startPos.x,dy:e.pageY-this.startPos.y};this.updateSize(this.newSizeDistance);this.startPos={x:e.pageX,y:e.pageY}}};e.prototype.onWindowMouseUp=function(e){this.isActive=!1};e.prototype.hideFrame=function(){if(this.resizerElem&&this.elemRef){this.elemRenderer.setStyle(this.resizerElem,"display","none");this.elemRenderer.setStyle(this.elemRef.nativeElement,"border-color","transparent")}};e.prototype.showFrame=function(){if(this.resizerElem&&this.elemRef){this.elemRenderer.setStyle(this.resizerElem,"display","block");this.elemRenderer.setStyle(this.elemRef.nativeElement,"border-color","#bcbcbc")}};e.prototype.getElemSize=function(){return{width:this.elemRef.nativeElement.offsetWidth,height:this.elemRef.nativeElement.offsetHeight}};e.prototype.updateSize=function(e){var t=this.getElemSize(),i={cancel:!1,width:t.width,height:t.height,dx:e.dx,dy:e.dy};this.sizeChanging.emit(i);if(1!=i.cancel){var n=!1,s=this.commonService.getBorderWidth(this.elemRef.nativeElement),r=this.commonService.getPadding(this.elemRef.nativeElement),o=0!=this.settings.resizeWidth?!0:!1,h=0!=this.settings.resizeHeight?!0:!1,l=t;if(o&&t.width+e.dx>16){n=!0;l.width=t.width+e.dx-(s.left+s.right)-(r.left+r.right);this.elemRenderer.setStyle(this.elemRef.nativeElement,"width",l.width+"px")}if(h&&t.height+e.dy>16){n=!0;l.height=t.height+e.dy-(s.top+s.bottom)-(r.top+r.bottom);this.elemRenderer.setStyle(this.elemRef.nativeElement,"height",l.height+"px")}if(n)this.sizeChanged.emit(l)}};e.ɵfac=function(t){return new(t||e)(i0.ɵɵdirectiveInject(i0.ElementRef),i0.ɵɵdirectiveInject(i0.Renderer2),i0.ɵɵdirectiveInject(i1.IntegralUICommonService))};e.ɵdir=i0.ɵɵdefineDirective({type:e,selectors:[["","iuiFrame",""]],hostBindings:function(e,t){if(1&e)i0.ɵɵlistener("mouseenter",function(e){return t.onMouseEnter(e)})("mouseleave",function(){return t.onMouseLeave()})("mousedown",function(e){return t.onMouseDown(e)})("mouseup",function(e){return t.onMouseUp(e)})("mousemove",function(e){return t.onWindowMouseMove(e)},!1,i0.ɵɵresolveDocument)("mouseup",function(e){return t.onWindowMouseUp(e)},!1,i0.ɵɵresolveDocument)},inputs:{settings:["iuiFrame","settings"]},outputs:{sizeChanging:"sizeChanging",sizeChanged:"sizeChanged"}});return e}();exports.IntegralUIFrame=IntegralUIFrame;