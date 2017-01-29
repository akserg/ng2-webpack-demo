// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DndModule } from 'ng2-dnd';

import { SimpleDndComponent } from './simple-dnd.component';
import { ZoneDndComponent } from './zone-dnd.component';
import { CustomDataDndComponent } from './custom-data-dnd.component';
import { ShoppingBasketDndComponent } from './shopping-basket-dnd.component';

import { SimpleSortableComponent } from './simple-sortable.component';
import { MultiSortableComponent } from './multi-sortable.component';
import { RecycleMultiSortableComponent } from './recycle-multi-sortable.component';
import { EmbeddedSortableComponent} from './embedded-sortable.component';

const dndComponents = [SimpleDndComponent, ZoneDndComponent, CustomDataDndComponent, ShoppingBasketDndComponent];
const sortableComponents = [SimpleSortableComponent, MultiSortableComponent, RecycleMultiSortableComponent, EmbeddedSortableComponent];

@NgModule({
    imports: [BrowserModule, FormsModule, DndModule.forRoot()],
    declarations: [...dndComponents, ...sortableComponents],
    exports: [...dndComponents, ...sortableComponents]
})
export class DemoDndModule { }