import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Formulario } from '../models/Formulario';
import { Personaje } from '../models/Personaje';
@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private formulario = new BehaviorSubject<Formulario>(new Formulario(new Personaje('','')));
  currentFormulario = this.formulario.asObservable();

  setFormulario(form: Formulario){
    this.formulario.next(form);
  }
  constructor() { }
}
