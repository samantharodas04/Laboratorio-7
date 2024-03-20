import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';
import { Formulario } from '../models/Formulario';
import { Personaje } from '../models/Personaje';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit {
  formulario : Formulario = new Formulario (new Personaje('',''));
  path = ''
  ngOnInit(): void {

      this.share.currentFormulario.subscribe(x => {
        this.formulario = x;
        this.path = `./assets/img/${x.personaje.imagen}`;
        console.log(this.formulario);
      })
  }
  constructor(private share:ShareDataService){}
}
