/*
  filename: integralui.paginator.js
  version : 1.2.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
var IntegralUIPaginator = (function () {
function IntegralUIPaginator(){this.minPageNumber=this.maxPageNumber=this.currentPageNumber=0;this.numPages="0";this.inputWidth=30;this.prevValue=0;this.pageChanged=new EventEmitter;this.updateCurrentPage=function(){0==this.currentPageNumber?this.currentPageNumber=0<this.maxPageNumber?1:this.currentPageNumber:(this.currentPageNumber<this.minPageNumber&&(this.currentPageNumber=this.minPageNumber),this.currentPageNumber>this.maxPageNumber&&(this.currentPageNumber=this.maxPageNumber));this.currentPageNumber!=
this.prevValue&&this.pageChanged.emit({value:this.currentPageNumber});this.prevValue=this.currentPageNumber}}Object.defineProperty(IntegralUIPaginator.prototype,"maxPages",{get:function(){return this.maxPageNumber},set:function(a){this.maxPageNumber!=a&&(this.maxPageNumber=a,0<a&&(this.minPageNumber=1));this.updateCurrentPage()},enumerable:!0,configurable:!0});
Object.defineProperty(IntegralUIPaginator.prototype,"currentPage",{get:function(){return this.currentPageNumber},set:function(a){this.prevValue=this.currentPageNumber;this.currentPageNumber!=a&&(this.currentPageNumber=a);this.updateCurrentPage()},enumerable:!0,configurable:!0});IntegralUIPaginator.prototype.ngAfterViewInit=function(){var a=this,b=setTimeout(function(){a.updateCurrentPage();clearTimeout(b)},1);a.updateLayout()};
IntegralUIPaginator.prototype.firstPage=function(){this.currentPage!=this.minPageNumber&&(this.currentPage=this.minPageNumber)};IntegralUIPaginator.prototype.lastPage=function(){this.currentPage!=this.maxPageNumber&&(this.currentPage=this.maxPageNumber)};IntegralUIPaginator.prototype.nextPage=function(){this.currentPage<this.maxPageNumber&&this.currentPage++};IntegralUIPaginator.prototype.prevPage=function(){this.currentPage>this.minPageNumber&&this.currentPage--};
IntegralUIPaginator.prototype.onCurrentPageChange=function(a){this.pageChanged.emit({value:a})};IntegralUIPaginator.prototype.updateLayout=function(){this.inputWidth=this.inputLabelElem.nativeElement.offsetWidth+20};
    return IntegralUIPaginator;
}());
export { IntegralUIPaginator };
IntegralUIPaginator.decorators = [
    { type: Component, args: [{
                selector: 'iui-paginator',
                template: "<div class=\"iui-paginator\" data-element=\"paginator\">\n  \t\t\t<span class=\"iui-paginator-button iui-paginator-first\" (click)=\"firstPage()\" [ngStyle]=\"{ 'opacity': currentPageNumber==minPageNumber ? 0.5 : 1 }\"></span>\n  \t\t\t<span class=\"iui-paginator-button iui-paginator-prev\" (click)=\"prevPage()\" [ngStyle]=\"{ 'opacity': currentPageNumber==minPageNumber ? 0.5 : 1 }\"></span>\n  \t\t\t<input type=\"number\" class=\"iui-paginator-input\" [(ngModel)]=\"currentPageNumber\" (change)=\"onCurrentPageChange(currentPageNumber)\" min=\"{{minPageNumber}}\" max=\"{{maxPageNumber}}\" [ngStyle]=\"{ width: inputWidth + 'px' }\" />\n  \t\t\t<span class=\"iui-paginator-label\" #inputLabel> / {{maxPageNumber}}</span>\n  \t\t\t<span class=\"iui-paginator-button iui-paginator-next\" (click)=\"nextPage()\" [ngStyle]=\"{ 'opacity': currentPageNumber==maxPageNumber ? 0.5 : 1 }\"></span>\n  \t\t\t<span class=\"iui-paginator-button iui-paginator-last\" (click)=\"lastPage()\" [ngStyle]=\"{ 'opacity': currentPageNumber==maxPageNumber ? 0.5 : 1 }\"></span>\n\t\t</div>\n\t"
            },] },
];
/** @nocollapse */
IntegralUIPaginator.ctorParameters = function () { return []; };
IntegralUIPaginator.propDecorators = {
    'inputLabelElem': [{ type: ViewChild, args: ['inputLabel', { read: ElementRef },] },],
    'maxPages': [{ type: Input },],
    'currentPage': [{ type: Input },],
    'pageChanged': [{ type: Output },],
};
//# sourceMappingURL=integralui.paginator.js.map