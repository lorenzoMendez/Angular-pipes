import { Pipe, PipeTransform, KeyValueDiffers } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, show: boolean ): string {
    return show ? "*".repeat( value.length ) : value;
  }

}
