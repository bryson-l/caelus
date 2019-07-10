import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './controls/nav/nav.component';
import { TestComponent } from './controls/test-control/test.component';
import { DynamicContentOutletComponent } from './dynamic-content-outlet/dynamic-content-outlet.component';
import { DynamicContentOutletModule } from './dynamic-content-outlet/dynamic-content-outlet.module';
import { HomeComponent } from './tabs/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicContentOutletModule
  ],
  entryComponents: [DynamicContentOutletComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  static dynamicComponentsMap: any = {
    HomeComponent
  }

}
