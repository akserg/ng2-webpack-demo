// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

'use strict';

import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import {Subject, Observable, Subscription} from 'rxjs/Rx';

import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';

@Component({
    selector: 'toast-demo',
    directives: [FORM_DIRECTIVES],
    template: `
<div class="container">
    <br />
    <form #heroForm="ngForm">
        <div class="row">
             <div class="four columns">
                <label for="title">Title</label>
                <input class="u-full-width" type="text" id="title" [(ngModel)]="options.title" ngControl="title" #title="ngForm">

                <label for="msg">Message</label>
                <input class="u-full-width" type="text" id="msg" [(ngModel)]="options.msg" ngControl="msg" #msg="ngForm">

                <label for="theme">Theme</label>
                <select class="u-full-width" [(ngModel)]="options.theme" ngControl="theme" #theme="ngForm" >
                  <option *ngFor="#theme of themes" [value]="theme.code">{{theme.name}}</option>
                </select>

                <label for="theme">Type</label>
                <select class="u-full-width" [(ngModel)]="options.type" ngControl="type" #type="ngForm" >
                  <option *ngFor="#type of types" [value]="type.code">{{type.name}}</option>
                </select>

                <label for="timeout">Timeout</label>
                <input type="text" class="u-full-width" id="timeout" [(ngModel)]="options.timeout" placeholder="5000" ngControl="timeout" #timeout="ngForm"/>
             </div>
             <div class="four columns">
                <label for="showclose">Show Close Icon</label>
                <input type="checkbox" id="showclose" [(ngModel)]="options.showClose" ngControl="showClose" #showClose="ngForm"/>
            </div>
            <div class="four columns">
                <pre>
<code>toastyService<span ng-if="options.type != 'default'">.{{ options.type }}</span>({
    title: "{{ options.title }}",
    msg: "{{ options.msg }}",
    showClose: {{ options.showClose }},
    timeout: {{ options.timeout || false }},
    theme: "{{ options.theme }}"
});
</code>
                </pre>
            </div>
        </div>

        <button style="margin-right: 10px;" (click)="clearToasties()">Clear All</button>
        <button class="button-primary" style="width: 100px;" (click)="newToast()">Add</button>
        <button class="button-primary" style="width: 150px;" (click)="newCountdownToast()">Countdown</button>
        <div class="u-cf"></div>
    </form>
</div>`
})
export class ToastDemo {

    themes = [{
        name: 'Default Theme',
        code: 'default'
    }, {
        name: 'Material Design',
        code: 'material'
    }, {
        name: 'Bootstrap 3',
        code: 'bootstrap'
    }];

    types = [{
        name: 'Default',
        code: 'default',
    }, {
            name: 'Info',
            code: 'info'
        }, {
            name: 'Success',
            code: 'success'
        }, {
            name: 'Wait',
            code: 'wait'
        }, {
            name: 'Error',
            code: 'error'
        }, {
            name: 'Warning',
            code: 'warning'
        }];

    options = {
        title: 'Toast It!',
        msg: 'Mmmm, tasties...',
        showClose: true,
        timeout: 5000,
        theme: this.themes[0].code,
        type: this.types[0].code
    };

    getTitle(num: number): string {
        return 'Countdown: ' + num;
    }

    getMessage(num: number): string {
        return 'Seconds left: ' + num;
    }

    constructor(private toastyService: ToastyService) { }

    newToast() {
        let toastOptions: ToastOptions = {
            title: this.options.title,
            msg: this.options.msg,
            showClose: this.options.showClose,
            timeout: this.options.timeout,
            theme: this.options.theme,
            onAdd: (toast: ToastData) => {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function(toast: ToastData) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };

        switch (this.options.type) {
            case 'default': this.toastyService.default(toastOptions); break;
            case 'info': this.toastyService.info(toastOptions); break;
            case 'success': this.toastyService.success(toastOptions); break;
            case 'wait': this.toastyService.wait(toastOptions); break;
            case 'error': this.toastyService.error(toastOptions); break;
            case 'warning': this.toastyService.warning(toastOptions); break;
        }
    }

    newCountdownToast() {
        let interval = 1000;
        let seconds = this.options.timeout / 1000;
        let subscription: Subscription;

        let toastOptions: ToastOptions = {
            title: this.getTitle(seconds || 0),
            msg: this.getMessage(seconds || 0),
            showClose: this.options.showClose,
            timeout: this.options.timeout,
            theme: this.options.theme,
            onAdd: (toast: ToastData) => {
                console.log('Toast ' + toast.id + ' has been added!');
                // Run the timer with 1 second iterval
                let observable = Observable.interval(interval).take(seconds);
                // Start listen seconds bit
                subscription = observable.subscribe((count: number) => {
                    // Update title
                    toast.title = this.getTitle(seconds - count - 1 || 0);
                    // Update message
                    toast.msg = this.getMessage(seconds - count - 1 || 0);
                });

            },
            onRemove: function(toast: ToastData) {
                console.log('Toast ' + toast.id + ' has been removed!');
                // Stop listenning
                subscription.unsubscribe();
            }
        };

        switch (this.options.type) {
            case 'default': this.toastyService.default(toastOptions); break;
            case 'info': this.toastyService.info(toastOptions); break;
            case 'success': this.toastyService.success(toastOptions); break;
            case 'wait': this.toastyService.wait(toastOptions); break;
            case 'error': this.toastyService.error(toastOptions); break;
            case 'warning': this.toastyService.warning(toastOptions); break;
        }
    }

    clearToasties() {
        this.toastyService.clearAll();
    }

}
