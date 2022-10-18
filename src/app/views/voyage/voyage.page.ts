import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voyage',
  templateUrl: './voyage.page.html',
  styleUrls: ['./voyage.page.scss'],
})
export class VoyagePage implements OnInit {
  book= 0;

  lieux: Array<any>=[
    {
      nom:'Les Chutes de la Lobé',
      ville:'Kribi',
      pays:'Cameroun',
      image:'assets/IMG14.jpg'
    },
    {
      nom:'La Tour Effeil',
      ville:'Paris',
      pays:'France',
      image:'assets/eiffel.jpg'
    },
    {
      nom:'The Cathedral, Il Duomo di Milano',
      ville:'Milan',
      pays:'Italy',
      image:'assets/MILAN.jpg'
    }
  ];
  alertController: any;
  constructor( private router: Router) {}
  async add( nom: string,pays: string){
    localStorage.setItem('key1',JSON.stringify({name:nom,country:pays}));
        this.router.navigate(['/details']);

  }
  async openVoyage(){
    const alert = await this.alertController.create(
     {
      header:'',
      subHeader:'Confirmer votre choix',
      message:'',
      buttons:[
        {
          text:'Annuler',
          role:'cancel',
          cssClass:'secondary',
          handler:() => { console.log('annuler');}
        },
         {
            text:'Plus tard',
            handler:()=>{ console.log('plus tard');}
          },
          {
            text:'Valider',
            handler:()=>{this.book=1;}
          }
        ]
    } );
    await alert.present();
    const {role} = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role',role);
  }


  ngOnInit() {

  }

}
