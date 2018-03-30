import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricePipe'
})
export class PricePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Number(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")+" руб.";
  }

}
