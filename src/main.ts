import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from "@angular/router";
import { AppComponent } from './app/app.component';
import {LaptopsListComponent} from "./app/laptops-list/laptops-list.component";


const routes: Routes =[
  {path: '', redirectTo:'/laptops', pathMatch: 'full' },
  {path:'laptops', component: LaptopsListComponent},
  {path:'modify-list-item',
    loadComponent: ()=>import('./app/modify-list-item/modify-list-item.component').then(m=>m.ModifyListItemComponent)},
  {path: '**', loadComponent:()=> import('./app/page-not-found/page-not-found.component').then(m=>m.PageNotFoundComponent)}
]
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(()=> console.log('Bootstrap successful'));
