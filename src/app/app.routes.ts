import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'content',
    loadComponent: () => import('./pages/content/content.page').then( m => m.ContentPage)
  },
  {
    path: 'final',
    loadComponent: () => import('./pages/final/final.page').then( m => m.FinalPage)
  },
  {
    path: 'quiz',
    loadComponent: () => import('./pages/quiz/quiz.page').then( m => m.QuizPage)
  },
];
