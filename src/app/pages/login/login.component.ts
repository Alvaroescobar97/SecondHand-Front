import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  passwordError: boolean;
  formValid: boolean;

  constructor(private authService:AuthService, private router: Router) { 
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    });
    this.passwordError=false;
    this.formValid=false;
  }

  ngOnInit(): void {
  }

  async onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value); 
    const {email, password}=this.loginForm.value;

    try {
      const res = await this.authService.login(email,password);

      if(res.token){
        localStorage.setItem("token",res.token);
        console.log(res);
        this.router.navigate(['/home']);
      }
      this.passwordError=false;
      this.formValid=false;
    } catch (error) {
      if(error.status===401){
        this.passwordError=true;
      }
      console.log(error);
    }
    
    }else{
      this.formValid=true;
    }
  }

}
