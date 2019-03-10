import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";

import { Industriradhus } from '../app/app';
import { HomePage } from '../pages/home/home';
import { ProjectPage } from '../pages/project/project';
import { UnitPage } from '../pages/unit/unit';
import { AboutPage } from '../pages/about/about';
import { SignInPage } from './../pages/sign-in/sign-in';
import { FloorplansPage } from '../pages/floorplans/floorplans';

import { FooterComponent } from '../components/footer/footer';
import { HeaderComponent } from './../components/header/header';
import { ImageModalComponent } from './../components/image-modal/image-modal';
import { AccessGuardService } from './../core/auth-guard';
import { SignInInterceptor } from './../core/token-interceptor';

import { TruncatePipe } from '../pipe/truncatepipe';

import { AuthProvider, getAuthConfig } from './../providers/auth';
import { UnitProvider } from './../providers/unit';
import { ProjectProvider } from './../providers/project';
import { SalesAgentProvider } from './../providers/sales-agent';
import { FloorplanProvider } from './../providers/floorplan';
import { TokenInterceptor } from '../core/token-interceptor';



@NgModule({
  declarations: [
    Industriradhus,
    HomePage,
    AboutPage,
    ProjectPage,
    UnitPage,
    SignInPage,
    FloorplansPage,
    HeaderComponent,
    FooterComponent,
    ImageModalComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SocialLoginModule,
    RouterModule.forRoot([
      { path: 'sign-in', component: SignInPage},
      { path: 'start', component: HomePage, canActivate: [AccessGuardService]},
      { path: 'kontakt', component: AboutPage },
      { path: 'moduler', component: FloorplansPage },
      { path: 'projekt/:id', component: ProjectPage, canActivate: [AccessGuardService]},
      { path: 'enhet/:id', component: UnitPage, canActivate: [AccessGuardService]},
      { path: '', redirectTo: 'start', pathMatch: 'full'},
      { path: '**', redirectTo: 'start', pathMatch: 'full'}
    ])
  ],
  providers: [
    ProjectProvider, 
    UnitProvider,
    FloorplanProvider,
    SalesAgentProvider,
    AuthProvider,
    AccessGuardService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthConfig
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SignInInterceptor,
      multi: true
    }

  ],
  bootstrap: [Industriradhus]
})
export class AppModule { }