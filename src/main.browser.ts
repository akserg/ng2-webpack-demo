// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

'use strict';

require('!style!css!bootstrap/dist/css/bootstrap.min.css');

require('!style!css!ng2-toasty/ng2-toasty.css');
require('!style!css!ng2-dnd/ng2-dnd.css');
require('!style!css!ng2-slim-loading-bar/ng2-slim-loading-bar.css');

require('!style!css!skeleton.css');

import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {FORM_PROVIDERS, LocationStrategy, HashLocationStrategy} from '@angular/common';

import {ToastyService, ToastyConfig} from 'ng2-toasty/ng2-toasty';
import {DND_PROVIDERS} from 'ng2-dnd/ng2-dnd';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';

import {App} from './app';

bootstrap(App, [
    ROUTER_PROVIDERS, FORM_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    ToastyService, ToastyConfig,
    DND_PROVIDERS, SlimLoadingBarService
])
.catch(err => console.error(err));
