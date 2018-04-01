import { Component, OnInit } from "@angular/core";
import { GoodsServiceService } from "../shared/goods-service.service";
import "rxjs/add/operator/map";

@Component({
  selector: "wis-page-basket-goods",
  templateUrl: "./page-basket-goods.component.html",
  styleUrls: ["./page-basket-goods.component.css"]
})
export class PageBasketGoodsComponent implements OnInit {
  constructor(private gS: GoodsServiceService) {}

  ngOnInit() {}

  deleteFromBasket(item) {
    this.gS.deleteFromBasket(item);
  }

  addToLike(record) {
    this.gS.addToLike(record.good);
    this.gS.deleteFromBasket(record);
  }
}
