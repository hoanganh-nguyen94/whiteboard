import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, CdkDragMove} from '@angular/cdk/drag-drop';
import {WhiteBoardConfigurationService} from './white-board-configuration.service';
import {fabric} from 'fabric';

@Component({
  selector: 'app-white-board',
  template: `
    <div class="flex-container">
      <div
        class="item-list"
        cdkDropList
        [cdkDropListConnectedTo]="dropZone"
      >
        <div
          class="item"
          cdkDrag
          [cdkDragData]="'Image'"
          (cdkDragMoved)="moved($event)"
        >
          <h3 class="margin-bottom-0">Text</h3>
        </div>

        <div
          class="item"
          cdkDrag
          [cdkDragData]="'Image'"
          (cdkDragMoved)="moved($event)"
        >
          <h3 class="margin-bottom-0">Circle</h3>
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

  // tslint:disable-next-line:variable-name
  _currentIndex;
  // tslint:disable-next-line:variable-name
  _currentField;
  // tslint:disable-next-line:variable-name
  _pointerPosition;


  constructor(public configuration: WhiteBoardConfigurationService) { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas(this.wbEl.nativeElement, {
      width: this.configuration.whiteBoardEleWidth,
      height: this.configuration.whiteBoardEleHeight
    });
  }


  moved(event: CdkDragMove): void {
    this._pointerPosition = event.pointerPosition;
  }

  itemDropped(event: CdkDragDrop<any>): void {
    // fabric.Image.fromURL('../../../assets/a3.png', (img) => this.canvas.add(img), {
    //   top: this._pointerPosition.y - this.wbEl.nativeElement.getBoundingClientRect().top,
    //   left: this._pointerPosition.x - this.wbEl.nativeElement.getBoundingClientRect().left,
    // });

  }

}
