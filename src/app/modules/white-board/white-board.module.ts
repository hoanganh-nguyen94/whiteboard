import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WhiteBoardRouting} from './white-board.routing';
import {WhiteBoardComponent} from './white-board.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [WhiteBoardComponent],
  imports: [
    CommonModule,
    WhiteBoardRouting,
    DragDropModule
  ]
})
export class WhiteBoardModule {}
