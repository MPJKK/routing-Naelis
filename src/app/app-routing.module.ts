import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SetupComponent} from './setup/setup.component';
import {RoutesComponent} from './routes/routes.component';
import {MapComponent} from './map/map.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LogoutComponent} from './logout/logout.component';
import {FrontComponent} from './front/front.component';
import {UploadComponent} from './upload/upload.component';

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
        pathMatch: 'full',
        redirectTo: '/login',
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'logout',
        component: LogoutComponent,
    },
    {
        path: 'front',
        component: FrontComponent,
    },
    {
        path: 'upload',
        component: UploadComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

