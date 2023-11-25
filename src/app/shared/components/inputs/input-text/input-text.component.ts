import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input() formGroup!: FormGroup;
  @Input() label : string = '';
  @Input() requiredStar: boolean = false;
  @Input() needIcon : boolean = false;
  @Input() disabled : boolean = false;
  @Input() iconName : string = '';
  @Input() type : string = 'text';
  @Input() inputClassName: string = '';
  @Input() name : string = '';
  @Input() placeholder : string = '';

}
