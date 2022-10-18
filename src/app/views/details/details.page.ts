import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  name='';
  country='';
   ville ='';
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {

    //this.ville = this.route.snapshot.paramMap.get('ville');
    const retrieve = localStorage.getItem('key1');

  }

}
