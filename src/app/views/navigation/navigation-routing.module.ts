import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationPage } from './navigation.page';

const routes: Routes = [
  {
    path: '',
    component: NavigationPage,
    children:[
      {
        path: 'accueil',
        loadChildren: () => import('../.././onglets/accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: 'personne',
        loadChildren: () => import('../.././onglets/personne/personne.module').then( m => m.PersonnePageModule)
      },
      {
        path: 'fruits',
        loadChildren: () => import('../.././onglets/fruits/fruits.module').then( m => m.FruitsPageModule)
      },

    ]
  },
  {
    path:'',
    redirectTo:'navigation',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationPageRoutingModule {}
