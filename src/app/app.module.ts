import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarModule } from './navbar/navbar.module';
import { TopBannerModule } from './top-banner/top-banner.module';
import { FooterModule } from './footer/footer.module';
import { NewsletterModule } from './newsletter/newsletter.module';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    TopBannerModule,
    HomePageModule,
    FooterModule,
    NewsletterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
