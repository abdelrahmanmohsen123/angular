import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Variables
  result: any  = {}
  msgCheck: String = ''
  isSubmited: boolean = false

  userData = new FormGroup({ 
    
    email:new FormControl('', [Validators.required, Validators.email]), 
    password:new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
  
  })

  constructor(private _userService: UsersService) { }

  ngOnInit(): void {}

  userLoginForm(){
    let userInfo: Users = this.userData.value
    this.isSubmited = true
    if (this.userData.valid) {
      this._userService.userLogin(userInfo).subscribe(
        res => {
          this.result = res
        },
    
        () => {
          this.msgCheck = `Error`
        },

        () => {
          if(this.result?.userData != "") { 
            this.msgCheck= "done"
            this.userData.reset()
            this.isSubmited = false 
          } 

          else {
            this.msgCheck = "error" 
          }
        
        }
    
      )
    }
  }

  get password() {
    return this.userData.get('password')
  }

  get email() {
    return this.userData.get('email')
  }
  




}
