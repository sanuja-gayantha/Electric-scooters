import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FaqRowModule } from '../faq-row/faq-row.module';



@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    FaqRowModule
  ],
  exports:[
    FaqComponent
  ]
})
export class FaqModule { }
