import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, AuthService } from 'angular-6-social-login';

import { AuthServiceService } from '../common/services/auth-service.service';
import { DataSharingServiceService } from '../common/services/data-sharing-service.service';
import { ApiServiceService } from '../common/services/api-service.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any;
  data: string[];
  fetchSuccess = false;
  numbers: string[];

  constructor(
    private socialAuthService: AuthService,
    private dataSevice: DataSharingServiceService,
    private router: Router,
    private auth: AuthServiceService,
    private apiService: ApiServiceService
  ) { }

  ngOnInit() {
    this.user = this.auth.getLoggedInUser();
    Notification.requestPermission().then((result) => {
      console.log(result);
    });
  }

  logout() {
    this.socialAuthService.signOut().then(() => {
      this.auth.logout();
    });
  }
  pushNotification() {
    console.log('in push');
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
      navigator.serviceWorker.ready.then((registration) => {

        console.log('inside the ready state of service worker');
        console.log('Registrtion is=>', registration);
        registration.showNotification('Vibration Sample', {
          body: 'Buzz! Buzz!',
          // icon: '../images/touch/chrome-touch-icon-192x192.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample'
        });
      });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          // let notification = new Notification('Hi there!');
          navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification('Vibration Sample', {
              body: 'Buzz! Buzz!',
              // icon: '../images/touch/chrome-touch-icon-192x192.png',
              vibrate: [200, 100, 200, 100, 200, 100, 200],
              tag: 'vibration-sample'
            });
          });
        }
      });
    }
  }

  fetchData() {
    this.fetchSuccess = false;
    this.numbers = [];
    console.log('Fetching Data......');
    this.apiService.fetchData()
      .subscribe(resp => {
        this.data = resp;
        let i = 0;
        if (this.fetchSuccess === false) {
          for (i = 0; i < this.data.length; i = i + 2) {
            this.numbers.push(this.data[i]);
          }
        }
        console.log('data fetched succesfully');
        this.fetchSuccess = true;
      },
        error => {
          console.log('Error -------------->', error);
        });
  }
}
