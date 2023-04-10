import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
  StartComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [StartComponent]
})
export class AppModule { }
