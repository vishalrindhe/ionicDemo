import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { LocalNotifications } = Plugins;
// const{LocalNotifications} = Plugins

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  a: any;
  constructor() {}

  async ngOnInit():Promise<void>{
    // await 
    // this.a = (await LocalNotifications.areEnabled()).value;
    // console.log((await LocalNotifications.areEnabled()).value);
    // console.log(    LocalNotifications.requestPermission()
    // );
    
  }

  

  async schedule() {
    // await LocalNotifications.requestPermission();
    const randomId = Math.floor(Math.random() * 10000) + 1;

    LocalNotifications.schedule({
      notifications: [
        {
          title: "Test Title",
          body: "Test Body",
          id: randomId,
          schedule: {
            at: new Date(Date.now() + 1000 ), // in a minute
            repeats: true,
            every: "minute"
          }
        }
      ]
    });
  }
}
