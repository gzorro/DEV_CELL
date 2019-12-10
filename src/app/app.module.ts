import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APPROUTINGMODULE } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  // exports:[]
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    APPROUTINGMODULE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
