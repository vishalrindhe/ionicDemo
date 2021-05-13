import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // @ViewChild('tabs', { static: true }) tabs: IonTabs;
  // @ViewChild('tabs') tabs: IonTabs;


  constructor() {
  // this.tabs.select('tab');

  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }


  // ionViewDidEnter() {
  //   this.tabs.select('2');
  //  }
  
}
