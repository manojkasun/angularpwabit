import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nx-demos-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {

  @Input()
  public headerText : string

  @Input()
  public bodyText : string

  constructor() { }

  ngOnInit() {
  }

}
