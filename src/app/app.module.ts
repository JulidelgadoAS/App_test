import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeadComponent } from './head/head.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

//En Angular se programa por MODULOS --> es forma correcta de hacerlo
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeadComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] //Este componente tiene la capacidad de importar MODULOS
})
export class AppModule { }
