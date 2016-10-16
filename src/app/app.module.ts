// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

import { ToastyModule } from 'ng2-toasty';
import { DndModule } from 'ng2-dnd';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { HomeComponent } from './home/home.component';
import { SlimComponent } from './slim/slim.component';
import { DndComponent } from './dnd/dnd.component';
import { ToastComponent, ToastCommunicationService } from './toast';

import { routing } from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, routing,
        ToastyModule.forRoot(), DndModule.forRoot(), SlimLoadingBarModule.forRoot()],
    declarations: [AppComponent, HomeComponent, SlimComponent, DndComponent, ToastComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, ToastCommunicationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
