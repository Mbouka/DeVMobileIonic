import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../.././home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'students',
        loadChildren: () => import('../.././views/students/students.module').then( m => m.StudentsPageModule)
      },
      {
        path: 'voyage',
        loadChildren: () => import('../.././views/voyage/voyage.module').then( m => m.VoyagePageModule)
      }
    ]
  },
  {
    path:'',
    redirectTo:'tab',
    pathMatch:'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
