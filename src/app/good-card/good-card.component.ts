import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wis-good-card',
  templateUrl: './good-card.component.html',
  styleUrls: ['./good-card.component.css']
})
export class GoodCardComponent implements OnInit {

  @Input() good: any;

  constructor() { }

  ngOnInit() {
  }

}
