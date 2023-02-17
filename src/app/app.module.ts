import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './components/hotel-list/hotel-list/hotel-list.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FilterPipe } from './shared/pipe/filter.pipe';
import { StarRatingComponent } from './shared/components/star-rating/star-rating.component';
import { LoginComponent } from './pages/authentification/login/login.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
registerLocaleData(localeFr, 'fr')
@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    FilterPipe,
    StarRatingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // DEBUT: LOGIQUE NGX-RECAPCTHA
    NgxCaptchaModule,
    // FIN: LOGIQUE NGX-RECAPCTHA
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
