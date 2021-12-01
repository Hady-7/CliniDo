import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorFormComponent } from './DoctorForm/doctor-form/doctor-form.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { FindDoctorComponent } from './HomeScreen/find-doctor/find-doctor.component';
import { CarouselComponent } from './HomeScreen/carousel/carousel.component';
import { StaticContentComponent } from './HomeScreen/static-content/static-content.component';
import { CardComponent } from './Layout/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './HomeScreen/search/search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OnlineComponent } from './OnlinePage/online/online.component';
import { DoctorDetailsComponent } from './HomeScreen/carousel/doctor-details/doctor-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorFormComponent,
    HeaderComponent,
    FooterComponent,
    FindDoctorComponent,
    CarouselComponent,
    StaticContentComponent,
    CardComponent,

    SearchComponent,
    OnlineComponent,
    DoctorDetailsComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    Ng2SearchPipeModule,

  ],
  exports: [
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
