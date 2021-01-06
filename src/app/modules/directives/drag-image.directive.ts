import {Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dropZone]'
})
export class DragImageDirective
{
  @HostBinding('class.fileover') fileOver: boolean;
  @Output() fileDropped = new EventEmitter<any>();

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt): void {
    evt.preventDefault();
    evt.stopPropagation();
    console.log(evt);
    this.fileOver = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt): void {
    evt.preventDefault();
    evt.stopPropagation();
    console.log(evt);

    this.fileOver = false;
  }

  // Drop listener
  @HostListener('drop', ['$event'])
  public ondrop(evt): void {
    // evt.preventDefault();
    // evt.stopPropagation();
    console.log(evt);

  }
}
