import { Directive, NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
// @ts-ignore
import {RiveView} from "@nativescript-community/ui-rive";

@Directive({ selector: 'RiveView' })
export class RiveViewDirective {}

@NgModule({
    declarations: [RiveViewDirective],
    exports: [RiveViewDirective]
})
export class NativeScriptRiveModule {}

registerElement('RiveView', () => RiveView);
