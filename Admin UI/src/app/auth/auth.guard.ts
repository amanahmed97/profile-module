import { Injectable } from "@angular/core";
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { Loginservice } from "../login/login.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanLoad {
  constructor(private authservice: Loginservice, private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authservice.loggedIn) {
      this.router.navigateByUrl("/login");
    }
    return this.authservice.loggedIn;
  }
}
