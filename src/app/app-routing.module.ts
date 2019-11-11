import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  // add a route(URL) in the browser address bar 'heroes'
  { path: 'heroes', component: HeroesComponent },
  // adds a route matches the path to the DashboarsComponent
  { path: 'dashboard', component: DashboardComponent },
  //navigate automatically to the path /dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // paramerized route, matches the path pattern to the hero detail view,(:) ==> :id is a placeholder for a specific hero id
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  // imports array and configures it with the routes by calling RouterModule.forRoot()
  imports: [RouterModule.forRoot(routes)],
  // exports RouterModule, it will be available throughout the app 
  exports: [RouterModule]
})
export class AppRoutingModule { }