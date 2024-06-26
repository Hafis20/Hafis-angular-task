import { Component, Input } from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  @Input() navbarContent!: { title: string, link: string }[];
}
