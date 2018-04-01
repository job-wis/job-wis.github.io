import { Component, OnInit } from "@angular/core";
import { GoodsServiceService } from "../shared/goods-service.service";

@Component({
  selector: "wis-page-goods",
  templateUrl: "./page-goods.component.html",
  styleUrls: ["./page-goods.component.css"]
})
export class PageGoodsComponent implements OnInit {
  goods: any[];

  constructor(private goodsSource: GoodsServiceService) {}

  ngOnInit() {
    this.goodsSource.getGoods().subscribe(goods => {
      this.goods = goods;
    });
  }
}
