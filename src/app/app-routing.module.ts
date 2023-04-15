import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxDetailComponent } from './component/box-detail/box-detail.component';
import { HomeComponent } from './component/home/home.component';
import { PanierComponent } from './component/panier/panier.component';
import { CommandeValideeComponent } from './component/commande-validee/commande-validee.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'box/:id', component: BoxDetailComponent },
  { path: 'panier', component: PanierComponent }, // Nouvelle route pour le panier
  { path: 'historique', component: CommandeValideeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }