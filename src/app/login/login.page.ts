import { Component, ContentChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { IonInput, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  
  valuefromuser:any
  constructor(private router:Router,public toastController: ToastController, public formBuilder: FormBuilder) {}

  ngOnInit() {

  
  }

  passwordType: string = 'password';
 passwordIcon: string = 'eye-off';

 hideShowPassword() {
     this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
     this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
 }

  LoginForm = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      // Validators.minLength(4),
      Validators.pattern('[a-zA-Z]{4,8}$')
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.pattern('^(?=.*[0-9])(?=.*[a-z A-Z]).{4,8}$')
    ])
  });


  submit(){
    console.log('form data',this.LoginForm.value.username);
    
    if(this.LoginForm.value.username=="abcd" && this.LoginForm.get('password').value=="abc1"){
      this.router.navigate(['/home']);
    } else{
      this.presentToast()
      // this.presentToastWithOptions()
    }

  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: "You'v entered incorrect credentials.",
      keyboardClose: true,
      duration: 2000,
      position:"bottom" ,
      header:"Error",
      
      // css property to toast 
      cssClass: 'toastLoginPage',
      buttons: [
        {
          icon:'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]

    });
    toast.present();
  }



  // login(username, password){
  //   // code for login user
  //   console.log("username:", username, "pass:", password);
    
  //   if(username=="abc" && password=="abc"){
  //     this.router.navigate(['/home']);
  //   } else{
  //     this.presentToast()
  //     this.presentToastWithOptions()
  //   }
  // }

}
