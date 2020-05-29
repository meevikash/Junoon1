import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DefaultModule } from './layouts/default/default.module';
import { ComponentComponent } from './shared/component/component.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
