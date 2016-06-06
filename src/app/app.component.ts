// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

'use strict';

import {Component} from '@angular/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {Toasty} from 'ng2-toasty/ng2-toasty';
import {SlimLoadingBar, SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';

import {HomeComponent} from './home.component';
import {ToastComponent} from './toast.component';
import {DndComponent} from './dnd.component';
import {SlimComponent} from './slim.component';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, Toasty, SlimLoadingBar],
    template:
    `
<a href="https://github.com/akserg"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"></a>
<header>
    <div class="container">
        <ul class="navbar-list">
            <li class="navbar-item u-pull-left"><a class="navbar-link" [routerLink]="['Root']">Home</a></li>
            <li class="navbar-item u-pull-left"><a class="navbar-link" [routerLink]="['Toasty']">Toasty</a></li>
            <li class="navbar-item u-pull-left"><a class="navbar-link" [routerLink]="['Dnd']">Drag-and-Drop</a></li>
            <li class="navbar-item u-pull-left"><a class="navbar-link" [routerLink]="['Slim']">Slim Loading Bar</a></li>
        </ul>

    </div>
</header>

<div>
    <router-outlet></router-outlet>
    <ng2-toasty></ng2-toasty>
</div>
<ng2-slim-loading-bar></ng2-slim-loading-bar>
`
})
@RouteConfig([
  {path: '/',        name: 'Root',       component: HomeComponent},
  {path: '/toasty',  name: 'Toasty',     component: ToastComponent},
  {path: '/dnd',     name: 'Dnd',        component: DndComponent},
  {path: '/slim',    name: 'Slim',       component: SlimComponent}
])
export class App {
    constructor(private slimLoader: SlimLoadingBarService, private router: Router) {
        this.runSlimLoader();
        this.router.subscribe((value: any) => {
            this.runSlimLoader();
        }, (error: any) => {
            this.slimLoader.complete();
        });
    }

    runSlimLoader() {
        this.slimLoader.start();
        setTimeout(() => {
            this.slimLoader.complete();
        }, 1000);
    }
}
