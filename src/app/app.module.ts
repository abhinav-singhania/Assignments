import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RoutingmoduleModule} from './routingmodule/routingmodule.module';
import { LandingpageComponent, Modal } from './landingpage/landingpage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MaterialmoduleModule } from './materialmodule/materialmodule.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JsondataService } from './services/jsondata.service';
import { SenddataService } from './services/senddata.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingpageComponent,
    CheckoutComponent,
    Modal
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingmoduleModule,
    MaterialmoduleModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [JsondataService, SenddataService],
  bootstrap: [AppComponent],
  entryComponents: [Modal]
})
export class AppModule { }
