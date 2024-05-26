import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SharedToastrService } from 'src/app/shared/services/shared-toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router,
    private toastr:SharedToastrService
  ) { }

  ngOnInit(): void {
    // Creating the login form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  // Submit validation
  submit() {
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.role === 'admin') {
            // Setting the admin token into local storage
            localStorage.setItem('adminToken', res.token);
            // Navigating into the admin dashboard
            this.router.navigate(['/admin/dashboard']);
          } else {
            // Setting the user token into local storage
            localStorage.setItem('userToken', res.token);
            // Navigating into the user dashboard
            this.router.navigate(['/user/dashboard']);
          }
        },
        error: () => {
          this.toastr.showWarning('Invalid Credentials');
        }
      })
    }
  }
}
