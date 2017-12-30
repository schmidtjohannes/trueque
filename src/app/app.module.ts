import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule, MatIconModule, MatInputModule} from '@angular/material';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { MatCardModule } from '@angular/material';

// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';

import { AgmCoreModule } from '@agm/core';
import { ProviderDetailsComponent } from './provider-details/provider-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProviderDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYftcezjTZ0deIbS__XfmWVgH5aTgTovk'
    }),
    MatButtonToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [DataService], // <-Add DataService
  bootstrap: [AppComponent]
})
export class AppModule { }
