import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "aliDate"
})
export class AliDatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log(String(value));
    let _value = String(value).replace("an hour ago", "час назад");
    _value = String(_value).replace("minutes ago", "минут назад");
    _value = String(_value).replace("a minute ago", "минуту назад");
    _value = String(_value).replace(
      "a few seconds ago",
      "несколько секунд назад"
    );
    return _value;
  }
}
