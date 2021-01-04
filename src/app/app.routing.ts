import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/white-board/white-board.module').then(m => m.WhiteBoardModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot([
      ...routes
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting {}
