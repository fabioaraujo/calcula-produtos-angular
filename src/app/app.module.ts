import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { HoraTrabalhadaComponent } from './hora-trabalhada/hora-trabalhada.component';
import { ListarItensComponent } from './listar-itens/listar-itens.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { MenuComponent } from './menu/menu.component';
registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    HoraTrabalhadaComponent,
    ListarItensComponent,
    ItemCadastroComponent,
    ProdutoCadastroComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
