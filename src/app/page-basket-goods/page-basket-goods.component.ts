import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GoodsServiceService } from "../shared/goods-service.service";
import "rxjs/add/operator/map";

@Component({
  selector: "wis-page-basket-goods",
  templateUrl: "./page-basket-goods.component.html",
  styleUrls: ["./page-basket-goods.component.css"]
})
export class PageBasketGoodsComponent implements OnInit {
  constructor(private gS: GoodsServiceService, private fb: FormBuilder) {}

  ngOnInit() {}

  deleteFromBasket(item) {
    this.gS.deleteFromBasket(item);
  }

  addToLike(record) {
    this.gS.addToLike(record.good);
    this.gS.deleteFromBasket(record);
  }

  changeCount(item, count) {
    if (item.count + count > 0) this.gS.addToBasket(item.good, Number(count));
  }

  changeState(e, good) {
    console.log(e, good);
  }
}
