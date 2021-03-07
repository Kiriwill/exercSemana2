import { Component } from '@angular/core';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent{
  cursosLista = []

  inserirCurso(nome,carga){
    this.cursosLista.push({
      nome: nome,
      carga: carga
    })
    console.log(this.cursosLista);
  }

  onExcluirEvento(curso){
    console.log('curso-form', curso);

    var index = this.cursosLista.indexOf(curso);
    index > -1 ? this.cursosLista.splice(index, 1) : console.log('item não encontrado.')
  }
}
