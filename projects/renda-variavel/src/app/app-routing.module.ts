import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosRendaVariavelComponent } from './components/produtos-renda-variavel/produtos-renda-variavel.component';

const routes: Routes = [
  {
    path: 'rendavariavel',
    component: ProdutosRendaVariavelComponent,
  },
  {
    path: '**',
    redirectTo: '#/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
