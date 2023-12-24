import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeroModule } from '../hero/hero.module';
import { BestSellersModule } from '../best-sellers/best-sellers.module';
import { ItemsSectionModule } from '../items-section/items-section.module';
import { WhyChooseUsModule } from '../why-choose-us/why-choose-us.module';
import { SupportModule } from '../support/support.module';
import { TestimonialsModule } from '../testimonials/testimonials.module';
import { FaqModule } from '../faq/faq.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HeroModule,
    BestSellersModule,
    ItemsSectionModule,
    WhyChooseUsModule,
    SupportModule,
    TestimonialsModule,
    FaqModule,

  ],
  exports:[HomePageComponent]
})
export class HomePageModule { }
