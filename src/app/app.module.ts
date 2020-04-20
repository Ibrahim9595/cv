import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { SkillsComponent } from './skills.component';
import { BasicInfoComponent } from './basicInfo.component';
import { ProjectTableComponent } from './projectTable.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    SkillsComponent,
    BasicInfoComponent,
    ProjectTableComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule { }
