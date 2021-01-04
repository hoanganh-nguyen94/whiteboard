import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhiteBoardConfigurationService
{

  whiteBoardEleWidth = 1000;
  whiteBoardEleHeight = 400;

  constructor() { }
}
