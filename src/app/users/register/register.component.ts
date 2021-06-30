import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Variables
  result: any  = {} // = {} ? = []?! // to inserted data as object
  msgCheck: String = ''
  isSubmited: boolean = false


  userData = new FormGroup({ 
    // How to work min and max ???!!! 
    fname:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*")]), 
    lname:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*")]), 
    email:new FormControl('', [Validators.required, Validators.email]), 
    password:new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    userType:new FormControl('user'), 
    phone: new FormControl('',[Validators.required, Validators.pattern("^[0-9]+$")]),
    // address: new FormGroup({
    //   gov: new FormControl
    // }) 
    userImage: new FormControl(''),
    accountStatus: new FormControl(false),
    activateCode: new FormControl(''),
  }) 

  constructor(private _userService: UsersService) { }

  ngOnInit(): void {}

  userRegisterForm(){
    let userInfo: Users = this.userData.value
    this.isSubmited = true
    if (this.userData.valid) {
      this._userService.userRegister(userInfo).subscribe(
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

  get fname() {
    return this.userData.get('fname')
  }

  get lname() {
    return this.userData.get('lname')
  }

  get password() {
    return this.userData.get('password')
  }

  get email() {
    return this.userData.get('email')
  }

  get phone() {
    return this.userData.get('phone')
  }

  



}
