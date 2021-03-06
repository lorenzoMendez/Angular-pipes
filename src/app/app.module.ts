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
import { MyPipePipe } from './pipes/my-pipe.pipe';
import { DomSafePipe } from './pipes/dom-safe.pipe';
import { PasswordPipe } from './pipes/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyPipePipe,
    DomSafePipe,
    PasswordPipe
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
