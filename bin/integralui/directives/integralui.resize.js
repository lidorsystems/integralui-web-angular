/*
  filename: integralui.resize.js
  version : 20.3.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),integralui_common_service_1=require("../services/integralui.common.service"),i0=require("@angular/core"),i1=require("../services/integralui.common.service"),IntegralUIResize=function(){function e(e,i){this.elemRef=e;this.commonService=i;this.changeTimer=null;this.elemSize={width:0,height:0};this.prevElemSize={width:0,height:0};this.elemSizeChanged=new core_1.EventEmitter}e.prototype.ngAfterViewInit=function(){var e=this;e.elemSize={width:e.elemRef.nativeElement.offsetWidth,height:e.elemRef.nativeElement.offsetHeight};e.prevElemSize.width=e.elemSize.width;e.prevElemSize.height=e.elemSize.height;var i=e.settings&&e.settings.interval?e.settings.interval:100;e.changeTimer=setInterval(function(){e.checkForSizeChanges()},i)};e.prototype.ngOnDestroy=function(){if(this.changeTimer)clearInterval(this.changeTimer)};e.prototype.checkForSizeChanges=function(){this.elemSize={width:this.elemRef.nativeElement.offsetWidth,height:this.elemRef.nativeElement.offsetHeight};var e=!1;if(this.elemSize.width!=this.prevElemSize.width){this.prevElemSize.width=this.elemSize.width;e=!0}else if(this.elemSize.height!=this.prevElemSize.height){this.prevElemSize.height=this.elemSize.height;e=!0}if(e){var i=this.commonService.getBorderWidth(this.elemRef.nativeElement),t=this.commonService.getMargin(this.elemRef.nativeElement),n=this.commonService.getPadding(this.elemRef.nativeElement);this.elemSizeChanged.emit({borderWidth:i,margin:t,padding:n,size:this.elemSize})}};e.ɵfac=function(i){return new(i||e)(i0.ɵɵdirectiveInject(i0.ElementRef),i0.ɵɵdirectiveInject(i1.IntegralUICommonService))};e.ɵdir=i0.ɵɵdefineDirective({type:e,selectors:[["","iuiResize",""]],inputs:{settings:["iuiResize","settings"]},outputs:{elemSizeChanged:"elemSizeChanged"}});return e}();exports.IntegralUIResize=IntegralUIResize;