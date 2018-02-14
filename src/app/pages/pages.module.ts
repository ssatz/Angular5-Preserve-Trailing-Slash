/*
 *  Copyright (C) Paisaclub.com - All Rights Reserved
 *  * Unauthorized copying of this file, via any medium is strictly prohibited
 *  * Proprietary and confidential
 *  * Written by Sathish Kumar(satz) <sathish.thi@gmail.com>
 *
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {AboutUsRoutingModule} from './about-us/about-us.route';
import {AboutUsComponent} from './about-us/about-us.component';
import {PagesComponent} from './pages.component';
import {ContactUsRoutingModule} from './contact-us/contact-us.route';
import {ContactUsComponent} from './contact-us/contact-us.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AboutUsRoutingModule,
        ContactUsRoutingModule,
    ],
    providers: [],
    declarations: [PagesComponent,
        ContactUsComponent,
        AboutUsComponent],
    exports: [PagesComponent,
        AboutUsComponent,
        ContactUsComponent]
})

export class PagesModule {
}
