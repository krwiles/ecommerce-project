import {FormControl, ValidationErrors} from "@angular/forms";

export class Luv2ShopValidators {

  // whitespace validation
  static notOnlyWhitespace(control: FormControl): ValidationErrors | null {

    // check if string only contains whitespace
    if (control.value != null) {
      if (control.value.trim().length === 0) { // when using && it still checks both and will cause an error trying to .trim() a null value
        // invalid, return error object
        return { 'notOnlyWhitespace': true };
      }
      else {
        // valid, return null
        return null;
      }
    }
    else {
      // valid, return null
      return null;
    }
  }
}
