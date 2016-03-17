// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-demo

'use strict';

require('!style!css!ng2-toasty/ng2-toasty.css');
require('!style!css!ng2-dnd/ng2-dnd.css');

import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {ToastyService, ToastyConfig} from 'ng2-toasty/ng2-toasty';
import {DND_PROVIDERS} from 'ng2-dnd/ng2-dnd';

import {HelloApp} from './hello';

// Instantiate ToastyService in the bootstrap so that we can keep it as a singleton
bootstrap(HelloApp, [
    ROUTER_PROVIDERS, FORM_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    ToastyService, ToastyConfig,
    DND_PROVIDERS
]);
