import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  loginError: string = "";

  loginForm = this.formBuilder.group({
    user: ['', Validators.required],
    password: ['', Validators.required],
    role: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { }

  get user() {
    return this.loginForm.controls.user;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  get role() {
    return this.loginForm.controls.role;
  }

  login() {
    if (this.loginForm.valid) {
      if (this.loginForm.controls.role.value === "Cliente") {
        this.loginService.loginUser(this.loginForm.value as LoginRequest).subscribe({
          next: (userData) => {
            console.log(userData);
          },
          error: (errorData) => {
            console.log(errorData);
            this.loginError = errorData;
          },
          complete: () => {
            console.info("Login completo");
            this.router.navigateByUrl('');
            this.loginForm.reset();
          }
        })
      } else {
        this.loginService.loginNutritionist(this.loginForm.value as LoginRequest).subscribe({
          next: (userData) => {
            console.log(userData);
          },
          error: (errorData) => {
            console.log(errorData);
            this.loginError = errorData;
          },
          complete: () => {
            console.info("Login completo");
            this.router.navigateByUrl('');
            this.loginForm.reset();
          }
        })
      }
    } else {
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos");
    }
  }
}
