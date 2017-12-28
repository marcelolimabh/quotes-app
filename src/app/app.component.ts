
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from './../pages/tabs/tabs';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  settingsPage = SettingsPage;
  tabsPage = TabsPage;
  rootPage: any = TabsPage;
  @ViewChild(Nav)nav:Nav;

  pages: Array<{ title: string, component: any, icon: any }>;



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


    this.pages = [
      { title: 'Quotes', component: this.tabsPage, icon: 'quote' },
      { title: 'Settings', component: this.settingsPage, icon:'settings'  }
    ];

    this.menuCtrl.enable(true);

  }

  onLoad(page: any){
      this.nav.setRoot(page.component);

  }
}

