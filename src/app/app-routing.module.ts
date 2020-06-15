import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandDetailsComponent } from './components/band-details/band-details.component';
import { BandListComponent } from './components/band-list/band-list.component';
import { NewBandFormComponent } from './components/new-band-form/new-band-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/bandslist', pathMatch: 'full' },
  { path: 'bandslist', component: BandListComponent },
  { path: 'details/:id', component: BandDetailsComponent },
  { path: 'newband', component: NewBandFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
