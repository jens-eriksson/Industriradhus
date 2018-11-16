import { SignInInterceptor } from './../core/token-interceptor';
import { HeaderComponent } from './../components/header/header';
import { AccessGuardService } from './../core/auth-guard';
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

import { FooterComponent } from '../components/footer/footer';

import { TruncatePipe } from '../pipe/truncatepipe';

import { AuthProvider, getAuthConfig } from './../providers/auth';
import { UnitProvider } from './../providers/unit';
import { ProjectProvider } from './../providers/project';
import { TokenInterceptor } from '../core/token-interceptor';


@NgModule({
  declarations: [
    Industriradhus,
    HomePage,
    AboutPage,
    ProjectPage,
    UnitPage,
    SignInPage,
    HeaderComponent,
    FooterComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SocialLoginModule,
    RouterModule.forRoot([
      { path: 'sign-in', component: SignInPage},
      { path: 'home', component: HomePage, canActivate: [AccessGuardService]},
      { path: 'about', component: AboutPage },
      { path: 'project/:id', component: ProjectPage, canActivate: [AccessGuardService]},
      { path: 'unit/:id', component: UnitPage, canActivate: [AccessGuardService]},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [
    ProjectProvider, 
    UnitProvider,
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