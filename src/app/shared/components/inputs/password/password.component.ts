import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  @Input() formGroup!: FormGroup;
  @Input() label : string = '';
  @Input() requiredStar: boolean = false;
  @Input() needIcon : boolean = false;
  @Input() iconName : string = '';
  @Input() disabled : boolean = false;
  @Input() name : string = '';
  @Input() placeholder : string = '';
  @Input() inputClassName: string = '';
  @Input() feedback!: boolean;
  @Input() toggleMask!: boolean ;
}
