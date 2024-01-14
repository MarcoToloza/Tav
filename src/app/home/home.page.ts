import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{


  formLogin: FormGroup;
  constructor(public fb:FormBuilder,private router: Router,private appComponent:AppComponent ) { 
    this.formLogin=this.fb.group({
      'usuario':new FormControl("",Validators.required),
      'contrasena':new FormControl("",Validators.required),
    });
  }
  ingresar(){
    this.appComponent.usuario=this.formLogin.value['usuario'];
    this.router.navigate(['/mostar']);
  };
  ngOnInit() {
  }
}
