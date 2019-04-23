import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router: Router) {}

  navigateToDashboard = () => {
    console.log('Navigating to Admin Dashboard..');
    this.router.navigate(['admin', 'dashboard']);
  }
}