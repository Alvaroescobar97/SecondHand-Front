import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  singupForm: FormGroup;

  constructor(private authService :AuthService, private router: Router) { 
    this.singupForm = new FormGroup({
      name : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required]),
      passwordConfirmed : new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  async onSubmit(){

    console.log(this.singupForm.value);

    if(this.singupForm.value.password === this.singupForm.value.passwordConfirmed && this.singupForm.valid){
      const {name, email, password}=this.singupForm.value;
      try {
        await this.authService.singup(name, email, password);
        this.router.navigate(['/login']);
      } catch (error) {
        console.log(error);
      }
      
    }
    
  }
}
