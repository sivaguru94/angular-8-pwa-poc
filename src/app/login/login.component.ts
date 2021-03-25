import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';
import { Router } from '@angular/router';
import { from } from 'rxjs';

import { DataSharingServiceService } from '../common/services/data-sharing-service.service';
import { AuthServiceService } from '../common/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mobile: Boolean = true;
  columnNum = 4;
  valueLoginId = '';
  valuePassword = '';
  googleBtnisActive = false;
  fingerprintBtnisActive = false;
  facialRecogniionBtnisActive = false;
  aggreeChecked = false;
  checked = false;

  constructor(
    private socialAuthService: AuthService,
    private dataService: DataSharingServiceService,
    private router: Router,
    private auth: AuthServiceService
    ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 769) {
      this.columnNum = 1;
      this.mobile = false;
    } else {
      this.columnNum = 4;
      this.mobile = true;
    }
  }

  ngOnInit() {
  }

  onClickLogin() {
    console.log('Logging in');
  }

  public signinWithGoogle() {
    const socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider)
    .then((userData) => {
      // this.dataService.setUser(userData);
      console.log(userData);
      this.auth.setLoggedInUser(userData);

    });
 }

}
