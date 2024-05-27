import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SharedToastrService } from 'src/app/shared/services/shared-toastr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private toastr: SharedToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  submit() {
    if (this.registerForm.valid) {
      this.service.register(this.registerForm.value).subscribe({
        next: (res) => {
          this.router.navigate(['/auth/login']);
          this.toastr.showSuccess(res.message);
        },
        error: () => {
          this.toastr.showWarning('Registration Failed');
        }
      })
    }
  }
}
