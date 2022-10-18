import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.page.html',
  styleUrls: ['./fruits.page.scss'],
})
export class FruitsPage implements OnInit {
  fruits: Array<any>=[
    {
      nom:'Fraises',
      description:'La fraise est un fruit rouge issu des fraisiers espèces de plnates harbacées...',
      image:'assets/fraise.png'
    },
    {
      nom:'Banane',
      description:'La banane est un fruit remarquable grace à son épaisse peau jaune.',
      image:'assets/banane.jpg'
    },
    {
      nom:'Orange',
      description:'An orange is a roung,sweetjuicy citrus fruit,yellow-reddish in color',
      image:'assets/orange.jpg'
    },
    {
      nom:'Pineapple',
      description:'An Pineapple is a roung,sweetjuicy citrus fruit,yellow-reddish in color',
      image:'assets/banane.jpg'
    },
    {
      nom:' Tangerine',
      description:'An Tangerine is a roung,sweetjuicy citrus fruit,yellow-reddish in color',
      image:'assets/fraise.png'
    },
    {
      nom:'Watermelon',
      description:'A Watermelon is a roung,sweetjuicy citrus fruit,yellow-reddish in color',
      image:'assets/orange.jpg'
    },
    {
      nom:'Lemon',
      description:'An lemon is a roung,sweetjuicy citrus fruit,yellow-reddish in color',
      image:'assets/orange.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
