// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-demo

'use strict';

import {Component, Injectable} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {NgForm} from 'angular2/common';
import {ToastyService, ToastyConfig, Toasty, ToastOptions, ToastData} from 'ng2-toasty/ng2-toasty';

require('!style!css!ng2-toasty/ng2-toasty.css');

@Injectable()
@Component({
    selector: 'app',
    directives: [Toasty],
    templateUrl: 'main.html'
})
export class HelloApp {

    button = 'ping';

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

    clearToasties() {
        this.toastyService.clearAll();
    }

}

// Instantiate ToastyService in the bootstrap so that we can keep it as a singleton
bootstrap(HelloApp, [
    ToastyService, ToastyConfig
]);
