import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {
  urlNombre : string;
  urlCorta: string;
  urlProcesada: boolean

  constructor() {
    this.urlNombre = '';
    this.urlCorta = '';
    this.urlProcesada = false;
   }

  ngOnInit(): void {
  }
  procesarUrl(){
    console.log(this.urlNombre);
    this.urlNombre = '';
    
  }

}
