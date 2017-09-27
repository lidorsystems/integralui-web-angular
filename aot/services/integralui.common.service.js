/*
  filename: integralui.common.service.js
  version : 1.2.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import { Injectable } from '@angular/core';
var IntegralUICommonService = (function () {
function IntegralUICommonService(){}
IntegralUICommonService.prototype.calcMargin=function(a){return a?{top:getComputedStyle(a)["margin-top"]?parseInt(getComputedStyle(a)["margin-top"],10):getComputedStyle(a).marginTop?parseInt(getComputedStyle(a).marginTop,10):0,right:getComputedStyle(a)["margin-right"]?parseInt(getComputedStyle(a)["margin-right"],10):getComputedStyle(a).marginRight?parseInt(getComputedStyle(a).marginRight,10):0,bottom:getComputedStyle(a)["margin-bottom"]?parseInt(getComputedStyle(a)["margin-bottom"],10):getComputedStyle(a).marginBottom?
parseInt(getComputedStyle(a).marginBottom,10):0,left:getComputedStyle(a)["margin-left"]?parseInt(getComputedStyle(a)["margin-left"],10):getComputedStyle(a).marginLeft?parseInt(getComputedStyle(a).marginLeft,10):0}:{top:0,right:0,bottom:0,left:0}};IntegralUICommonService.prototype.checkHit=function(a,b,c){return a>=c.left&&a<=c.right&&b>=c.top&&b<=c.bottom?!0:!1};IntegralUICommonService.prototype.getBodyElem=function(a){for(var b=null;a;){if(null==a.offsetParent){b=a;break}a=a.offsetParent}return b};
IntegralUICommonService.prototype.getBorderWidth=function(a){return a?{top:getComputedStyle(a)["border-top-width"]?parseInt(getComputedStyle(a)["border-top-width"],10):getComputedStyle(a).borderTopWidth?parseInt(getComputedStyle(a).borderTopWidth,10):0,right:getComputedStyle(a)["border-right-width"]?parseInt(getComputedStyle(a)["border-right-width"],10):getComputedStyle(a).borderRightWidth?parseInt(getComputedStyle(a).borderRightWidth,10):0,bottom:getComputedStyle(a)["border-bottom-width"]?parseInt(getComputedStyle(a)["border-bottom-width"],
10):getComputedStyle(a).borderTopWidth?parseInt(getComputedStyle(a).borderTopWidth,10):0,left:getComputedStyle(a)["border-left-width"]?parseInt(getComputedStyle(a)["border-left-width"],10):getComputedStyle(a).borderLeftWidth?parseInt(getComputedStyle(a).borderLeftWidth,10):0}:{top:0,right:0,bottom:0,left:0}};IntegralUICommonService.prototype.getMargin=function(a){return a?this.calcMargin(a):{top:0,right:0,bottom:0,left:0}};
IntegralUICommonService.prototype.getMousePos=function(a){return{x:a.pageX?a.pageX:a.originalEvent?a.originalEvent.pageX:0,y:a.pageY?a.pageY:a.originalEvent?a.originalEvent.pageY:0}};
IntegralUICommonService.prototype.getPadding=function(a){return a?{top:getComputedStyle(a)["padding-top"]?parseInt(getComputedStyle(a)["padding-top"],10):getComputedStyle(a).paddingTop?parseInt(getComputedStyle(a).paddingTop,10):0,right:getComputedStyle(a)["padding-right"]?parseInt(getComputedStyle(a)["padding-right"],10):getComputedStyle(a).paddingRight?parseInt(getComputedStyle(a).paddingRight,10):0,bottom:getComputedStyle(a)["padding-bottom"]?parseInt(getComputedStyle(a)["padding-bottom"],10):
getComputedStyle(a).paddingBottom?parseInt(getComputedStyle(a).paddingBottom,10):0,left:getComputedStyle(a)["padding-left"]?parseInt(getComputedStyle(a)["padding-left"],10):getComputedStyle(a).paddingLeft?parseInt(getComputedStyle(a).paddingLeft,10):0}:{top:0,right:0,bottom:0,left:0}};IntegralUICommonService.prototype.getPageRect=function(a){return a?a.getBoundingClientRect():{top:0,right:0,bottom:0,left:0}};
IntegralUICommonService.prototype.getShiftPos=function(){return{x:0<document.body.scrollLeft?document.body.scrollLeft:0<document.documentElement.scrollLeft?document.documentElement.scrollLeft:0,y:0<document.body.scrollTop?document.body.scrollTop:0<document.documentElement.scrollTop?document.documentElement.scrollTop:0}};
IntegralUICommonService.prototype.getUniqueId=function(a){function b(){return(65536*(1+Math.random())|0).toString(16).substring(1)}a=a||"-";return b()+b()+a+b()+a+b()+a+b()+a+b()+b()+b()};IntegralUICommonService.prototype.isEqual=function(a,b){return a&&b?a.toString()===b.toString():!1};IntegralUICommonService.prototype.isFieldAvailable=function(a,b){return void 0!=a?a:b};IntegralUICommonService.prototype.isObject=function(a){return a?"object"==typeof a&&null!=a&&!Array.isArray(a):!1};
IntegralUICommonService.prototype.isString=function(a){return a?"string"==typeof a||a instanceof String:!1};    return IntegralUICommonService;
}());
export { IntegralUICommonService };
IntegralUICommonService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
IntegralUICommonService.ctorParameters = function () { return []; };
//# sourceMappingURL=integralui.common.service.js.map