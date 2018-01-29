import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SetupComponent} from './setup/setup.component';
import {RoutesComponent} from './routes/routes.component';
import {MapComponent} from './map/map.component';

const routes: Routes = [
    {
        path: 'setup', component: SetupComponent
    },
    {
        path: 'routes', component: RoutesComponent
    },
    {
        path: 'map', component: MapComponent
    },
    {
        path: '',
        redirectTo: 'setup',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

