import { Component, OnInit } from '@angular/core';

import { Card } from '../card';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.css'
})
export class BestSellersComponent implements OnInit {
  // itemId: number;
  // itemName: string;
  // actualPrice: number;
  // discountPrice: number;
  // imageUrl: string;
  // onSale:boolean;

  bestSellersList: Card[] = [
    {
      itemId: 1,
      itemName: 'Booster Brave F1',
      actualPrice: 490.00,
      discountPrice: 0,
      imageUrl: 'https://i.ibb.co/pWFF6g7/Booster-Brave-F1.jpg',
      onSale: false

    },
    {
      itemId: 2,
      itemName: 'Libero X350',
      actualPrice: 875.00,
      discountPrice: 799.00,
      imageUrl: 'https://i.ibb.co/sj5YPgL/Libero-X350.jpg',
      
      onSale: true

    },
    {
      itemId: 3,
      itemName: 'Practico S2 Exclusive',
      actualPrice: 750.00,
      discountPrice: 600.00,
      imageUrl: 'https://i.ibb.co/hXh0tM6/Practico-S2-Exclusive.jpg',
      onSale: false

    },
    {
      itemId: 4,
      itemName: 'U-Lock Force MAX',
      actualPrice: 90.00,
      discountPrice: 75.00,
      imageUrl: 'https://i.ibb.co/b3V45J4/U-Lock-Force-MAX.jpg',
      onSale: true

    }
  ]

  ngOnInit(): void {

  }

}
