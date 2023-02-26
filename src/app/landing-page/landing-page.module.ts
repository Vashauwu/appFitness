import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentMainComponent } from './content-main/content-main.component';
import { SharedModule } from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ContentMainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    
  ],
  exports:[
    ContentMainComponent
  ]
})
export class LandingPageModule { }
