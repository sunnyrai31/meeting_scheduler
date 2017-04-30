import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()
export class SignupService {

	constructor(private http: Http) { }

	userSignup(signupData): Observable<any> {  
	    let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    return this.http.post(environment.BASE_URL+'users/',JSON.stringify(signupData),{ headers: headers }).map( res => res.json());
	}

}