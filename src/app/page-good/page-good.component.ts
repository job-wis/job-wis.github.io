import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wis-page-good',
  templateUrl: './page-good.component.html',
  styleUrls: ['./page-good.component.css']
})
export class PageGoodComponent implements OnInit {

  constructor( private ar: ActivatedRoute ) { 
    ar.params.subscribe( param => console.log( param ));
  }

  ngOnInit() {
  }

}
