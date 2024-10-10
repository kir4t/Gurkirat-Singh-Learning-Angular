import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from "@angular/router";
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {LaptopsListComponent} from "./app/laptops-list/laptops-list.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";


const routes: Routes =[
  {path: '', redirectTo:'/laptops', pathMatch: 'full' },
  {path:'laptops', component: LaptopsListComponent },
  {path:'modify-student', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}
]
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(()=> console.log('Bootstrap successful'));
