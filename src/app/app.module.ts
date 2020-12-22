import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ButtonModule } from '@bit/heyitsgeo.ng-semantic-ui.button';
import { StyleLinksModule } from '@bit/heyitsgeo.ng-semantic-ui.style-links';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BtnModule } from '@bit/austinhenderson19.mobile-components.btn';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    StyleLinksModule,
    BtnModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
