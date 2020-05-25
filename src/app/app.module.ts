import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importamos estas configuraciones paraa configurar el idioma de la aplicacion
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
// Registramos el idioma importado
registerLocaleData( localeEs );
registerLocaleData( localeFr );

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      // Agregamos el Id de la aplicacacion y el idioma del mismo
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
