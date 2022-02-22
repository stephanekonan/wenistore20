import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';

import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoPageFoundComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PharmacieComponent,
    OrdersComponent,
    VetementsComponent,
    InformatiqueComponent,
    SportComponent,
    SupermarketComponent,
    ModePaidComponent,
    TermsOfServicesComponent,
    PolicyOfConfidentialityComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ɵInternalFormsSharedModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
