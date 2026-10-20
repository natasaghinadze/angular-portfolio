import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '', component: Home

    },
    {
        path: '**', redirectTo: ''
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
        })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
