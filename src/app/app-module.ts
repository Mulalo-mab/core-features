import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ColumnFeature } from './core-feature/column-feature/column-feature';
import { ColumnGroup } from './core-feature/column-group/column-group';
import { SortingComponent } from './core-feature/sorting-component/sorting-component';
import { CombinedStyle } from './core-feature/combined-style/combined-style';


@NgModule({
  declarations: [
    App,
    ColumnFeature,
    ColumnGroup,
    SortingComponent,
    CombinedStyle
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
