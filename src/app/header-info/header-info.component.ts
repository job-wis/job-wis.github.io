import { Component, OnInit } from "@angular/core";
import { GoodsServiceService } from "../shared/goods-service.service";
import { ModalService } from "../shared/modal.service";

@Component({
  selector: "wis-header-info",
  templateUrl: "./header-info.component.html",
  styleUrls: ["./header-info.component.css"]
})
export class HeaderInfoComponent implements OnInit {
  constructor(private gS: GoodsServiceService, private mS: ModalService) {}

  ngOnInit() {}
  showPoolDown() {
    this.mS["poolDown"].show();
  }
}
