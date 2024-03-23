import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CompoHijoListComponent } from './compo-hijo-list/compo-hijo-list.component';
import { CompoHijo2Component } from './compo-hijo2/compo-hijo2.component';
import { ServicioDatosService } from './servicio-datos.service';

@NgModule({
  declarations: [
    AppComponent,
    CompoHijoListComponent,
    CompoHijo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ServicioDatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
