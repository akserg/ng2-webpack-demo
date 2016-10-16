// // Copyright (C) 2016 Sergey Akopkokhyants
// // This project is licensed under the terms of the MIT license.
// // https://github.com/akserg

import {Component} from '@angular/core';

// import {Subject, Observable, Subscription} from 'rxjs/Rx';

import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
    selector: 'demo-slim',
    templateUrl: './slim.component.html'
})
export class SlimComponent {

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
