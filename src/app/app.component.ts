import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <mat-sidenav-container class="sidenav-container">
      <!--      <mat-sidenav #drawer class="sidenav" fixedInViewport-->
      <!--          [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"-->
      <!--          [mode]="(isHandset$ | async) ? 'over' : 'side'"-->
      <!--          [opened]="(isHandset$ | async) === false">-->
      <!--        <mat-toolbar>Menu</mat-toolbar>-->
      <!--        <mat-nav-list>-->
      <!--          <a mat-list-item href="#">Link 1</a>-->
      <!--        </mat-nav-list>-->
      <!--      </mat-sidenav>-->
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            *ngIf="isHandset$ | async">
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
          <span>{{title}}</span>
        </mat-toolbar>
        <div class="container">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  title = 'dnd';


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
