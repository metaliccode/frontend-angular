import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DasarAngularComponent } from './dasar-angular/dasar-angular.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FeaturesComponent } from './pages/features/features.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { HttpClientModule } from '@angular/common/http';
import { ListMemberComponent } from './member/list-member/list-member.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { EditMemberComponent } from './member/edit-member/edit-member.component';
import { ApiComponent } from './api-axios/api/api.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialUiComponent } from './material-ui/material-ui.component';
import { MatLineModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { TampilanUiModule } from './tampilan-ui/tampilan-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    DasarAngularComponent,
    BannerComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    FeaturesComponent,
    TeamsComponent,
    ListMemberComponent,
    EditMemberComponent,
    ApiComponent,
    // MaterialUiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatLineModule,
    MatSliderModule,
    MatButtonModule,
    TampilanUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
