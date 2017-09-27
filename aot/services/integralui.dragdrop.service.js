/*
  filename: integralui.dragdrop.service.js
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
var IntegralUIDragDropService = (function () {
function IntegralUIDragDropService(){this.data={action:"move",clone:null,dropPos:-1,source:null,sourceCtrl:null,sourceData:null,sourceIndex:-1,target:null,targetCtrl:null,type:""}}
IntegralUIDragDropService.prototype.getDropPosHalf=function(a,b,c){var d={left:b.x,top:b.y,right:b.x+b.width,bottom:b.y+b.height};if("horizontal"==c){d.right=b.x+b.width/2;if(this.checkHit(a.x,a.y,d))return 1;d.left=d.right;d.right=b.x+b.width}else{d.bottom=b.y+b.height/2;if(this.checkHit(a.x,a.y,d))return 1;d.top=d.bottom;d.bottom=b.y+b.height}return this.checkHit(a.x,a.y,d)?2:-1};
IntegralUIDragDropService.prototype.getDropPosHorizontal=function(a,b){var c={left:b.x+b.width/4,top:b.y,right:b.x+3*b.width/4,bottom:b.y+b.height};if(this.checkHit(a.x,a.y,c))return 0;c.right=c.left;c.left=b.x;if(this.checkHit(a.x,a.y,c))return 1;c.left=b.x+3*b.width/4;c.right=b.x+b.width;return this.checkHit(a.x,a.y,c)?2:-1};
IntegralUIDragDropService.prototype.getDropPosVertical=function(a,b){var c={left:b.x,top:b.y+b.height/4,right:b.x+b.width,bottom:b.y+3*b.height/4};if(this.checkHit(a.x,a.y,c))return 0;c.bottom=c.top;c.top=b.y;if(this.checkHit(a.x,a.y,c))return 1;c.top=b.y+3*b.height/4;c.bottom=b.y+b.height;return this.checkHit(a.x,a.y,c)?2:-1};IntegralUIDragDropService.prototype.checkHit=function(a,b,c){return a>=c.left&&a<=c.right&&b>=c.top&&b<=c.bottom?!0:!1};
IntegralUIDragDropService.prototype.clearData=function(){this.data={action:"move",clone:null,dropPos:-1,source:null,sourceCtrl:null,sourceData:null,sourceIndex:-1,target:null,targetCtrl:null,type:""}};IntegralUIDragDropService.prototype.getData=function(){return this.data};
IntegralUIDragDropService.prototype.setData=function(a){a&&(a.action&&(this.data.action=a.action),a.clone&&(this.data.clone=a.clone),isNaN(a.dropPos)||(this.data.dropPos=a.dropPos),a.source&&(this.data.source=a.source),a.sourceCtrl&&(this.data.sourceCtrl=a.sourceCtrl),a.sourceData&&(this.data.sourceData=a.sourceData),isNaN(a.sourceIndex)||(this.data.sourceIndex=a.sourceIndex),a.target&&(this.data.target=a.target),a.targetCtrl&&(this.data.targetCtrl=a.targetCtrl),a.type&&(this.data.type=a.type))};
IntegralUIDragDropService.prototype.hitTest=function(a,b,c){return this.checkHit(a,b,c)};IntegralUIDragDropService.prototype.getDropPos=function(a,b,c,d){return c?this.getDropPosHalf(a,b,d):"horizontal"==d?this.getDropPosHorizontal(a,b):this.getDropPosVertical(a,b)};    return IntegralUIDragDropService;
}());
export { IntegralUIDragDropService };
IntegralUIDragDropService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
IntegralUIDragDropService.ctorParameters = function () { return []; };
//# sourceMappingURL=integralui.dragdrop.service.js.map