import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('test') analogClock: ElementRef;

  // async onAction() {
  //     await this.analogClock.nativeElement.testComponentMethod();
  // }

}
