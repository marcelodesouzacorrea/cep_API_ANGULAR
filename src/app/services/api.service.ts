import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCep(cep:string):Observable<any>{
    return this.http.get(`https://cep.awesomeapi.com.br/json/${cep}`)
  }
}
