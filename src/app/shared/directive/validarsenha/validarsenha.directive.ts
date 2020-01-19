import {Attribute, Directive, ElementRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appValidarsenha]',
  providers: [
    {
      provide: NG_VALIDATORS
      , useExisting: ValidarsenhaDirective
      , multi: true
    }
  ]
})
export class ValidarsenhaDirective implements Validator {


  constructor(private el: ElementRef) { }

  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.root.value.password;
    const confirmPassword = control.value;

    if (password !== confirmPassword) {
      return {confirmPassword: false};
    }

    return null;
  }


}
