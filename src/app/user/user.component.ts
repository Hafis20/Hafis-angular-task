import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarModel } from '../shared/models/nav.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private router:Router){}

  navMenu!:NavbarModel[];
  // Admin logout
  logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/auth/login']);
  }

  get navigationMenu():NavbarModel[] {
    return [
      { title: 'Dashboard', link: '/user/dashboard' },
      { title: 'Chat', link: '/user/chat' }
    ]
  };

  ngOnInit(): void {
    this.navMenu = this.navigationMenu;
  }
}
