import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, CdkDragMove} from '@angular/cdk/drag-drop';
import {WhiteBoardConfigurationService} from './white-board-configuration.service';
import {fabric} from 'fabric';

@Component({
  selector: 'app-white-board',
  template: `
    <div class="flex-container flex-dir-column">
      <div class="flex-container">
        <div
          class="item-list"
          cdkDropList
          [cdkDropListConnectedTo]="dropZone"
        >
          <div
            *ngFor="let item of components"
            class="item"
            cdkDrag
            [cdkDragData]="item.type"
            (cdkDragMoved)="moved($event)"
          >
            <h3 class="margin-bottom-0">{{item.label}}</h3>
            <div *cdkDragPlaceholder class="field-placeholder"></div>
          </div>
        </div>

        <div
          class="boundary drop-zone"
          #dropZone="cdkDropList"
          cdkDropList
          [cdkDropListSortingDisabled]="true"
          (cdkDropListDropped)="itemDropped($event)"
        >
          <canvas
            #whiteBoard>
          </canvas>
        </div>
      </div>
      <div class="margin-vertical-1">
        <button
          mat-raised-button
          color="primary"
          class="margin-right-1"
          (click)="zoomWhiteBoard('IN')"
        >+
        </button>
        <button
          mat-raised-button
          (click)="zoomWhiteBoard('OUT')">-
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./white-board.component.scss']
})
export class WhiteBoardComponent implements OnInit
{
  @ViewChild('whiteBoard', {static: true}) private wbEl: ElementRef<HTMLCanvasElement>;

  canvas: fabric.Canvas;
  droppedItems: any[];

  types = [
    {text: 'text'}
  ];

  fields: any[] = [];
  pointerPosition;


  components = [
    {type: 'CIRCLE', label: 'Circle'},
    {type: 'TRIANGLE', label: 'Triangle'},
    {type: 'LABEL', label: 'Label'},
  ];


  constructor(public configuration: WhiteBoardConfigurationService) { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas(this.wbEl.nativeElement, {
      width: this.configuration.whiteBoardEleWidth,
      height: this.configuration.whiteBoardEleHeight
    });
  }


  moved(event: CdkDragMove): void {
    this.pointerPosition = event.pointerPosition;
  }

  itemDropped(event: CdkDragDrop<any>): void {
    console.log(event);
    let element;
    const top = this.pointerPosition.y - this.wbEl.nativeElement.getBoundingClientRect().top;
    const left = this.pointerPosition.x - this.wbEl.nativeElement.getBoundingClientRect().left;

    switch (event.item.data)
    {
      case 'CIRCLE':
        element = new fabric.Circle({
          radius: 20, fill: 'green', left, top
        });
        break;
      case 'TRIANGLE':
        element = new fabric.Triangle({
          width: 20, height: 30, fill: 'blue', left, top
        });
        break;
      case 'LABEL':
        element = new fabric.Text('Label ne', {left, top});
        break;
    }

    this.canvas.add(element);

  }

  zoomWhiteBoard(state: string) {
    const currentZoom = this.canvas.getZoom() + (
      (state === 'IN')
        ? 0.1
        : -0.1
    );
    this.canvas.setZoom(currentZoom);

  }
}
