import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DemoComponent } from './demo/demo.component';
import { ExoComponent } from './exo/exo.component';

const routes: Routes = [
  { path : '', component : HomeComponent },
  // Lazy-Loading - C'est au moment où on va cliquer sur Demo que les enfants vont être chargés, puisqu'il va charger DemoModule, dans lequel nous avons importé le DemoRoutingModule
  { path : 'demo', component : DemoComponent, loadChildren : () => import("./demo/demo.module").then((m) => m.DemoModule ) },
  { path : 'exo', component : ExoComponent, loadChildren : () => import("./exo/exo.module").then((m) => m.ExoModule ) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
