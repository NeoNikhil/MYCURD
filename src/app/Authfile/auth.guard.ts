import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GaurdSerService } from '../services/GS/gaurd-ser.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router,private GS:GaurdSerService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


   if(this.GS.Logged()){
    return true;
  }   else{
    this.route.navigateByUrl('/log');
    return false;

  }

  }

}
