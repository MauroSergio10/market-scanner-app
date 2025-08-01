import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErroComponent } from './erro/erro.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: ErroComponent}
];
