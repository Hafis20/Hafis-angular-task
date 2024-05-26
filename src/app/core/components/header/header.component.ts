import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() isLoggedIn: boolean = false;
  @Output() LogoutEvent:EventEmitter<void> = new EventEmitter<void>();

  // Logout action
  logout(){
    this.LogoutEvent.emit();
  }
}
