import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

	constructor(private http: Http) { }

	userLogin(loginData): Observable<any> {
		return this.http.get(environment.BASE_URL + 'users/?email=' + loginData.email + '&password=' + loginData.password ).map( res => res.json());
	}

}

