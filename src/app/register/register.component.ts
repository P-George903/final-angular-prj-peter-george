import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { RestService } from '../rest.service'
import { JwtService } from '../jwt.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public loginForm: FormGroup;
  email: string = ""
  firstName: string = ""
  lastName: string = ""
  password: string = ""

constructor(private readonly fb: FormBuilder, private readonly rest: RestService, 
    private readonly jwtService: JwtService,
    private readonly router: Router) {
      
      this.loginForm = this.fb.group({
        'email': [null, [Validators.required, Validators.email]],
        'firstName': [null, [Validators.required]],
        'lastName': [null, [Validators.required]],
        'password': [null, [Validators.required, Validators.minLength(8)]]
      });
    }
  
    ngOnInit():  void {
  }

  register() {
    this.rest.register({
      fname: this.loginForm.get('firstName').value,
      lname: this.loginForm.get('lastName').value,
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }).then(res => {
      this.jwtService.setJwt(res)
      this.router.navigate([''])
    })
    window.alert('Registration Complete!');
  }
}
