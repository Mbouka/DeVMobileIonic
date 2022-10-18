import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listeI=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

   pos=0;
  constructor(public alertController: AlertController) {}

  async openDialog(){
    const alert = await this.alertController.create(
     {
      header:'',
      subHeader:'Faites un choix',
      message:'',

      buttons:[
        {
          text:'Pair',
          role:'',
          cssClass:'secondary',
          handler:() => { this.pos=1;}
        },
         {
            text:'Impair',
            cssClass:'secondary',
            handler:()=>{this.pos=2;}
          }
        ]
    } );
    await alert.present();
    const {role} = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role',role);
  }



}
