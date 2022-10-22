import { Component } from '@angular/core'
import { CurrencyapidataService } from './currencyapidata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'converterCurrency'
  currjson: any = []

  base="USD"
  cont2="USD"
  result:string = "1"

  changebase(a:string){
    this.base = a
  }

  tocountry(b:string){
    this.cont2 = b
  }

  constructor(private currency: CurrencyapidataService){}
  convert(){
      this.currency.getcurrencydata(this.base).subscribe(data => {
      this.currjson = JSON.stringify(data)
      this.currjson = JSON.parse(this.currjson)
      const usd = this.cont2 == "USD"
      const uah = this.cont2 == "UAH"
      const eur = this.cont2 == "EUR"
      const USD = this.currjson.rates.USD
      const UAH = this.currjson.rates.UAH
      const EUR = this.currjson.rates.EUR
      this.result = usd ? USD : uah ? UAH : eur ? EUR : ''
    })
  }
}