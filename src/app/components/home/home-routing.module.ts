import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,
    children:[
        {
          path:"home",component:HomeComponent,
        },
        {
          path:"home/doctor",component:DoctorComponent,
        }
    ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
