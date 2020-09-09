/*
  filename: integralui.splitter.js
  version : 20.2.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
"use strict";var __extends=this&&this.__extends||function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)if(t.hasOwnProperty(i))e[i]=t[i]})(t,i)};return function(t,i){e(t,i);function n(){this.constructor=t}t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),i0=require("@angular/core"),i1=require("../services/integralui.common.service"),i2=require("@angular/common"),_c0=["handle"],IntegralUISplitter=function(e){__extends(t,e);function t(t,i,n){var l=e.call(this,n)||this;l.elemRef=t;l.elemRenderer=i;l.commonService=n;l.clientSize={width:0,height:0};l.currentSplitterDistance=0;l.maxPos={x:0,y:0};l.isVisible=!0;l.panel1Size={width:0,height:0};l.panel2Size={width:0,height:0};l.splitterSize={width:0,height:0};l.splitterHandleSize={width:0,height:0};l.prevMaxPos={x:0,y:0};l.handleClass=[];l.orientation=integralui_core_1.IntegralUIOrientation.Vertical;l.orientationChanged=new core_1.EventEmitter;l.splitterMoved=new core_1.EventEmitter;l.splitterMoving=new core_1.EventEmitter;l.splitterStartPos={x:0,y:0};l.isSplitterActive=!1;return l}t.prototype.getMaxPos=function(){return this.maxPos};Object.defineProperty(t.prototype,"splitterDistance",{get:function(){return this.currentSplitterDistance},set:function(e){if(this.currentSplitterDistance!=e){this.currentSplitterDistance=e;this.splitterMoved.emit({value:e});this.updateLayout()}},enumerable:!0,configurable:!0});Object.defineProperty(t.prototype,"panel2",{get:function(){return this.currentPanel2},set:function(e){if(this.currentPanel2!=e){this.currentPanel2=e;this.updateLayout()}},enumerable:!0,configurable:!0});Object.defineProperty(t.prototype,"visible",{get:function(){return this.isVisible},set:function(e){if(this.isVisible!=e)this.isVisible=e},enumerable:!0,configurable:!0});t.prototype.ngOnInit=function(){this.generalClassName="iui-splitter";this.handleClassName=this.generalClassName+"-handle";this.initStyle()};t.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},handle:{general:this.handleClassName,horizontal:this.handleClassName+"-horizontal",vertical:this.handleClassName+"-vertical"}};this.updateStyle(this.controlStyle);this.updateControlClass();this.updateHandleClass()};t.prototype.ngAfterViewInit=function(){};t.prototype.ngAfterContentInit=function(){this.initLayout();this.updateSettings()};t.prototype.initLayout=function(){var e=this,t=setTimeout(function(){var i={top:0,right:0,bottom:0,left:0};e.clientSize={width:e.elemRef.nativeElement.parentElement.clientWidth,height:e.elemRef.nativeElement.parentElement.clientHeight};if(e.panel1&&e.panel1.nativeElement){i=e.commonService.getBorderWidth(e.panel1.nativeElement);e.panel1Size={width:e.panel1.nativeElement.offsetWidth+i.left+i.right,height:e.panel1.nativeElement.offsetHeight+i.top+i.bottom}}if(e.panel2&&e.panel2.nativeElement){i=e.commonService.getBorderWidth(e.panel2.nativeElement);e.panel2Size={width:e.panel2.nativeElement.offsetWidth+i.left+i.right,height:e.panel2.nativeElement.offsetHeight+i.top+i.bottom}}e.splitterHandleSize={width:e.handleElem.nativeElement.offsetWidth,height:e.handleElem.nativeElement.offsetHeight};if(e.orientation==integralui_core_1.IntegralUIOrientation.Vertical)e.splitterSize={width:e.splitterHandleSize.width,height:e.clientSize.height};else e.splitterSize={width:e.clientSize.width,height:e.splitterHandleSize.height};e.maxPos={x:e.clientSize.width-e.splitterHandleSize.width,y:e.clientSize.height-e.splitterHandleSize.height};e.prevMaxPos.x=e.maxPos.x;e.prevMaxPos.y=e.maxPos.y;if(0==e.currentSplitterDistance)e.currentSplitterDistance=e.orientation==integralui_core_1.IntegralUIOrientation.Vertical?e.panel1Size.width:e.panel1Size.height;e.updateLayout();clearTimeout(t)},1)};t.prototype.ngAfterContentChecked=function(){this.clientRect={width:this.elemRef.nativeElement.firstElementChild.clientWidth,height:this.elemRef.nativeElement.firstElementChild.clientHeight};if(this.clientRect.width!=this.prevClientRect.width){this.updateLayout();this.prevClientRect.width=this.clientRect.width}else if(this.clientRect.height!=this.prevClientRect.height){this.updateLayout();this.prevClientRect.height=this.clientRect.height}};t.prototype.updateSettings=function(){this.clientSize={width:this.elemRef.nativeElement.parentElement.clientWidth,height:this.elemRef.nativeElement.parentElement.clientHeight};if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical)this.splitterSize={width:this.splitterHandleSize.width,height:this.clientSize.height};else this.splitterSize={width:this.clientSize.width,height:this.splitterHandleSize.height};this.maxPos={x:this.clientSize.width-this.splitterHandleSize.width,y:this.clientSize.height-this.splitterHandleSize.height};if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical&&this.maxPos.x!=this.prevMaxPos.x){var e=Math.floor((this.maxPos.x-this.prevMaxPos.x)/2);if(0==this.splitterDistance)this.splitterDistance+=e;else{this.panel2Size.width=this.maxPos.x-this.splitterDistance-this.splitterHandleSize.width;this.updatePanelSize()}this.prevMaxPos.x=this.maxPos.x}else if(this.orientation==integralui_core_1.IntegralUIOrientation.Horizontal&&this.maxPos.y!=this.prevMaxPos.y){var t=Math.floor((this.maxPos.y-this.prevMaxPos.y)/2);if(0==this.splitterDistance)this.splitterDistance+=t;else{this.panel2Size.height=this.maxPos.y-this.splitterDistance-this.splitterHandleSize.height;this.updatePanelSize()}this.prevMaxPos.y=this.maxPos.y}};t.prototype.calcSplitterDistance=function(e,t){var i=this.currentSplitterDistance;if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical){if(e&&t)i+=t.x-e.x;i=Math.min(Math.max(0,i),this.maxPos.x);this.panel1Size.width=i;this.panel2Size.width=this.maxPos.x-i-this.splitterHandleSize.width}else{if(e&&t)i+=t.y-e.y;i=Math.min(Math.max(0,i),this.maxPos.y);this.panel1Size.height=i;this.panel2Size.height=this.maxPos.y-i-this.splitterHandleSize.height}if(this.currentSplitterDistance!=i){var n={cancel:!1,value:i};this.splitterMoving.emit(n);if(1!=n.cancel)this.currentSplitterDistance=i}};t.prototype.updateLayout=function(e,t){var i=this;if(i.panel1&&i.panel2)var n=setTimeout(function(){i.calcSplitterDistance(e,t);i.updatePanelSize();i.updateSettings();clearTimeout(n)},10)};t.prototype.updatePanelSize=function(){if(this.panel1&&this.panel2)if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical){this.elemRenderer.setStyle(this.panel1.nativeElement,"width",this.panel1Size.width+"px");this.elemRenderer.setStyle(this.panel2.nativeElement,"width",this.panel2Size.width+"px")}else{this.elemRenderer.setStyle(this.panel1.nativeElement,"height",this.panel1Size.height+"px");this.elemRenderer.setStyle(this.panel2.nativeElement,"height",this.panel2Size.height+"px")}};t.prototype.splitterMouseDown=function(e){if(this.isEnabled){var t=this.commonService.getShiftPos(),i={x:e.pageX-t.x,y:e.pageY-t.y};this.splitterStartPos=i;this.isSplitterActive=!0}};t.prototype.onWindowMouseMove=function(e){if(this.isEnabled&&1==e.buttons&&this.isSplitterActive){var t=this.commonService.getShiftPos(),i={x:e.pageX-t.x,y:e.pageY-t.y};this.updateLayout(this.splitterStartPos,i);this.splitterStartPos=i}};t.prototype.onWindowMouseUp=function(e){if(this.isEnabled&&this.isSplitterActive){this.isSplitterActive=!1;this.splitterMoved.emit({value:this.currentSplitterDistance})}};t.prototype.onResize=function(e){this.updateSettings()};t.prototype.getControlStyle=function(){var e={cursor:"ew-resize",display:this.isVisible?"block":"none",width:"auto",height:"auto"};if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical){e["border-top-width"]=0;e["border-bottom-width"]=0;e.display=this.isVisible?"inline-block":"none";e.height="100%";if(this.ctrlSize.width>0)e.width=this.ctrlSize.width+"px"}else{e["border-left-width"]=0;e["border-right-width"]=0;e.cursor="ns-resize";e.width="100%";if(this.ctrlSize.height>0)e.height=this.ctrlSize.height+"px"}return e};t.prototype.getSplitterHandleStyle=function(){var e={"margin-top":"0","margin-left":"0"};if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical)e["margin-top"]=(this.clientSize.height-this.splitterHandleSize.height)/2+"px";else e["margin-left"]=(this.clientSize.width-this.splitterHandleSize.width)/2+"px";return e};t.prototype.updateHandleClass=function(){this.handleClass.length=0;this.handleClass.push(this.handleClassName);this.handleClass.push(this.options.currentStyle.handle.general);if(this.orientation==integralui_core_1.IntegralUIOrientation.Vertical)this.handleClass.push(this.options.currentStyle.handle.vertical);else this.handleClass.push(this.options.currentStyle.handle.horizontal)};t.prototype.getHandleClass=function(){return this.handleClass};t.prototype.getHandleStyle=function(e){if(this.commonService.isString(e))return e;else if(e)return{general:this.commonService.isFieldAvailable(e.general,this.handleClassName),horizontal:this.commonService.isFieldAvailable(e.horizontal,this.handleClassName+"-horizontal"),vertical:this.commonService.isFieldAvailable(e.vertical,this.handleClassName+"-vertical")};else return{general:this.defaultStyle.handle.general,horizontal:this.defaultStyle.handle.horizontal,vertical:this.defaultStyle.handle.vertical}};t.prototype.updateStyle=function(e){if(e)this.options.currentStyle={general:this.getGeneralStyle(e.general),handle:this.getHandleStyle(e.handle)};else this.options.currentStyle={general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},handle:{general:this.defaultStyle.handle.general,horizontal:this.defaultStyle.handle.horizontal,vertical:this.defaultStyle.handle.vertical}}};t.ɵfac=function(e){return new(e||t)(i0.ɵɵdirectiveInject(i0.ElementRef),i0.ɵɵdirectiveInject(i0.Renderer2),i0.ɵɵdirectiveInject(i1.IntegralUICommonService))};t.ɵcmp=i0.ɵɵdefineComponent({type:t,selectors:[["iui-splitter"]],viewQuery:function(e,t){if(1&e)i0.ɵɵviewQuery(_c0,!0);if(2&e){var i;i0.ɵɵqueryRefresh(i=i0.ɵɵloadQuery())&&(t.handleElem=i.first)}},hostBindings:function(e,t){if(1&e)i0.ɵɵlistener("mousemove",function(e){return t.onWindowMouseMove(e)},!1,i0.ɵɵresolveDocument)("mouseup",function(e){return t.onWindowMouseUp(e)},!1,i0.ɵɵresolveDocument)("resize",function(e){return t.onResize(e)},!1,i0.ɵɵresolveWindow)},inputs:{controlStyle:"controlStyle",data:"data",enabled:"enabled",name:"name",size:"size",state:"state",orientation:"orientation",panel1:"panel1",panel3:"panel3",splitterDistance:"splitterDistance",panel2:"panel2",visible:"visible"},outputs:{orientationChanged:"orientationChanged",splitterMoved:"splitterMoved",splitterMoving:"splitterMoving"},features:[i0.ɵɵInheritDefinitionFeature],decls:3,vars:4,consts:[[3,"ngClass","ngStyle","mousedown"],[3,"ngClass","ngStyle"],["handle",""]],template:function(e,t){if(1&e){i0.ɵɵelementStart(0,"div",0);i0.ɵɵlistener("mousedown",function(e){return t.splitterMouseDown(e)});i0.ɵɵelement(1,"span",1,2);i0.ɵɵelementEnd()}if(2&e){i0.ɵɵproperty("ngClass",t.getControlClass())("ngStyle",t.getControlStyle());i0.ɵɵadvance(1);i0.ɵɵproperty("ngClass",t.getHandleClass())("ngStyle",t.getSplitterHandleStyle())}},directives:[i2.NgClass,i2.NgStyle],encapsulation:2});return t}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUISplitter=IntegralUISplitter;