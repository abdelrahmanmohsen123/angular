import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  result: any = {}
  status: boolean = false
  constructor(public _userService: UsersService, private _router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this._userService.userLogOut().subscribe(res => {
      this.result = res
    },
      () => {

      },
      () => {
        localStorage.removeItem('token')
        // localStorage.setItem('status', '0')
        this._userService.status = true
        this._router.navigate(['/'])
      })
  }
}
