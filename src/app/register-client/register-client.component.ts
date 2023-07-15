import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../services/auth/register.service';
import { RegisterUserRequest } from '../services/auth/registerRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent {

  registerError: string = "";
  registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    user: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    genre: ['', Validators.required],
    weight: [0, Validators.required],
    desiredWeight: [0, Validators.required],
    height: [0, Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private registerService: RegisterService) { }

  get firstname() {
    return this.registerForm.controls.firstName;
  }

  get lastname() {
    return this.registerForm.controls.lastName;
  }

  get user() {
    return this.registerForm.controls.user;
  }

  get password() {
    return this.registerForm.controls.password;
  }

  get email() {
    return this.registerForm.controls.email;
  }

  get genre() {
    return this.registerForm.controls.genre;
  }
  get weight() {
    return this.registerForm.controls.weight;
  }

  get desiredWeight() {
    return this.registerForm.controls.desiredWeight;
  }

  get height() {
    return this.registerForm.controls.height;
  }

  register() {
    if (this.registerForm.valid) {
      this.registerService.registerUser(this.registerForm.value as RegisterUserRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.log(errorData);
          this.registerError = errorData;
        },
        complete: () => {
          console.info("Registro completo");
          this.router.navigateByUrl('/login');
          this.registerForm.reset();
        }
      })
    } else {
      this.registerForm.markAllAsTouched();
      alert("Error al ingresar datos");
    }
  }
}
