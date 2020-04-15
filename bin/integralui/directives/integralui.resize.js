/*
  filename: integralui.resize.js
  version : 1.7.0
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_common_service_1=require("../services/integralui.common.service"),i0=require("@angular/core"),i1=require("../services/integralui.common.service"),IntegralUIResize=function(){function b(a,b){this.elemRef=a;this.commonService=b;this.changeTimer=null;this.elemSize={width:0,height:0};this.prevElemSize={width:0,height:0};this.elemSizeChanged=new core_1.EventEmitter}b.prototype.ngAfterViewInit=function(){var a=this;a.elemSize={width:a.elemRef.nativeElement.offsetWidth,
height:a.elemRef.nativeElement.offsetHeight};a.prevElemSize.width=a.elemSize.width;a.prevElemSize.height=a.elemSize.height;a.changeTimer=setInterval(function(){a.checkForSizeChanges()},a.settings&&a.settings.interval?a.settings.interval:100)};b.prototype.ngOnDestroy=function(){this.changeTimer&&clearInterval(this.changeTimer)};b.prototype.checkForSizeChanges=function(){this.elemSize={width:this.elemRef.nativeElement.offsetWidth,height:this.elemRef.nativeElement.offsetHeight};var a=!1;this.elemSize.width!=
this.prevElemSize.width?(this.prevElemSize.width=this.elemSize.width,a=!0):this.elemSize.height!=this.prevElemSize.height&&(this.prevElemSize.height=this.elemSize.height,a=!0);if(a){a=this.commonService.getBorderWidth(this.elemRef.nativeElement);var b=this.commonService.getMargin(this.elemRef.nativeElement),c=this.commonService.getPadding(this.elemRef.nativeElement);this.elemSizeChanged.emit({borderWidth:a,margin:b,padding:c,size:this.elemSize})}};b.\u0275fac=function(a){return new (a||b)(i0.\u0275\u0275directiveInject(i0.ElementRef),
i0.\u0275\u0275directiveInject(i1.IntegralUICommonService))};b.\u0275dir=i0.\u0275\u0275defineDirective({type:b,selectors:[["","iuiResize",""]],inputs:{settings:["iuiResize","settings"]},outputs:{elemSizeChanged:"elemSizeChanged"}});return b}();exports.IntegralUIResize=IntegralUIResize;
(function(){i0.\u0275setClassMetadata(IntegralUIResize,[{type:core_1.Directive,args:[{selector:"[iuiResize]"}]}],function(){return[{type:i0.ElementRef},{type:i1.IntegralUICommonService}]},{settings:[{type:core_1.Input,args:["iuiResize"]}],elemSizeChanged:[{type:core_1.Output}]})})();