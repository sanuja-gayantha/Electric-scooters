import { Component } from '@angular/core';

import { Faq } from '../faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  faqList: Faq[] = [
    {
      questionNo: 1,
      question: "1. What is the average range of your electric scooters?",
      answer: "Our electric scooters typically have a range between 15 to 25 miles on a single charge. However, this can vary depending on factors like rider weight, terrain, and speed. We provide detailed specifications for each scooter model on our product pages."
    },
    {
      questionNo: 2,
      question: "2. Do you offer a warranty for your electric scooters?",
      answer:"Yes, we stand behind the quality of our products. All our electric scooters come with a manufacturer's warranty. Warranty durations may vary by model, ranging from 6 months to 1 year. Specific warranty details can be found in the product descriptions or in the warranty section of our website."
    },
    {
      questionNo: 3,
      question: "3. Are spare parts available for purchase if needed?",
      answer: "Absolutely. We stock a wide range of spare parts and accessories for our electric scooters. Whether you need replacement tires, batteries, or other components, you can find them easily on our website. Additionally, our customer service team is here to assist you in finding the right parts and ensuring a smooth purchasing process."
    },

  ]
}
