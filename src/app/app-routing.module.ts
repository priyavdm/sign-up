import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetbyidComponent } from './getbyid/getbyid.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:'log-in', component:LogInComponent},
  {path:'getbyid', component:GetbyidComponent},
  {path:'sign-up/:id', component:SignUpComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'form', component:FormComponent},
  {path:'log-in/:id', component:GetbyidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
