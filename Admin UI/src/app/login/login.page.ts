import { Component, OnInit } from "@angular/core";
import { Loginservice } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  username = "";
  password = "";
  constructor(private helper: Loginservice) {}

  ngOnInit() {}
  LogIn() {
    this.helper.login(this.username, this.password);
    this.username = "";
    this.password = "";
  }
  SignUp() {
    this.helper.signup(this.username, this.password);
    this.username = "";
    this.password = "";
  }
}
