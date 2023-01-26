import {
  NgModule,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptRiveModule } from '@nativescript-community/ui-rive/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptLottieModule, AppRoutingModule, HomeModule],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
