import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortLike"
})
export class SortLikePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let _value = value.sort((a, b) => {
      if (a.date > b.date) return -1;
      if (b.date > a.date) return 1;
      return 0;
    });
    _value = _value.filter((item, i) => i < 5);
    return _value;
  }
}
