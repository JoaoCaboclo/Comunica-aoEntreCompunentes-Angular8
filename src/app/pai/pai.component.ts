import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { stringify } from 'querystring';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  familia: Object[];
  nome : string;
  sobreNome: string;

  incluidoPeloSon: Pessoa;

  constructor()    { 
    
    this.familia = [
      {
        nome: 'Vitor',
        sobreNome: 'Borges'
      },
      {
        nome: 'Emerson',
        sobreNome: 'Daniel'
      },
      {
        nome: 'Thiago',
        sobreNome: 'Contre!'
      }
    ];

    this.nome = '';
    this.sobreNome = '';
  
  };

  ngOnInit(): void {
  //  console.log("Imprimindo do PAI");
  //  console.log(this.familia);
  }

  // função para receber emit Output do Filho
  reciverFeedback(respostaFilho) {
    this.nome = respostaFilho.nome;
    this.sobreNome = respostaFilho.SobreNome;
    // this.familia.push.apply( { nome: respostaFilho.nome, sobreNome:respostaFilho.SobreNome } )
    this.familia.includes(respostaFilho);
    //    this.incluidoPeloSon.nome = respostaFilho.nome;
    //    this.incluidoPeloSon.sobreNome = respostaFilho.SobreNome;
  }

}
