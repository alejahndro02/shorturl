import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {
  urlNombre : string;
  urlCorta: string;
  urlProcesada: boolean

  constructor(private _shortUrlService : ShortUrlService) {
    this.urlNombre = '';
    this.urlCorta = '';
    this.urlProcesada = false;
   }

  ngOnInit(): void {
  }

  procesarUrl(){
    this._shortUrlService.getUrlShort(this.urlNombre).subscribe(data =>{console.log(data);
    })
  }

}
