import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { UnitComponent } from './unit/unit.component';
import { UnitListComponent } from './unit/unit-list.component';
import { ProjectService } from './project/project.service';
import { UnitService } from './unit/unit.service';
import { TruncatePipe } from '../pipe/truncatepipe';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    UnitComponent,
    UnitListComponent,
    TruncatePipe,
    FooterComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'about', component: AboutComponent},
      { path: 'project/:id', component: ProjectComponent},
      { path: 'unit/:id', component: UnitComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [ProjectService, UnitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
