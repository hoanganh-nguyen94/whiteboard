import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WhiteBoardRouting} from './white-board.routing';
import {WhiteBoardComponent} from './white-board.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    WhiteBoardComponent,
  ],
  imports: [
    CommonModule,
    WhiteBoardRouting,
    DragDropModule,
    MatButtonModule
  ]
})
export class WhiteBoardModule {}
