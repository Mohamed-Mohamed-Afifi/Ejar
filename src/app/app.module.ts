import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './Components/navbar/navbar.component';
// import { AboutComponent } from './Components/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './Components/footer/footer.component';
import { BannerComponent } from './Components/banner/banner.component';
import { CatalogComponent } from './Components/catalog/catalog.component';
import { EventsComponent } from './Components/events/events.component';
import { QuestionsComponent } from './Components/questions/questions.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { RegistrationComponent } from './Components/registration/registration.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    CatalogComponent,
    EventsComponent,
    QuestionsComponent,
    HomepageComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
