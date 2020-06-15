import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BandListComponent } from './components/band-list/band-list.component';
import { BandDetailsComponent } from './components/band-details/band-details.component';
import { FilterPipe } from './pipes/filter.pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewBandFormComponent } from './components/new-band-form/new-band-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BandListComponent,
    BandDetailsComponent,
    FilterPipe,
    NewBandFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
