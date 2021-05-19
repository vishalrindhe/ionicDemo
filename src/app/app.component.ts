import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core'
import { SplashPageModule } from './splash/splash.module';
const {SplashScreen} = Plugins
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    // this.splashScreen.hide();
  }
  
  ionViewDidEnter() {

    // this.splashScreen.hide();
    // SplashScreen.hide()

  }

}
