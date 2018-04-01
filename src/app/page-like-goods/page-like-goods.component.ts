import { Component, OnInit } from "@angular/core";
import { GoodsServiceService } from "../shared/goods-service.service";
import { ModalService } from "../shared/modal.service";

@Component({
  selector: "wis-page-like-goods",
  templateUrl: "./page-like-goods.component.html",
  styleUrls: ["./page-like-goods.component.css"]
})
export class PageLikeGoodsComponent implements OnInit {
  constructor(public gS: GoodsServiceService, private mS: ModalService) {}

  ngOnInit() {}

  addToBasket(good) {
    this.mS["addToBasketDlg"].show(good, () => {
      this.gS.deleteFromLike(good);
    });
  }

  deleteFromLike(good) {
    this.gS.deleteFromLike(good);
  }
}
