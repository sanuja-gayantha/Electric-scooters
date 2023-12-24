import { Component, Input, OnInit } from '@angular/core';
import { Faq } from '../faq';

@Component({
  selector: 'app-faq-row',
  templateUrl: './faq-row.component.html',
  styleUrl: './faq-row.component.css'
})
export class FaqRowComponent implements OnInit {

  @Input() faq!:Faq;
  question:boolean = false;

  ngOnInit(): void {
    if(this.faq.questionNo===1){
      this.question = true;
    }
  }

  showHide():void{
    this.question=!this.question;
  }

}
