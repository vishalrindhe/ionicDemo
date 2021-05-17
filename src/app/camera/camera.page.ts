import { Component, OnInit } from '@angular/core';
import {CameraOptions, CameraResultType, Plugins} from '@capacitor/core';

const {Camera} = Plugins

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  src: string="";
  abc: string;

  constructor() { }

takePic(){
  let options:CameraOptions ={
    quality:100,
    resultType: CameraResultType.DataUrl,
    saveToGallery:true
  }
  Camera.getPhoto(options).then((result)=>{
    if(result.dataUrl){
      this.src =result.dataUrl
      this.abc=this.src
    }
  }),(err)=>{
    alert(JSON.stringify(err));
  }
}

  ngOnInit() {
  }

}
