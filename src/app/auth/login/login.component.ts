import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from './loginRequestInterface';
import { error } from 'node:console';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginError:string = "";

  ngOnInit():void{

  }

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  get name() {
    return this.loginForm.controls.username;
  }

  get password() {
    return this.loginForm.controls.password;
  }
  loginButton(){
    if (this.loginForm.valid) {

      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);

        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError=errorData;
        },
        complete:()=>{
          console.log("Login completo");
          this.router.navigateByUrl("secret-page");
          this.loginForm.reset();

        }
      });

    } else {
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos");
    }
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { }
}
