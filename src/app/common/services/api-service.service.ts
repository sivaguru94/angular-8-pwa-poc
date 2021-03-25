import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  fetchUrl = 'https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new';


  constructor(private http: HttpClient) { }

  fetchData() {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get<any>(this.fetchUrl, { headers, responseType: 'text' as 'json'});
  }

}
