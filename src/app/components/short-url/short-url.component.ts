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
  mostrarError: boolean;
  textError: String;

  constructor(private _shortUrlService : ShortUrlService) {
    this.urlNombre = '';
    this.urlCorta = '';
    this.urlProcesada = false;
    this.loading =false;
    this.mostrarError=false;
    this.textError=' ';
   }

  ngOnInit(): void {
  }

  procesarUrl(){
    if(this.urlNombre === ''){
      this.mostrarError= true;
      this.textError ='Ingrese una URL';
      setTimeout(() => {
      this.mostrarError= false;
      }, 4000);
      return;
    }
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
