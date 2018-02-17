import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CustomMaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserComponent} from './user/user.component';
import {AppRoutingModule} from './core/app.routing.module';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [AppComponent, UserComponent, LoginComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CustomMaterialModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
