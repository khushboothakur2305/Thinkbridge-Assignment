import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Features/components/home/home.component';
import { AboutUsComponent } from './Features/components/about-us/about-us.component';
import { PrivacyPolicyComponent } from './Features/components/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './Features/components/terms-and-conditions/terms-and-conditions.component';
import { AuthGuard } from './Guards/auth.guard';
import { LoginComponent } from './Auth/login/login.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'terms-and-condition',
    component: TermsAndConditionsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./Admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
