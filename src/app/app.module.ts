import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProjectComponent } from './project/project.component';
import { UnitComponent } from './unit/unit.component';
import { UnitListComponent } from './unit/unit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProjectComponent,
    UnitComponent,
    UnitListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'project', component: ProjectComponent},
      { path: 'unit/:id', component: UnitComponent},
      { path: '', redirectTo: 'project', pathMatch: 'full'},
      { path: '**', redirectTo: 'project', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
