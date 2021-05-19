import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { Plugins } from '@capacitor/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Platform } from '@ionic/angular';

const { capacitorSplashScreen } = Plugins;
// import { SplashScreen } from '@capacitor/splash-screen';

// import { SplashPageModule } from './splash/splash.module';
// const {SplashScreen} = Plugins
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router, public platform: Platform) {
    // this.splashScreen.hide();
    this.initializeApp()
    
    this.router.navigateByUrl('splash')

  }
  initializeApp() {

    this.platform.ready().then(() => {

      capacitorSplashScreen.hide();
      SplashScreen.hide();


    });

  }
  
  ionViewDidEnter() {

    // this.splashScreen.hide();
    // SplashScreen.hide()

  }

  // initializeApp(){
     
  // }

}
