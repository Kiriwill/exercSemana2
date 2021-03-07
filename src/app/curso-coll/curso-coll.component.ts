import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-curso-coll',
  templateUrl: './curso-coll.component.html',
  styleUrls: ['./curso-coll.component.css']
})
export class CursoCollComponent{

  @Input() cursosLista;
  @Output() excluirCursoEvent = new EventEmitter();

  onExcluirEvento(curso){
    console.log('curso-coll:', curso);
    this.excluirCursoEvent.emit(curso);
  }
}
