/*
  filename: integralui.resize.js
  version : 1.4.0
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_common_service_1=require("../services/integralui.common.service"),IntegralUIResize=function(){function a(b,a){this.elemRef=b;this.commonService=a;this.elemSize={width:0,height:0};this.prevElemSize={width:0,height:0};this.elemSizeChanged=new core_1.EventEmitter}a.prototype.ngAfterViewInit=function(){this.elemSize={width:this.elemRef.nativeElement.offsetWidth,height:this.elemRef.nativeElement.offsetHeight};this.prevElemSize.width=this.elemSize.width;this.prevElemSize.height=
this.elemSize.height};a.prototype.ngAfterContentChecked=function(){this.elemSize={width:this.elemRef.nativeElement.offsetWidth,height:this.elemRef.nativeElement.offsetHeight};var a=!1;this.elemSize.width!=this.prevElemSize.width?(this.prevElemSize.width=this.elemSize.width,a=!0):this.elemSize.height!=this.prevElemSize.height&&(this.prevElemSize.height=this.elemSize.height,a=!0);if(a){a=this.commonService.getBorderWidth(this.elemRef.nativeElement);var c=this.commonService.getMargin(this.elemRef.nativeElement),
d=this.commonService.getPadding(this.elemRef.nativeElement);this.elemSizeChanged.emit({borderWidth:a,margin:c,padding:d,size:this.elemSize})}};a.decorators=[{type:core_1.Directive,args:[{selector:"[iuiResize]"}]}];a.ctorParameters=function(){return[{type:core_1.ElementRef},{type:integralui_common_service_1.IntegralUICommonService}]};a.propDecorators={settings:[{type:core_1.Input,args:["iuiResize"]}],elemSizeChanged:[{type:core_1.Output}]};return a}();exports.IntegralUIResize=IntegralUIResize;