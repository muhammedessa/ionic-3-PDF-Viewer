
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  pdfSrc: string = 'assets/pdf1.pdf';

 
    constructor(public navCtrl: NavController) {
 
    }

    ionViewDidLoad() {
 
    }
    
     

}
