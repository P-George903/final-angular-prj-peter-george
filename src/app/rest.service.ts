import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_URL } from '../environments/environment'
import { JwtService } from './jwt.service'

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private readonly http: HttpClient,
    private readonly jwtService: JwtService) { }

  register(body: {
    email: string;
    password: string;
    fname: string;
    lname: string;
  }): Promise<any> {
    return  this.http.post(`${API_URL}/register`, body).toPromise()
  }

  logIn(body): Promise<any> {
    return this.http
      .post(`${API_URL}/auth`, body)
      .toPromise()
  }
  
  logOut() {
    this.jwtService.removeJwt()
  }
  
  getPhone(id: number): Promise<any> {
    const jwt = this.jwtService.getJwt()
    return this.http
      .get(
        `${API_URL}/${id}`,
        { headers: { Authorization: `Bearer ${jwt}` } }
      ).toPromise();
  }

  deletePhone(id: number): Promise<any> {
    const jwt = this.jwtService.getJwt()
    return this.http
      .delete(
        `${API_URL}/${id}`,
        { headers: { Authorization: `Bearer ${jwt}` } }
      ).toPromise();
  }

  update(id: number, editModel: any): Promise<any> {
    const jwt = this.jwtService.getJwt()
    return this.http
      .put(`${API_URL}/${id}`, editModel, { headers: { Authorization: `Bearer ${jwt}` } })
      .toPromise()
      .then(res => {
       
      })
  }
  
  onNotify(saleAlert: any[]): Promise<any> {
    const jwt = this.jwtService.getJwt()
    return this.http
      .post(
        `${API_URL}/notify`,
        { saleAlert },
        { headers: { Authorization: `Bearer ${jwt}` } }
      ).toPromise();
  }
}
