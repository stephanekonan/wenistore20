import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NoPageFoundComponent } from './templates/no-page-found/no-page-found.component';
import { HomeComponent } from './templates/home/home.component';

import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PharmacieComponent } from './components/pages/pharmacie/pharmacie.component';
import { OrdersComponent } from './components/pages/orders/orders.component';
import { VetementsComponent } from './components/pages/vetements/vetements.component';
import { InformatiqueComponent } from './components/pages/informatique/informatique.component';
import { SportComponent } from './components/pages/sport/sport.component';
import { SupermarketComponent } from './components/pages/supermarket/supermarket.component';
import { ModePaidComponent } from './components/pages/mode-paid/mode-paid.component';
import { TermsOfServicesComponent } from './templates/terms-of-services/terms-of-services.component';
import { PolicyOfConfidentialityComponent } from './templates/policy-of-confidentiality/policy-of-confidentiality.component';



const routes: Routes = [

  //  Authentification RouterModule
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
  },


  // Pages RouterModule
  {
    path: 'informatique',
    component: InformatiqueComponent
  },

  {
    path: 'vetements',
    component: VetementsComponent
  },

  {
    path: 'pharmacie',
    component: PharmacieComponent
  },

  {
    path: 'sport',
    component: SportComponent
  },

  {
    path: 'supermarket',
    component: SupermarketComponent
  },

  {
    path: 'orders',
    component: OrdersComponent,
  },

  {
    path: 'modepaid',
    component: ModePaidComponent
  },

  {
    path: 'terms_of_services',
    component: TermsOfServicesComponent
  },

  {
    path: 'policy_of_confidentiality',
    component: PolicyOfConfidentialityComponent
  },

  // templates RouterModule
  {
    path: '',
    component: HomeComponent
  },

  {
    path: '**',
    component: NoPageFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
