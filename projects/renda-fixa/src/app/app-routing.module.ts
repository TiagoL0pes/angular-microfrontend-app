import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosRendaFixaComponent } from './components/produtos-renda-fixa/produtos-renda-fixa.component';

const routes: Routes = [
  {
    path: 'rendafixa',
    component: ProdutosRendaFixaComponent,
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
