import { Component, OnInit, Input } from "@angular/core";
import { ModalService } from "../modal.service";
import { GoodsServiceService } from "../goods-service.service";

@Component({
  selector: "app-modal-add-to-basket",
  templateUrl: "./modal-add-to-basket.component.html",
  styleUrls: ["./modal-add-to-basket.component.css"]
})
export class ModalAddToBasketComponent implements OnInit {
  @Input() modalIsVisible;
  count = 1;
  good: any;

  constructor(private mS: ModalService, private gS: GoodsServiceService) {
    this.mS["addToBasketDlg"] = this;
  }

  ngOnInit() {}

  show(good) {
    this.good = good;
    this.modalIsVisible = true;
  }

  close(e) {
    if (!e || e.target.classList.contains("overlay")) {
      this.modalIsVisible = false;
    }
  }

  appendToBasket() {
    console.log("appendToBasket");
    this.gS.addToBasket(this.good);
  }
}
