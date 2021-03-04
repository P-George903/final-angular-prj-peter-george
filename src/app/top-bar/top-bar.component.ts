import { Component, TemplateRef, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RestService } from '../rest.service'
import { JwtService } from '../jwt.service'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit {
  email: string = ""
  password: string = ""

  userIcon = faUserCircle
  signIn = faSignInAlt
  cart = faShoppingCart
  modalRef: BsModalRef;

  constructor(public modalService: BsModalService, private readonly rest: RestService,
    private readonly jwtService: JwtService,
    private readonly router: Router) { }

  ngOnInit() {
    this.modalService.onHide.subscribe((e) => {
    });
  }

  openModal(template: TemplateRef<any>) {
    const user = {
      id: 10
    };
    this.modalRef = this.modalService.show(template, {
      initialState: user
    });
  }

  logIn() {
    this.rest.logIn({
      email: this.email, password:
        this.password
    }).then(res => {
      // console.log('jwt', res)
      this.jwtService.setJwt(res)
      this.router.navigate([''])
    })
  }

  logOut() {
    this.rest.logOut();
    console.warn('You are logged out!')
  }
}