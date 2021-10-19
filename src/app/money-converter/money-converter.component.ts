import {AfterViewInit, Component, OnInit} from '@angular/core';
import {GetDataService} from "../shared/get-data.service";

@Component({
  selector: 'app-money-converter',
  templateUrl: './money-converter.component.html',
  styleUrls: ['./money-converter.component.css']
})
export class MoneyConverterComponent implements OnInit, AfterViewInit {
  currency: any[] = [];
  selectedOption: string = "";
  resultTransaction: number | null = null;
  inputValue: number | null = null;

  constructor(private currencyService: GetDataService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.currencyService.getCurrency().subscribe(res => {
      console.log(res);
      const result = res;
      result.forEach((el: any) => {
        const obj = {
          ccy: el.ccy,
          base_ccy: el.base_ccy,
          buy: el.buy,
          sale: el.sale,
        };
        this.currency.push(obj);
      })
    })
  }

  public transactions(){
    const arr = this.currency;
    const foundElement = arr.find(el => el.ccy === this.selectedOption);
    this.resultTransaction = foundElement.buy * (this.inputValue ?? 0);
  }
}
