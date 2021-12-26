import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { BitcoinModel } from 'src/app/models/bitcoin.model';



export class BitcoinData {

  constructor(public usd: string, public gbp: string, public eur: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  private _bitcoinValue = new BehaviorSubject<BitcoinData>(null);


  constructor(private http: HttpClient,
    private router: Router) {

  }

  get bitcoinValue() {
    return this._bitcoinValue.asObservable();
  }

  getBitcoinValue() {
     return this.http.get<BitcoinModel>('https://api.coindesk.com/v1/bpi/currentprice.json')
      .pipe(
        map((resData) => {
          console.log(resData)
          const bitData: BitcoinData = new BitcoinData("0", "0", "0");

         // console.log("EUR " + resData.bpi.EUR.rate);

          bitData.eur = resData.bpi.EUR.rate;
          bitData.gbp = resData.bpi.GBP.rate;
          bitData.usd = resData.bpi.USD.rate;

          this._bitcoinValue.next(bitData);
          console.log("CITAM BITCOIN")
        })
      );

  }


}
