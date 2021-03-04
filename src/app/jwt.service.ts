import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class JwtService {
  jwtKey: string = 'user_jwt'
  constructor() {}
  
  setJwt(item: string){
    localStorage.setItem(this.jwtKey, item)
  }
  
  getJwt(){
    return localStorage.getItem(this.jwtKey)
  }
  
  removeJwt(){
    localStorage.removeItem(this.jwtKey)
  }
}
