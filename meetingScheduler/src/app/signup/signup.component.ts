import { Component, OnInit, ElementRef } from '@angular/core';
import { SignupService } from './signup.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

declare var jQuery: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [ SignupService ]
})
export class SignupComponent implements OnInit {

	signupForm: FormGroup;

	constructor(private element: ElementRef, private formBuilder: FormBuilder, private signupService: SignupService) {
		this.modalCloseListener();
	}

	ngOnInit() {
		this.generateForm();
	}

	private modalCloseListener() {
        jQuery(this.element.nativeElement).on('hidden.bs.modal', () => {
		   this.signupForm.reset();
		   jQuery(this.element.nativeElement).find(".alert").remove();
		})
    }

	generateForm() {
		this.signupForm = this.formBuilder.group({
		    "name":["", [Validators.required, Validators.minLength(4)]],
		    "email": ["", [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
		    "password":["", [Validators.required, Validators.minLength(4)]],
		    "contact":["", [Validators.required, Validators.pattern('[789][0-9]{9}')]]
		});
	}

    userSignup(closeSignupModal): void {
		this.signupService.userSignup(this.signupForm.value).subscribe(
			(data: any) => {
				alert("user registered successfully")
				this.signupForm.reset();
			},
			(error: any) => {
			  	alert("Something went wrong")
			},
			() => {}
		);
	}


}