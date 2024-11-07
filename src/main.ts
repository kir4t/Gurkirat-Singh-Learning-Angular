import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from "@angular/router";
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {LaptopsListComponent} from "./app/laptops-list/laptops-list.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/services/in-memory-data-service";


const routes: Routes =[
  {path: '', redirectTo:'/laptops', pathMatch: 'full' },
  {path:'laptops', component: LaptopsListComponent },
  {path:'modify-list-item', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}
]
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)) // Import providers dynamically
  ],
}).catch((err) => console.error(err));
