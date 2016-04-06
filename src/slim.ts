// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

'use strict';

import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import {Subject, Observable, Subscription} from 'rxjs/Rx';

import {SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';

@Component({
    selector: 'slim-demo',
    template: `
<div class="container">
    <br />
    <button (click)="setProgres30()">Set progress equals 30</button><br />
    <button (click)="incrementProgress()">Increment progress</button><br />
    <button (click)="startProgress()">Start progress</button><br />
    <button (click)="completeProgress()">Complete progress</button><br />
    <button (click)="stopProgress()">Stop progress</button><br />
    <button (click)="resetProgress()">Reset progress</button><br /><br />

    <button (click)="changeProgressTo4px()">Change height to 4px</button><br />
    <button (click)="changeProgressTo2px()">Change height to 2px</button><br />
    <button (click)="changeProgressToBlue()">Change color to blue</button><br />
    <button (click)="changeProgressToFirebrick()">Change color to firebrick</button><br />
</div>`
})
export class SlimDemo {

    constructor(private slimLoader: SlimLoadingBarService) {}

    setProgres30() {
        this.slimLoader.progress = 30;
    }

    startProgress() {
        // We can listen when loading will be completed
        this.slimLoader.start(() => {
            console.log('Loading complete');
        });
    }

    completeProgress() {
        this.slimLoader.complete();
    }

    stopProgress() {
        this.slimLoader.stop();
    }

    resetProgress() {
        this.slimLoader.reset();
    }

    incrementProgress() {
        this.slimLoader.progress++;
    }

    changeProgressTo4px() {
        this.slimLoader.height = '4px';
    }

    changeProgressTo2px() {
        this.slimLoader.height = '2px';
    }

    changeProgressToBlue() {
        this.slimLoader.color = 'blue';
    }

    changeProgressToFirebrick() {
        this.slimLoader.color = 'firebrick';
    }
}
