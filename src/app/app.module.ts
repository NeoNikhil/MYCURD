import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogComponent } from './comps/log/log.component';
import { UserFormComponent } from './comps/log/user-form/user-form.component';
import { DataTableComponent } from './comps/log/data-table/data-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    UserFormComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
