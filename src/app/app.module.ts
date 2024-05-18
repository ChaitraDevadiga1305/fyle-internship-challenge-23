import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';


import { CacheService } from './services/cache.service';


import { SearchComponent } from './components/search/search.component';
import { StarUpPageComponent } from './components/star-up-page/star-up-page.component';
import { ProfileComponent } from './components/search/profile/profile.component';
import { ReposComponent } from './components/search/repos/repos.component';
import { ApiService } from './services/api.service';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';

const appRoute: Routes=[
  {path:'', component:StarUpPageComponent},
  {path:'Search', component:SearchComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    StarUpPageComponent,
    ProfileComponent,
    ReposComponent,
    SkeletonLoaderComponent,
   
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule ,
    NgFor,
    NgxPaginationModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    ApiService,
    CacheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
