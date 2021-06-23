import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import {ParentModule} from './parent/parent.module';
import { TwoComponent } from './two/two.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UpperCasePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TwoComponent
  ],
  imports: [
    ParentModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UpperCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
