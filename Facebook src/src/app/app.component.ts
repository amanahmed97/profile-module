import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

declare var FB: any;

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent implements OnInit {
  details = "Nothing Vaialbel";
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
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
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId: "209067853522240",
        cookie: true,
        xfbml: true,
        version: "v3.1"
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  submitLogin() {
    console.log("submit login to facebook");
    // FB.login();
    FB.login(response => {
      console.log("submitLogin", response);
      if (response.authResponse) {
        //login success
        FB.api(
          "me?fields=id,name,address,birthday,email,gender,hometown,age_range",
          response => {
            console.log(JSON.stringify(response));
          }
        );
      } else {
        console.log("User login failed");
      }
    });
  }
}
