import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { RestService } from '../rest.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  email: string = ""
  firstName: string = ""
  lastName: string = ""
  password: string = ""

  constructor(private readonly fb: FormBuilder, private readonly rest: RestService) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      'email': [null, [Validators.required, Validators.email]],
      'firstName': [null, [Validators.required]],
      'lastName': [null, [Validators.required]],
      'password': [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  register() {
    this.rest.register({
      fname: this.loginForm.get('firstName').value,
      lname: this.loginForm.get('lastName').value,
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    })
  }


}
