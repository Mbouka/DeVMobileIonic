import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.page.html',
  styleUrls: ['./personne.page.scss'],
})
export class PersonnePage implements OnInit {
  persone: Array<any>=[
    {
      nom:'Kenfack Paul',
      filiere:'SRT',
      anneeAca:'2022-2023',
      image:'assets/pers2.jpg'
    },
    {
      nom:'Ntimbi Bernardette',
      filiere:'ISI',
      anneeAca:'2021-2022',
      image:'assets/pers3.jpg'
    },
    {
      nom:'Toto estrella ',
      filiere:'SRT',
      anneeAca:'2022-2023',
      image:'assets/pers4.jpg'
    },
    {
      nom:' Atangana Tata',
      filiere:'ISI',
      anneeAca:'2021-2022',
      image:'assets/pers5.jpg'
    },
    {
      nom:'Pierre Bill',
      filiere:'SRT',
      anneeAca:'2022-2023',
      image:'assets/pers6.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
