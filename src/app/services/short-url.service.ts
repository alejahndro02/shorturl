import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {
  url = 'https://api-ssl.bitly.com/v4/shorten';

  constructor(private http: HttpClient) { }

  getUrlShort(urlNombre: string):Observable<any>{
    const body={
      long_url: urlNombre
    }
    return this.http.post(this.url, body)
  }
}
