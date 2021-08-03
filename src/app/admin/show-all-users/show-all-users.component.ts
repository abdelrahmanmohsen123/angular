import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent implements OnInit {
  allUsers: any = []
  result: any = {}
  msgCheck: any = null
  constructor(private _userService: UsersService) {
    this.getAllUsers()
  }

  ngOnInit(): void {
  }

  getAllUsers() {
    this._userService.showAllUsers().subscribe(res => {
      this.result = res
      this.allUsers = this.result.success
      console.log(res)
    },
      (e) => {
        this.msgCheck = e.error.message
      },
      () => {
        this.msgCheck = this.result.message
      })
  }
}
