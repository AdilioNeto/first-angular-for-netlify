import { Routes } from '@angular/router';
import { WellComeComponent } from './well-come/well-come.component';
import { SecondRouteComponent } from './second-route/second-route.component';

export const routes: Routes = [
  { path: '', component: WellComeComponent},
  { path: 'second-route', component: SecondRouteComponent},
];
