import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
	
	constructor(private router: Router) {}

	navigateToAdmin = () => {
		console.log('Navigating to Admin Module..');
		this.router.navigate(['admin']);
	}

	navigateToSignin = () => {
		console.log('Navigating to Signin Page..');
		this.router.navigate(['signin']);
	}

}