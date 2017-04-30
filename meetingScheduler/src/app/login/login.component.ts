import { Component, OnInit, ElementRef } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit{

	loginForm: FormGroup;

    constructor(private element: ElementRef, private authService: AuthService, private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    	this.modalCloseListener();
    }

    ngOnInit() {
    	this.generateForm();
	}

	private modalCloseListener() {
        jQuery(this.element.nativeElement).on('hidden.bs.modal', () => {
		   this.loginForm.reset();
		   jQuery(this.element.nativeElement).find(".alert").remove();
		})
    }

    generateForm() {
		this.loginForm = this.formBuilder.group({
		    "email": ["", [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
		    "password":["", [Validators.required, Validators.minLength(4)]]
		});
	}

    userLogin(closeLoginModal): void {
		this.loginService.userLogin(this.loginForm.value).subscribe(
			(data: any) => {

				if(data.length === 0) {
					alert("email and password is incorrect!");
				} else {
					closeLoginModal.click();
					this.loginForm.reset();
					this.authService.setAuthorisedUser(data[0]);
					this.router.navigate(["user/dashboard"]);
				}
				
			},
			(error: any) => {
			  	
			},
			() => {}
		);
	}

}
