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
  urlProcesada: boolean;
  loading: boolean;

  constructor(private _shortUrlService : ShortUrlService) {
    this.urlNombre = '';
    this.urlCorta = '';
    this.urlProcesada = false;
    this.loading =false;
   }

  ngOnInit(): void {
  }

  procesarUrl(){
    this.urlProcesada = false;
    this.loading =true;
    setTimeout(() => {
      this.obtenerUrlShort();
    }, 2000);
  }
    
  obtenerUrlShort(){
    this._shortUrlService.getUrlShort(this.urlNombre).subscribe(data =>{
      this.loading =false;
      this.urlProcesada = true;
      this.urlCorta = data.link
    })
      
  }
}
