import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { RegisterService } from '../services/auth/register.service';
import { RegisterNutritionistRequest } from '../services/auth/registerRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-nutritionist',
  templateUrl: './register-nutritionist.component.html',
  styleUrls: ['./register-nutritionist.component.scss']
})
export class RegisterNutritionistComponent {

  registerError: string = "";
  registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    user: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    //genre: ['', Validators.required]
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

  //get genre() {
  //return this.registerForm.controls.genre;
  //}

  register() {
    if (this.registerForm.valid) {
      this.registerService.registerNutritionist(this.registerForm.value as RegisterNutritionistRequest).subscribe({
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
