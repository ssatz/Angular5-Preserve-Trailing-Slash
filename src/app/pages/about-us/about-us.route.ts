/*
 *  Copyright (C) Paisaclub.com - All Rights Reserved
 *  * Unauthorized copying of this file, via any medium is strictly prohibited
 *  * Proprietary and confidential
 *  * Written by Sathish Kumar(satz) <sathish.thi@gmail.com>
 *
 */

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AboutUsComponent} from './about-us.component';

export const aboutUsRoutes: Routes = [
    {
        path: 'about-us/.', component: AboutUsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(aboutUsRoutes)],
    exports: [RouterModule]
})
export class AboutUsRoutingModule {

}