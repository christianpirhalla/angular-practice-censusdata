import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StateDetailComponent } from './state-detail/state-detail.component';
import { StatesComponent } from './states/states.component';
import { StateSelectorComponent } from './state-selector/state-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    StateDetailComponent,
    StatesComponent,
    StateSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
