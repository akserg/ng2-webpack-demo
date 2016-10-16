// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { ToastCommunicationService } from './toast/toast-communication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
    private sub: any;
    // Position of Ng2ToastyComponent
    private toastyComponentPosition: string;

    constructor(private slimLoader: SlimLoadingBarService, private router: Router, 
                private toastCommunicationService: ToastCommunicationService) {
        // We listen the position's changes
        this.toastCommunicationService.position$.subscribe(pos => this.toastyComponentPosition = pos);
        // Listen the navigation events to start or complete the slim bar loading
        this.sub = this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.slimLoader.start();
            } else if ( event instanceof NavigationEnd ||
                        event instanceof NavigationCancel ||
                        event instanceof NavigationError) {
                this.slimLoader.complete();
            }
        }, (error: any) => {
            this.slimLoader.complete();
        });
    }

    ngOnDestroy(): any {
        this.sub.unsubscribe();
    }
}
