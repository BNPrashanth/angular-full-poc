import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnvService } from 'src/app/env.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
	
	constructor(
		private router: Router,
		public env: EnvService
	) {}

	ngOnInit() {
		if (this.env.enableDebug) {
			console.log('Debug mode enabled..');
		}
	}

	navigateToAdmin = () => {
		console.log('Navigating to Admin Module..');
		this.router.navigate(['admin']);
	}

	navigateToSignin = () => {
		console.log('Navigating to Signin Page..');
		this.router.navigate(['signin']);
	}

}