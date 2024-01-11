import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;
  constructor(public fb:FormBuilder,private router: Router,private appComponent:AppComponent ) { 
    this.formLogin=this.fb.group({
      'usuario':new FormControl("",Validators.required),
      'password':new FormControl("",Validators.required),
    });
  }
  ingresar(){
    this.appComponent.usuario=this.formLogin.value['usuario'];
    this.router.navigate(['/home']);
  };

  ngOnInit() {
  }

}
