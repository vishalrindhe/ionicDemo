import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(username, password){
    // code for login user
    console.log("username:", username, "pass:", password);
    
    if(username=="abc" && password=="abc"){
      this.router.navigate(['/home']);

    }
  }

}
