import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ng-semantic-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() buttonText: string | undefined = undefined;

  @Output() buttonClicked = new EventEmitter<MouseEvent>();
}
