/*
 *  Copyright (C) Paisaclub.com - All Rights Reserved
 *  * Unauthorized copying of this file, via any medium is strictly prohibited
 *  * Proprietary and confidential
 *  * Written by Sathish Kumar(satz) <sathish.thi@gmail.com>
 *
 */

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ContactUsComponent} from './contact-us.component';

export const contactUsRoutes: Routes = [
    {
        path: 'contact-us/.', component: ContactUsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(contactUsRoutes)],
    exports: [RouterModule]
})
export class ContactUsRoutingModule {

}