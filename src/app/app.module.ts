import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmltopdfComponent } from './htmltopdf/htmltopdf.component';
import { HtmlpdftemplateComponent } from './htmlpdftemplate/htmlpdftemplate.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmltopdfComponent,
    HtmlpdftemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
