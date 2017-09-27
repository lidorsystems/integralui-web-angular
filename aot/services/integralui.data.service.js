/*
  filename: integralui.data.service.js
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
var IntegralUIDataService = (function () {
function IntegralUIDataService(){this.data=[]}IntegralUIDataService.prototype.init=function(a){for(var b=this.data.length=0;b<a.length;b++){var c={data:a[b].data,fields:this.getDataFields(a[b].fields),key:a[b].key};this.data.push(c)}};
IntegralUIDataService.prototype.getDataFields=function(a){return a?{content:a.content?a.content:"content",icon:a.icon?a.icon:"icon",id:a.id?a.id:"id",pid:a.pid?a.pid:"pid",objects:a.objects?a.objects:"items",statusIcon:a.statusIcon?a.statusIcon:"statusIcon",subobjects:a.subobjects?a.subobjects:"subitems",text:a.text?a.text:"text"}:{content:"content",icon:"icon",id:"id",pid:"pid",objects:"items",statusIcon:"statusIcon",subobjects:"subitems",text:"text"}};
IntegralUIDataService.prototype.updateDataFields=function(a,b){var c=this.getData(b);c&&(c.fields=this.getDataFields(a))};IntegralUIDataService.prototype.clear=function(a,b){this.getList(a,b).length=0};IntegralUIDataService.prototype.insertAt=function(a,b,c,d){this.insert(a,b,c,null,!1,d)};
IntegralUIDataService.prototype.insert=function(a,b,c,d,e,f){a&&(d=this.getData(f))&&(d=d.fields,a[d.pid]=c?c[d.id]:"",c=this.getList(c,f))&&(0>b||null===b||void 0===b?c.push(a):(b=Math.max(Math.min(b,c.length),0),c.splice(b,0,a)),a[d.id]||(a[d.id]=this.getUniqueId()))};IntegralUIDataService.prototype.insertByRef=function(a,b,c,d){if(a&&b){var e=this.getParent(b,d),f=this.getList(e,d).indexOf(b);c&&(f+=1);this.insert(a,f,e,b,c,d);return f}};
IntegralUIDataService.prototype.removeAt=function(a,b,c,d){var e=null,f=this.getData(d);if(f){if(a){c=this.getParent(a,d);var g=this.getList(c,d);b=g.indexOf(a)}if(null===b||void 0===b)return{obj:e,result:!1};g=this.getList(c,d);if(0<=b&&b<g.length)return e=g[b],e[f.fields.pid]="",g.splice(b,1),{obj:e,result:!0}}return{obj:e,result:!1}};
IntegralUIDataService.prototype.createCloneIds=function(a,b,c){a[c.id]=this.getUniqueId();a[c.pid]=b;if(b=a[c.objects])for(var d=0;d<b.length;d++)this.createCloneIds(b[d],a[c.id],c)};IntegralUIDataService.prototype.clone=function(a,b){var c=this.getData(b);if(c){var d=JSON.parse(JSON.stringify(a));this.createCloneIds(d,null,c.fields);return d}return{}};IntegralUIDataService.prototype.findObjectById=function(a,b){var c=this.getData(b);if(c){var d=c.fields;c=c.data;return a?this.searchObj(a,c,d):null}return null};
IntegralUIDataService.prototype.findObjectByText=function(a,b){var c=this.getData(b);if(c){var d=c.fields;c=c.data;return void 0!=a?this.searchObj(a,c,d,"text"):null}return null};IntegralUIDataService.prototype.searchObj=function(a,b,c,d){var e=null;if(a&&b)for(var f=0,g=!1;!e&&f<b.length;){switch(d){case "text":b[f][c.text]&&(g=b[f][c.text].toString()===a.toString());break;default:b[f][c.id]&&(g=b[f][c.id].toString()===a.toString())}e=g?b[f]:this.searchObj(a,b[f][c.objects],c,d);f++}return e};
IntegralUIDataService.prototype.findParent=function(a,b,c){var d=null;if(a&&b)for(var e=0;!d&&e<b.length;)d=b[e][c.id]&&a[c.pid]&&b[e][c.id].toString()===a[c.pid].toString()?b[e]:this.findParent(a,b[e][c.objects],c),e++;return d};IntegralUIDataService.prototype.getData=function(a){var b=null;if(!this.getKey(a)&&0<this.data.length)b=this.data[0];else for(var c=0;c<this.data.length;c++)if(this.data[c].key==a){b=this.data[c];break}return b};
IntegralUIDataService.prototype.getKey=function(a){return a?a:null};IntegralUIDataService.prototype.getList=function(a,b){var c=this.getData(b);if(c){var d=c.fields;return a?(a[d.objects]||(a[d.objects]=[]),a[d.objects]):c.data}return[]};IntegralUIDataService.prototype.getParent=function(a,b){if(a){var c=this.getData(b);if(c)return this.findParent(a,c.data,c.fields)}return null};
IntegralUIDataService.prototype.getUniqueId=function(a){function b(){return(65536*(1+Math.random())|0).toString(16).substring(1)}a=a||"-";return b()+b()+a+b()+a+b()+a+b()+a+b()+b()+b()};    return IntegralUIDataService;
}());
export { IntegralUIDataService };
IntegralUIDataService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
IntegralUIDataService.ctorParameters = function () { return []; };
//# sourceMappingURL=integralui.data.service.js.map