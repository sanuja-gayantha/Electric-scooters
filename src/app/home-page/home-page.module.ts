import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeroModule } from '../hero/hero.module';
import { AboutSectionModule } from '../about-section/about-section.module';
import { BestSellersModule } from '../best-sellers/best-sellers.module';
import { ItemsSectionModule } from '../items-section/items-section.module';
import { WhyChooseUsModule } from '../why-choose-us/why-choose-us.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HeroModule,
    BestSellersModule,
    ItemsSectionModule,
    WhyChooseUsModule

  ],
  exports:[HomePageComponent]
})
export class HomePageModule { }
