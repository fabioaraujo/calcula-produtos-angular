import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';
import { ListarItensComponent } from './listar-itens/listar-itens.component';
import { ProdutoComponent } from './produto/produto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: ProdutoComponent},
  {path: 'itens', component: ListarItensComponent},
  {path: 'itens/:id', component: ItemCadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
