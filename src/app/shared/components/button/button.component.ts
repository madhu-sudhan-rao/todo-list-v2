import { Component, Input } from '@angular/core';


enum ButtonIconPosition {
  Right = 'right',
  Bottom = 'bottom',
  // Other positions...
}
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() class!: string;
  @Input() needIcon : boolean = false;
  @Input() iconOnly : boolean = false;
  @Input() iconName : string = '';
  @Input() iconPosition !: ButtonIconPosition;
  @Input() loading : boolean = false;
  @Input() disabled : boolean = false;
  @Input() rounded : boolean = false;

}
