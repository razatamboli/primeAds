import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SilderComponent } from './shared/components/silder/silder.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HordingCardsComponent } from './shared/components/hording-cards/hording-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SilderComponent,
    NavbarComponent,
    FooterComponent,
    HordingCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
