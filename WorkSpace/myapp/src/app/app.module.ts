import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { MoovieProvider } from '../providers/moovie/moovie';
import { FeedPage } from '../pages/feed/feed';









@NgModule({
  declarations: [ // toda página criada se não tiver o modulo é necessario estar listada aqui
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    
      
    
  
  ],
  imports: [ // necessario listar os módulos aqui
    BrowserModule,
    IonicModule.forRoot(MyApp),    
    IntroPageModule,
    HttpModule ,
    FeedPageModule
            
    
    ],
  bootstrap: [IonicApp], // toda página criada se não tiver o modulo é necessario estar listada aqui
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoovieProvider
  ]
})
export class AppModule {}
