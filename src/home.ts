// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-demo

'use strict';

import {Component, Injectable} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'home-demo',
    directives: [ROUTER_DIRECTIVES],
    template: `
<div class="container">
    <h1>Welcome to Demo</h1>
    <span>There are features implemented on Angular 2:</span>
    <ul>
        <li><a [routerLink]="['Toasty']">Toasty</a></li>
        <li><a [routerLink]="['Dnd']">Drag-and-Drop</a></li>
    </ul>
</div>`
})
export class HomeDemo { }
