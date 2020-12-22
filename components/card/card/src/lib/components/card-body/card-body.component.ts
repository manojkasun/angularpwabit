import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nx-demos-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent implements OnInit {

  @Input()
  public contentText : string;

  constructor() { }

  ngOnInit() {
  }

}
