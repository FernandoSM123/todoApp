//modulos necesarios para el routing
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//importar componentes
import {ActiveComponent} from './components/active/active.component';
import {AllComponent} from './components/all/all.component';
import {CompletedComponent} from './components/completed/completed.component';

//Array de rutas
const appRoutes: Routes = [
{path:'',component:AllComponent}, //Ruta por defecto
{path:'Active',component:ActiveComponent},
{path:'All',component:AllComponent},
{path:'Completed',component:CompletedComponent}
];

//Exportar modulo de rutas
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);
