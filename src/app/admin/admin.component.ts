import { Component } from '@angular/core';
import { Router } from '@angular/router';
import links from './nav-items';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  showFiller = false;
  links = links;
  constructor(private router: Router) {}
  logOut(): void {
    this.router.navigate(['auth', 'login']);
  }
}
