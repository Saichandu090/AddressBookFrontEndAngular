import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddFormComponent } from './add-form/add-form.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { loginGuard } from './guard/login.guard';



export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'homepage',
                component:HomepageComponent,
                canActivate:[loginGuard]
            },
            {
                path:'add-form',
                component:AddFormComponent,
                canActivate:[loginGuard]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})
export class AppRoutingModule { }
