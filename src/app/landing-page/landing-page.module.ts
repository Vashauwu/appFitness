import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentMainComponent } from './content-main/content-main.component';
import { SharedModule } from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ContentMainComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatCardModule,
    MatButtonModule
    
  ],
  exports:[
    ContentMainComponent
  ]
})
export class LandingPageModule { }
