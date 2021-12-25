import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { BitcoinModel } from '../models/bitcoin.model';
import { AuthenticationService } from '../service/authentication/authentication.service';
import { BitcoinData, BitcoinService } from '../service/bitcoin/bitcoin.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {

  valueBit: BitcoinData = new BitcoinData("0", "0", "0");;
  start: boolean = false;
  name: string = "Stop";
  subscription: Subscription;

  constructor(private bitcoinService: BitcoinService, private authService: AuthenticationService) {

  }

  ngOnInit() {
    
    this.bitcoinService.bitcoinValue.subscribe(res => this.valueBit = res);
    this.bitcoinService.getBitcoinValue().subscribe(res => { });

    this.getValue();
    console.log("pokrenuto")
  }

  getValue() {
    this.start = !this.start;
    console.log("START: " + this.start);
   

    if (this.start == true) {
      this.subscription = interval(1000).subscribe(x => {
        
        this.bitcoinService.getBitcoinValue().subscribe(res => { });
        console.log("Izvrsio sam http zahtev");

        if (this.authService.isUserLoggedIn() == false) {
          this.stopSubscription();
        }

        this.name = "Stop";
      })
    }
    if (this.start == false) {
      this.stopSubscription();
    }

  }
  stopSubscription() {
    console.log("PREKIDAM");
    this.subscription.unsubscribe();
    this.subscription.remove;
    this.name = "Start";
    return;
  }


}