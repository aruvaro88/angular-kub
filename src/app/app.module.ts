import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BandListComponent } from './components/band-list/band-list.component';
import { BandDetailsComponent } from './components/band-details/band-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BandListComponent,
    BandDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
