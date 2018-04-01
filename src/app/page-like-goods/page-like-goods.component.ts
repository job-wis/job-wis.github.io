import { Component, OnInit } from "@angular/core";
import { GoodsServiceService } from "../shared/goods-service.service";
import { ModalService } from "../modal.service";

@Component({
  selector: "wis-page-like-goods",
  templateUrl: "./page-like-goods.component.html",
  styleUrls: ["./page-like-goods.component.css"]
})
export class PageLikeGoodsComponent implements OnInit {
  likeList: any[];
  constructor(private gS: GoodsServiceService, private mS: ModalService) {}

  ngOnInit() {
    this.gS.getLike().subscribe(liketList => (this.likeList = liketList));
  }

  addToBasket(good) {
    this.mS["addToBasketDlg"].show(good, () => {
      this.gS.deleteFromLike(good);
      this.gS.getLike().subscribe(liketList => (this.likeList = liketList));
    });
  }

  deleteFromLike(good) {
    this.gS.deleteFromLike(good);
    this.gS.getLike().subscribe(liketList => (this.likeList = liketList));
  }
}
