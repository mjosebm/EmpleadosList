import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {

  @Input() todos: number;
  @Input() femenino: number;
  @Input() masculino: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();
  radioButtonSeleccionado = 'Todos';

  constructor() { 
    this.todos = 0;
    this.femenino = 0;
    this.masculino = 0;
    
  }

  ngOnInit(): void {
  }

  radioChange(): void{
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado);
  }

}
