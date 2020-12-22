import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nx-demos-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent implements OnInit {

  @Input()
  public title : string;

  constructor() { }

  ngOnInit() {
  }

}
