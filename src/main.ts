// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-demo

'use strict';

import {Component, Injectable} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {NgForm} from 'angular2/common';
import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';
import {Subject, Observable, Subscription} from 'rxjs/Rx';

require('!style!css!ng2-toasty/ng2-toasty.css');

let template: string = `
<a href="https://github.com/akserg"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"></a>
<header>
    <div class="container">
        <ul class="navbar-list">
            <li class="navbar-item u-pull-left"><a class="navbar-link" href="https://github.com/akserg/ng2-webpack-demo">ng2-toasty demo</a></li>
            <li class="navbar-item u-pull-right"><a class="navbar-link" href="https://github.com/akserg/ng2-toasty">ng2-toasty on github</a></li>
        </ul>
    </div>
</header>


<div>
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
            <button class="button-primary" style="width: 100px;" (click)="newToast()" ng-bind="button">Add</button>
            <button class="button-primary" style="width: 150px;" (click)="newCountdownToast()" ng-bind="button2">Countdown</button>
            <div class="u-cf"></div>
        </form>
    </div>
    <ng2-toasty></ng2-toasty>
</div>`;

@Injectable()
@Component({
    selector: 'app',
    directives: [Toasty],
    template: template
})
export class HelloApp {

    button = 'ping';
    button2 = 'ping';

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

    constructor (private toastyService: ToastyService) { }

    newToast() {

        this.button = this.button === 'ping' ? 'pong' : 'ping';

        var toastOptions: ToastOptions = {
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
        this.button2 = this.button2 === 'ping' ? 'pong' : 'ping';

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
                // Start listen seconds beat
                subscription = observable.subscribe((count: number) => {
                    // Update title of toast
                    toast.title = this.getTitle(seconds - count - 1 || 0);
                    // Update message of toast
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

// Instantiate ToastyService in the bootstrap so that we can keep it as a singleton
bootstrap(HelloApp, [
    ToastyService, ToastyConfig
]);
