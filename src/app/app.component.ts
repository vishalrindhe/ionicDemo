import { Component } from '@angular/core';
import { Router } from '@angular/router';


// import { SplashScreen } from '@ionic-native/splash-screen';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Capacitor, Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;
import { Platform } from '@ionic/angular';

const { capacitorSplashScreen} = Plugins;
// import { SplashScreen } from '@capacitor/splash-screen';

// import { SplashPageModule } from './splash/splash.module';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router, public platform: Platform) {
  
    this.initializeApp()
    Capacitor.Plugins.SplashScreen.hide()
    this.router.navigateByUrl('splash')

  }

  
  
  initializeApp() {

    this.platform.ready().then(() => {

      // capacitorSplashScreen.hide();
      // SplashScreen.hide();
      // this.splashScreen.hide();


    });

  }
  
  ionViewDidEnter() {
    // this.splashScreen.hide();

    // this.splashScreen.hide();
    // SplashScreen.hide()
    // capacitorSplashScreen.hide();
    // SplashScreen.hide();

  }

  // initializeApp(){
     
  // }

}
