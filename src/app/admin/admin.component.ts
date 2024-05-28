import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarModel } from '../shared/models/nav.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  navMenu!:NavbarModel[]
  // Admin logout
  logout() {
    localStorage.removeItem('adminToken');
    this.router.navigate(['/auth/login']);
  }

  get navigationMenu():NavbarModel[] {
    return [
      { title: 'Dashboard', link: '/admin/dashboard' },
      { title: 'Users List', link: '/admin/list-users' }
    ]
  };

  ngOnInit(): void {
    this.navMenu = this.navigationMenu;
  }
}
