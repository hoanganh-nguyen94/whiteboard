import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, CdkDragEnter} from '@angular/cdk/drag-drop';
import {WhiteBoardConfigurationService} from './white-board-configuration.service';
import {loadImage} from 'canvas';

@Component({
  selector: 'app-white-board',
  template: `
    <div class="flex-container">
      <div class="item-list"
           cdkDropList
           #todoList="cdkDropList">
        <div class="item">
          <img
            src="../../../assets/a3.png"
            alt=""
            cdkDrag
            (cdkDragReleased)="dragEnter($event)">
        </div>
      </div>

      <div
        cdkDropList
        class="boundary"
        (cdkDropListDropped)="drop($event)"
        (cdkDropListEntered)="enterList($event)"
      >
        <canvas
          #whiteBoard
          [width]="configuration.whiteBoardEleWidth"
          [height]="configuration.whiteBoardEleHeight">
        </canvas>
      </div>
    </div>
  `,
  styleUrls: ['./white-board.component.scss']
})
export class WhiteBoardComponent implements OnInit
{

  @ViewChild('whiteBoard', {static: true}) private wbEl: ElementRef<HTMLCanvasElement>;

  ctx: CanvasRenderingContext2D;

  constructor(public configuration: WhiteBoardConfigurationService) { }

  ngOnInit(): void {
    this.ctx = this.wbEl.nativeElement.getContext('2d');
  }

  drop(evt: CdkDragDrop<any>): void {
    console.log(evt);
  }

  enterList(evt: CdkDragEnter<any>): void {
    console.log(evt);
  }

  dragEnter(evt: CdkDragEnter<any>) {
    this.addImage();
  }

  async addImage() {
    // const imgSrc: any = await loadImage('https://picsum.photos/200/300');
    const imgSrc: any = await loadImage('../../../assets/a3.png');
    this.ctx.drawImage(imgSrc, 0, 0, 200, 200);
  }
}
