import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedPage } from './feed';

@NgModule({
  declarations: [ // já está declarada aqui então não precisa declarar na sessão @NgModule do app.module.ts
    FeedPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedPage), // está importando para o appmodule ts pegar
    
    
  ],
})
export class FeedPageModule {}
