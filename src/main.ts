import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from "@angular/router";
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {LaptopsListComponent} from "./app/laptops-list/laptops-list.component";


const routes: Routes =[
  {path: '', redirectTo:'/laptops', pathMatch: 'full' },
  {path:'laptops', component: LaptopsListComponent },

]
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(()=> console.log('Bootstrap successful'));
