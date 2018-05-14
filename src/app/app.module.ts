import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {ErrorPageModule} from './error-page/error-page.module';
import {CoreModule} from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    ShoppingListModule,
    SharedModule,
    ErrorPageModule,
    CoreModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
