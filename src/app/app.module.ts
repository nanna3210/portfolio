import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NannaMateComponent } from './maty/nanna-mate/nanna-mate.component';
import { MatModule } from './app-module/mat.module';

@NgModule({
  declarations: [AppComponent, NannaMateComponent],
  imports: [
    BrowserModule,
    MatModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
