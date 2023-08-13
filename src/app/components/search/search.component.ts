import { FormsModule } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  cep:string = ''
  endereco:any;
  erro:any

  constructor(
    private apiService:ApiService
    ){}
  ngOnInit() {}

  buscarCep(){
    this.apiService.getCep(this.cep).subscribe(
      data => {
        this.endereco = data;
        console.log("O data que recebemos",data)
        console.log("A Variavel que preenchemos",this.endereco)
      },
      error =>{
        this.erro = error
        console.error("ERROR: ",error )
      })
  }
}
