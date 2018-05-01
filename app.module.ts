import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WikipediaSearchAppService } from './wikipedia-search-app.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,JsonpModule
  ],
  providers: [WikipediaSearchAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
