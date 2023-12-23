import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellersComponent } from './best-sellers.component';
import { CardModule } from '../card/card.module';



@NgModule({
  declarations: [
    BestSellersComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports:[
    BestSellersComponent
  ]
})
export class BestSellersModule { }
