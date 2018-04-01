import { Component, OnInit, Input } from "@angular/core";
import { ModalService } from "../modal.service";
import { GoodsServiceService } from "../shared/goods-service.service";

@Component({
  selector: "wis-good-card",
  templateUrl: "./good-card.component.html",
  styleUrls: ["./good-card.component.css"]
})
export class GoodCardComponent implements OnInit {
  @Input() good: any;

  constructor(private gS: GoodsServiceService, private mS: ModalService) {}

  ngOnInit() {}

  addToBasket() {
    this.mS["addToBasketDlg"].show(this.good);
  }
  addToLike() {
    this.gS.addToLike(this.good);
  }
}
