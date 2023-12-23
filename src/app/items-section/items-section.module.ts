import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsSectionComponent } from './items-section.component';



@NgModule({
  declarations: [
    ItemsSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ItemsSectionComponent
  ]
})
export class ItemsSectionModule { }
