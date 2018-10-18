import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { FormComponent } from './contact/form/form.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'contact', component: FormComponent },
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '', redirectTo: 'welcome',  pathMatch: 'full'}
];
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
   ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
