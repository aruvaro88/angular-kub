import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandDetailsComponent } from './components/band-details/band-details.component';
import { BandListComponent } from './components/band-list/band-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/bandslist', pathMatch: 'full' },
  { path: 'bandslist', component: BandListComponent },
  { path: 'details/:id', component: BandDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
