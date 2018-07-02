import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  /* toda vez que eu this. estou chamando alguma função
   da intropage  depois se eu colocar ponto dinovo estou chamando as propriedades dessa funçaõ */
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }
  goToTabsPage() { // quando não especifico se é public ou não ele ja´entende como public, agora é public no html
    this.navCtrl.push(TabsPage)
  }

}
