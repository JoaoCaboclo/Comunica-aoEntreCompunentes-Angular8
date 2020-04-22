import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input() recebeFamilia;
  @Output() respostaFamilia = new EventEmitter();
 
  constructor() {
 
 
  }

  ngOnInit(): void {
     //  console.log("Imprimindo do FILHO");
    //   console.log(this.recebeFamilia);
    this.feedback();
    
  }

  feedback()  {
     this.respostaFamilia.emit({"nome": "Raphella", "SobreNome": "Souza"});
  }
}
