import { Injectable } from "@angular/core";
import { Platform, ToastController } from "@ionic/angular";

import Parse from "parse";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class Loginservice {
  result: string = "";
  constructor(private platform: Platform, private route: Router) {
    Parse.initialize(
      "vLJKyrArYiVglIJ7IE5qSS71XMTPsLxawOVpgzDW",
      "QG4gW95tViinvenGEAo0oWrhqb1M6pbcWBvIxjnS"
    ); // use your appID & your js key

    Parse.serverURL = "https://parseapi.back4app.com/"; // use your server url

    let install = new Parse.Installation();
    install.set("deviceType", this.platform.platforms().toString());

    install.save(null, {
      success: install => {
        // Execute any logic that should take place after the object is saved.
        this.result = "New object created with objectId: " + install.id;
      },
      error: (install, error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        this.result =
          "Failed to create new object, with error code:" +
          error.message.toString();
      }
    });
  }

  loggedIn = false;

  login(username, password) {
    Parse.User.logIn(username, password).then(
      resp => {
        // console.log("Logged in successfully", resp);
        this.loggedIn = true;
        this.route.navigateByUrl("/folder/inbox");
      },
      err => {
        console.log("Error logging in", err.message);
      }
    );
  }
  signup(username, password) {
    Parse.User.signUp(username, password).then(
      resp => {
        // console.log("Signed Up successfully", resp);
        this.loggedIn = true;
        this.route.navigateByUrl("/folder/inbox");
      },
      err => {
        console.log("Error signing in", err.message);
      }
    );
  }
  Logout() {
    Parse.User.logOut().then(
      resp => {
        console.log("Logged out successfully", resp);
        this.loggedIn = false;
        this.route.navigateByUrl("/login");
      },
      err => {
        console.log("Error logging out", err);
      }
    );
  }
}
