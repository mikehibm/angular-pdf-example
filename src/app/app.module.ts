import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ApiClientService } from './api-client.service';
import { AppComponent } from './app.component';
import { ShowPdfComponent } from './show-pdf/show-pdf.component';

import 'rxjs/add/operator/toPromise';

@NgModule({
  declarations: [
    AppComponent,
    ShowPdfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
