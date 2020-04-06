import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsModule } from './products/products.module';
import { FooterComponent } from './footer/footer.component';
import { WhatsappBtnComponent } from './whatsapp-btn/whatsapp-btn.component';
import { UpBtnComponent } from './up-btn/up-btn.component';
import { DirectivesModule } from './directives.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    WhatsappBtnComponent,
    UpBtnComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    AppRoutingModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }