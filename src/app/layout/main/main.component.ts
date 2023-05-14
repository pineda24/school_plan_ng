import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  // constructor(readonly swPush: SwPush, pushService: PushNotificationService) { 
  //   if(!swPush.isEnabled) {
  //     return;
  //   }

  //   // swPush.requestSubscription({
  //   //   serverPublicKey: "BIiLOPW4Ubx40tSkFSrktzSZHCnyzh8LY9ieVX2iXu3E0kxk0qFNGQzV7kcbm2ZKbEU1co1aH9OWb_svrNCfTRw"
  //   // }).then(subscription => {
  //   //   console.log(subscription);
  //   //   pushService.sendSubscriptionToTheServer(subscription);
  //   // }).catch(error => console.log(error));
  // }

  ngOnInit() {
  }

}
