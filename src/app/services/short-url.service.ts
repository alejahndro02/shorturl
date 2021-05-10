import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {
  url = 'https://api-ssl.bitly.com/v4/shorten';
  token = 'efc953ec94f85548aca0f9eea033f0214949af26';
  constructor() { }
}
