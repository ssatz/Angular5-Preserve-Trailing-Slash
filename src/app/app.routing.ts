import { pagesRoutes } from './pages.routing';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [{
    path: '', redirectTo: '/', pathMatch: 'full'
},
...pagesRoutes

];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        { useHash: false, initialNavigation: 'enabled' })
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}

