import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoMainComponent } from './contenido-main/contenido-main.component';
import { ContenidoCardsComponent } from './contenido-cards/contenido-cards.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    FooterComponent,
    ContenidoMainComponent,
    ContenidoCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
