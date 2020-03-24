import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Loginservice } from "./login/login.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Inbox",
      url: "/folder/Inbox",
      icon: "mail"
    },
    {
      title: "Logs",
      url: "/folder/Logs",
      icon: "book"
    },
    {
      title: "View Data",
      url: "/folder/View_Data",
      icon: "analytics"
    },
    {
      title: "Active Users",
      url: "/folder/Active_Users",
      icon: "cloud-done"
    },
    {
      title: "BlackListed Users",
      url: "/folder/BlackListed_Users",
      icon: "warning"
    },
    {
      title: "Settings",
      url: "/folder/In-Active_Users",
      icon: "settings"
    }
  ];
  public labels = ["Answer Queries ! ", "Issues", "Statistics"];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private helper: Loginservice
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        page => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
  Logout() {
    this.helper.Logout();
  }
}
