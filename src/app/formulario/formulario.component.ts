import { Component } from '@angular/core';
import { Personaje } from '../models/Personaje';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ShareDataService } from '../services/share-data.service';
import { Formulario } from '../models/Formulario';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [MatInputModule,ReactiveFormsModule,MatSelectModule,MatButtonModule, InfoComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  selpersonaje = new FormControl();
  personajes = [
    new Personaje("Wolverine", "wolverine.jpeg"),
    new Personaje("Ciclope", "ciclope.jpeg"),
    new Personaje("Jean Gray", "jean.jpg"),
    new Personaje("Beast", "beast.png"),
    new Personaje("Profesor X", "profesorx.png"),
]
 constructor(private share: ShareDataService){}

 grabar(){
  let formu = new Formulario(this.personajes[this.personajes.findIndex(x => x.imagen == this.selpersonaje.value)]);
  console.log(formu);
  this.share.setFormulario(formu);
}
}
