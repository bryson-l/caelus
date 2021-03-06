import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicContentOutletComponent } from './shared/dynamic-content-outlet/dynamic-content-outlet.component';
import { MySpecialDynamicContentModule } from './shared/tabs/tabs.module';
import { ServicesModule } from './shared/services/services.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MySpecialDynamicContentModule,
    ServicesModule
  ],
  entryComponents: [ DynamicContentOutletComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
