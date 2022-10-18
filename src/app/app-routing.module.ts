import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'students',
    loadChildren: () => import('./views/students/students.module').then( m => m.StudentsPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./views/tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'voyage',
    loadChildren: () => import('./views/voyage/voyage.module').then( m => m.VoyagePageModule)
  },
  {
    path: 'accueil1',
    loadChildren: () => import('./views/accueil1/accueil1.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'accueil1/preference',
    loadChildren: () => import('./views/preference/preference.module').then( m => m.PreferencePageModule)
  },
  {
    path: 'preference',
    loadChildren: () => import('./views/preference/preference.module').then( m => m.PreferencePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./views/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'propos',
    loadChildren: () => import('./views/propos/propos.module').then( m => m.ProposPageModule)
  },
  {
    path: 'navigation',
    loadChildren: () => import('./views/navigation/navigation.module').then( m => m.NavigationPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./onglets/accueil/accueil.module').then( m => m.AccueilPageModule)
  },

  {
    path: 'personne',
    loadChildren: () => import('./onglets/personne/personne.module').then( m => m.PersonnePageModule)
  },
  {
    path: 'fruits',
    loadChildren: () => import('./onglets/fruits/fruits.module').then( m => m.FruitsPageModule)
  },


  {
    path: 'details/:ville',
    loadChildren: () => import('./views/details/details.module').then( m => m.DetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
