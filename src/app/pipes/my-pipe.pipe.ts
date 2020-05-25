import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string, option: boolean = false ): string {
    value = value.toLocaleLowerCase();
    let names = value.split( ' ' );

    if( option ) {
      names = names.map( name => {
        return name[ 0 ].toUpperCase() + name.substr( 1 );
      } );
    } else {
      names[ 0 ] = names[ 0 ][ 0 ].toUpperCase() + names[ 0 ].substr( 1 );
    }

    return names.join( ' ' );
  }
}
