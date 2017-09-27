/*
  filename: integralui.splitcontainer.module.js
  version : 1.2.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library.
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IntegralUICoreModule } from './integralui.core.module';
import { IntegralUIFocus, IntegralUITemplate } from './components/integralui.core';
import { IntegralUISplitContainer, IntegralUISplitContainerTags } from './components/integralui.splitcontainer';
var IntegralUISplitContainerModule = (function () {
    function IntegralUISplitContainerModule() {
    }
    return IntegralUISplitContainerModule;
}());
export { IntegralUISplitContainerModule };
IntegralUISplitContainerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, IntegralUICoreModule],
                declarations: [
                    IntegralUISplitContainer,
                    IntegralUISplitContainerTags
                ],
                exports: [
                    IntegralUIFocus,
                    IntegralUITemplate,
                    IntegralUISplitContainer,
                    IntegralUISplitContainerTags
                ]
            },] },
];
/** @nocollapse */
IntegralUISplitContainerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=integralui.splitcontainer.module.js.map