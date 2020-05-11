import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';

import { HttpClientModule } from '@angular/common/http';
import { CribsService } from './services/cribs.service';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';
 
@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent,
    AddListingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CribsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
