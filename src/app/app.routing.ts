// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SlimComponent } from './slim/slim.component';
import { DndComponent } from './dnd/dnd.component';
import { ToastComponent } from './toast/toast.component';

const appRoutes: Routes = [
  {path: '',        component: HomeComponent},
  {path: 'toasty',  component: ToastComponent},
  {path: 'dnd',     component: DndComponent},
  {path: 'slim',    component: SlimComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
