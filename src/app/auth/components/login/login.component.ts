import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submit() {
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res)
          if(res.role === 'admin'){
            this.router.navigate(['/admin/dashboard']);
          }else{
            this.router.navigate(['/user/dashboard'])
          }
        },
        error: () => {

        }
      })
    }
  }
}
