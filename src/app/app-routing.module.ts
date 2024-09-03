import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Adjust the path as necessary
import { D3MapComponent } from './d3-map/d3-map.component'; // Adjust the path as necessary

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'd3-map', component: D3MapComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirect to login by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
