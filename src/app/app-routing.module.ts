import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentMainComponent } from './landing-page/content-main/content-main.component';
import { LoginFormComponent } from './login/login-form/login-form.component';


const routes: Routes = [
  { path: '', component: ContentMainComponent },
  { path: 'signin', component: LoginFormComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
