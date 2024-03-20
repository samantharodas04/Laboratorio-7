import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ConversionComponent} from './conversion/conversion.component';


export const routes: Routes = [
  {path: 'conversion' , component: ConversionComponent},
  {path: 'formulario' , component: FormularioComponent}
];
