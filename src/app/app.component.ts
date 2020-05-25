import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public name: string = "Capitan América";
  public personal: string = "lorEnZo menDoza rIverA"
  public array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  public PI: number = Math.PI;
  public percent: number = 0.525;
  public salary: number = 3343.35;
  public date: Date = new Date();
  public language: string="es";
  public videoUrl: string = "https://www.youtube.com/embed/OWDoK-nsOyY";
  public active: boolean = true;
  public promiseValue = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve( "Llego la data" );
    }, 3500 );    
  } );

  public heroe: Object = {
    name: 'Logan',
    age: 10,
    key: 'Wolverine',
    address: {
      stree: '1srt 20 house',
      city: 'Alabama'
    }
  };

}
