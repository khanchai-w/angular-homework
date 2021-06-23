import { TopBannerComponent } from './top-banner/top-banner.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Lab4Component } from './lab4-component/lab4.component';
import { CountingComponent } from './counting-component/counting.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountingComponent,
    Lab4Component,
    NavBarComponent,
    TopBannerComponent,
    CategoryMenuComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
