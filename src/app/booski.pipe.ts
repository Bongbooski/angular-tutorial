import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booski'
})
export class BooskiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value+" booski";
  }
  // transform(value: any, args?: any): any {
  //   const booski = "booski";
  //   let temp = value.split("");
  //   temp += booski.split("");
  //   temp.sort();
  //   console.log(temp);
  //   return temp;
  // }

}
