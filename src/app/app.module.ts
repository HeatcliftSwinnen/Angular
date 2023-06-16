import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    // Toutes les déclarations de composants, de pipes, etc (ils ne peuvent être déclarés que dans un seul module)
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    // Import des modules dont on va avoir besoin
    BrowserModule,
    AppRoutingModule
  ],
  exports : [
    // Modules, Components, Pipes etc qu'on veut rendre exportables dans l'app
    // Pas mis de base, on s'en sert pas tant que ça ici, plutôt dans un module partagé
  ],
  providers: [
    // Informations sur l'injection de dépendances des services, interceptor etc
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
