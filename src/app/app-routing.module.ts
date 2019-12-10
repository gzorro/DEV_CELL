import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'search', component: SearchComponent },
  { path: 'user', component: UserComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  // imports: [RouterModule.forRoot(ROUTES)],
  imports: [RouterModule.forRoot(ROUTES, { useHash: true})],
  exports: [RouterModule]
})
export class APPROUTINGMODULE { }
