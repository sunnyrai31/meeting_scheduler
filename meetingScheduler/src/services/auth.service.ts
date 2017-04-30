import { Injectable, EventEmitter } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { environment } from '../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

	public isUserAuthorised: boolean = (localStorage.getItem("userObj") !== null);

	public authorisedUserWatcher: EventEmitter<boolean> = new EventEmitter();

	constructor() { 
        this.isUserAuthorised = (localStorage.getItem("userObj") !== null);
    }

	setAuthorisedUser(userObj) {
        localStorage.setItem("userObj", JSON.stringify(userObj));
        this.isUserAuthorised = true;
        this.authorisedUserWatcher.emit(userObj);
    }

    getAuthorisedUser() {
        return JSON.parse(localStorage.getItem("userObj"));
    }

    logout() {
    	this.isUserAuthorised = false;
    	localStorage.removeItem("userObj");
    	this.authorisedUserWatcher.emit(null);
    }


}