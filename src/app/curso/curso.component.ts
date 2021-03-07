import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
    @Input() curso
    @Output() excluirCursoEvent = new EventEmitter();

    excluirCurso(curso){
      // console.log(curso);
      this.excluirCursoEvent.emit(curso);
    }
}
