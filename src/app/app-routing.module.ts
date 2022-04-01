import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api-axios/api/api.component';
import { EditMemberComponent } from './member/edit-member/edit-member.component';
import { ListMemberComponent } from './member/list-member/list-member.component';
import { FeaturesComponent } from './pages/features/features.component';
import { HomeComponent } from './pages/home/home.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { TombolComponent } from './tampilan-ui/tombol/tombol.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'features',
    component: FeaturesComponent,
  },
  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: 'list-member',
    component: ListMemberComponent,
  },
  {
    path: 'edit-member/:id',
    component: EditMemberComponent,
  },
  {
    path: 'api',
    component: ApiComponent,
  },
  {
    path: 'material',
    component: TombolComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
