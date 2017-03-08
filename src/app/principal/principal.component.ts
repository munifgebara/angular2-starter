import { Component } from '@angular/core';
import { PrincipalService } from './principal.service';

@Component({
  selector: 'principal',
  templateUrl: 'principal.component.html',
  styleUrls: ['principal.component.css']
})
export class PrincipalComponent {

  private possibilidades:string[]=["Arroz","Feijão","Pão","Macarrão","Areia","Futebol","Paula","Munif"];

  mensagem: string;

  texto: string;

  resultados: string[];

  busca(event) {
    let filtrados : any[] = [];
    for (let i=0;i<this.possibilidades.length;i++){
      let possibilidade=this.possibilidades[i];
      if(possibilidade.toLowerCase().indexOf(event.query.toLowerCase())>=0){
        filtrados.push(possibilidade);
      }
    }
    this.resultados=filtrados;
  }

  constructor(private principalService: PrincipalService) {
    this.mensagem =principalService.getMessagem();
  }




}
