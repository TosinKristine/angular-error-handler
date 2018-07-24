import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ErrorModule} from './Errors/error.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
