import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular'; // Importa NavController
@Component({
  selector: 'app-restrablecer',
  templateUrl: './restrablecer.page.html',
  styleUrls: ['./restrablecer.page.scss'],
})
export class RestrablecerPage implements OnInit {
  formRecuperar: FormGroup;
  constructor(public fb: FormBuilder, private navCtrl: NavController) {

    this.formRecuperar = this.fb.group({
      'usuario': new FormControl("", Validators.required)
    });
  }
  recuperar() {
    if (this.formRecuperar.value.usuario != '') {
      this.navCtrl.navigateForward('/login');
    } else {
      console.log('Debe ingresar un usuario')
    }
  }

  ngOnInit() {
  }
}