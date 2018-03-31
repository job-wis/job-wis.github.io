import { Component, OnInit } from "@angular/core";
import { GoodsServiceService } from "../goods-service.service";

@Component({
  selector: "wis-page-basket-goods",
  templateUrl: "./page-basket-goods.component.html",
  styleUrls: ["./page-basket-goods.component.css"]
})
export class PageBasketGoodsComponent implements OnInit {
  basketList: any[];
  constructor(private gS: GoodsServiceService) {}

  ngOnInit() {
    this.gS.getBasket().subscribe(basket => (this.basketList = basket));
  }
}
