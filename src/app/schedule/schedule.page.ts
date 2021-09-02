import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Network, NetworkStatus, Plugins, PluginListenerHandle, HapticsPlugin } from '@capacitor/core';

// import { setInterval } from 'timers';

const { Haptics } = Plugins;

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  
  networkListener: PluginListenerHandle
  networkStatus: NetworkStatus = {
    connected: false,
    connectionType: 'unknown' 
}
  constructor() {

  }

  // ngOnChanges(changes: SimpleChanges) {
  //   const newNumber:SimpleChange = changes.networkStatus
  //   console.log("newNUmber", newNumber.currentValue);
    
  //     console.log("run changes");
      
  //   }

   ngOnInit() {

  setInterval(() => {
    this.p()
  }, 1);

  }



  async p(){
    this.networkListener = Network.addListener('networkStatusChange', status => {
      // console.log('Network status changed', status);
      this.networkStatus = status
      // console.log('abc',this.networkStatus);
      
      
    });
  
    this.networkStatus = await Network.getStatus()
    // console.log('status',this.networkStatus);
  
  }

  // ngOnDestroy():void{
  //   this.networkListener.remove()
  // }
}

