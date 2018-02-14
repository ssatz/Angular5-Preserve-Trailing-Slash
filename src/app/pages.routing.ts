/*
 *  Copyright (C) Paisaclub.com - All Rights Reserved
 *  * Unauthorized copying of this file, via any medium is strictly prohibited
 *  * Proprietary and confidential
 *  * Written by Sathish Kumar(satz) <sathish.thi@gmail.com>
 *
 */
import { Route } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

export const pagesRoutes: Route[] = [{
    path: '',
    component: PagesComponent,
    loadChildren: './pages/pages.module#PagesModule'
}];

