import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  listEmpleados: Empleado[] =
    [
    {legajo: 1, nombre: 'Juan', apellido: 'Pérez',sexo: 'Masculino', salario: 1000000},
    {legajo: 2, nombre: 'Pepito', apellido: 'González',sexo: 'Masculino', salario: 3000000},
    {legajo: 3, nombre: 'Luciana', apellido: 'Riaza',sexo: 'Femenino', salario: 4000000},
    {legajo: 4, nombre: 'Emma', apellido: 'Botero',sexo: 'Femenino', salario: 6000000},
    {legajo: 5, nombre: 'Juan', apellido: 'Andrade',sexo: 'Masculino', salario: 10000000},
    {legajo: 6, nombre: 'Dolly', apellido: 'Londoño',sexo: 'Femenino', salario: 9000000},
    {legajo: 7, nombre: 'Gloria', apellido: 'Acosta',sexo: 'Femenino', salario: 9500000}
  ]

  radioButtonSeleccionado = 'Todos';

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados() : number {
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos() : number {
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
  }

  obtenerTotalMasculinos() : number {
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
  }

  empleadoCountRadioButtonChange(radioButtonSelect: string) : void {
    this.radioButtonSeleccionado = radioButtonSelect;
  }

}
