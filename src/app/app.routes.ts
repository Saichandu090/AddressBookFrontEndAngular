import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddFormComponent } from './add-form/add-form.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

  
export const routes: Routes = [
    { path: 'homepage', component: HomepageComponent },
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'add-form', component: AddFormComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    
})
export class AppRoutingModule { }
