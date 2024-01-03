import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaurdSerService {

  Logged(){
   return localStorage.getItem('formvalue')
  }

  constructor() { }
}
