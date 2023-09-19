import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VisModule, VisNetworkDirective } from 'ngx-vis';
@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    VisModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [VisNetworkDirective]
})
export class AppModule { }
