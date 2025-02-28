import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
/**
 * Remember to add this in (import) in the app.module file, under providers
 */
export class RouteGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    alert("You are not allowed to access this page as it is undergoing development and/or refresh.")
    this.router.navigate(['home'])
    return false;
    // As long as you return false, the router will renavigate the user to the home page. 
    // The router.navigate is not necessary here.
  }
}
