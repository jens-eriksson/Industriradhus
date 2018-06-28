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

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    UnitComponent,
    UnitListComponent,
    TruncatePipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'project/:id', component: ProjectComponent},
      { path: 'unit/:id', component: UnitComponent},
      { path: '', redirectTo: 'project/', pathMatch: 'full'},
      { path: '**', redirectTo: 'project/', pathMatch: 'full'}
    ])
  ],
  providers: [ProjectService, UnitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
