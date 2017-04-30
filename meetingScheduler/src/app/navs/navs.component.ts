import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.scss']
})
export class NavsComponent implements OnInit {

  private appName : string = "Meeting Scheduler";
  private userObj : any = null;

  constructor(private authService: AuthService, private router: Router) { 
      this.userObj = this.authService.getAuthorisedUser();
  		this.authService.authorisedUserWatcher.subscribe(
	      (userObj) => {
	      	this.userObj = userObj;
	      }
	    );
  }

  ngOnInit() {
  }

  logout() {
  	this.authService.logout();
  	this.router.navigate(["home"]);
  }

   

}
