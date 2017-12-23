import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';




@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  person: string;
  text: string

  constructor(private viewCtrl: ViewController, public navParams: NavParams) {
  }

  onClose(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad(){
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');

  }




}
