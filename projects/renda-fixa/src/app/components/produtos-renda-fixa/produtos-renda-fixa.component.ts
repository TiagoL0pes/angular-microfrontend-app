import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';

export interface ProdutoRF {
  id: string;
  nome: string;
  minimo: number;
  rentabilidade: string;
  liquidez: string;
  vencimento: string;
  emissor: string;
  garantia: string;
  risco: number;
}

@Component({
  selector: 'rf-produtos-renda-fixa',
  templateUrl: './produtos-renda-fixa.component.html',
  styleUrls: ['./produtos-renda-fixa.component.scss'],
})
export class ProdutosRendaFixaComponent {
  produtos = [
    {
      id: Guid.create().toString(),
      nome: 'CDB Liquidez diária',
      minimo: 1,
      rentabilidade: '100% do CDI',
      liquidez: 'Imediato',
      vencimento: '01/01/2024',
      emissor: 'Banco Inter',
      garantia: 'Garantido pelo FGC',
      risco: 2,
    },
    {
      id: Guid.create().toString(),
      nome: 'CDB IPCA 2026',
      minimo: 1000,
      rentabilidade: '100% do CDI + IPCA',
      liquidez: 'No vencimento',
      vencimento: '01/05/2026',
      emissor: 'Banco Itaú',
      garantia: 'Garantido pelo FGC',
      risco: 3,
    },
    {
      id: Guid.create().toString(),
      nome: 'CDB BTG Pactual',
      minimo: 500,
      rentabilidade: '101% do CDI',
      liquidez: 'Imediato',
      vencimento: '01/02/2027',
      emissor: 'Banco BTG',
      garantia: 'Garantido pelo FGC',
      risco: 3,
    },
    {
      id: Guid.create().toString(),
      nome: 'Tesouro Selic 2025',
      minimo: 1,
      rentabilidade: 'SELIC + 0,10% (a.a)',
      liquidez: 'Imediato',
      vencimento: '01/03/2025',
      emissor: 'Governo Federal',
      garantia: 'Garantido pelo Tesouro Nacional',
      risco: 1,
    },
    {
      id: Guid.create().toString(),
      nome: 'Tesouro Prefixado 2025',
      minimo: 1,
      rentabilidade: '12% (a.a)',
      liquidez: 'No Vencimento',
      vencimento: '01/01/2025',
      emissor: 'Governo Federal',
      garantia: 'Garantido pelo Tesouro Nacional',
      risco: 1,
    },
    {
      id: Guid.create().toString(),
      nome: 'Tesouro Prefixado 2029',
      minimo: 1,
      rentabilidade: '12,06% (a.a)',
      liquidez: 'No Vencimento',
      vencimento: '01/01/2029',
      emissor: 'Governo Federal',
      garantia: 'Garantido pelo Tesouro Nacional',
      risco: 1,
    },
    {
      id: Guid.create().toString(),
      nome: 'Tesouro IPCA+ 2026',
      minimo: 1,
      rentabilidade: 'IPCA + 5,61% (a.a)',
      liquidez: 'No Vencimento',
      vencimento: '15/08/2026',
      emissor: 'Governo Federal',
      garantia: 'Garantido pelo Tesouro Nacional',
      risco: 1,
    },
    {
      id: Guid.create().toString(),
      nome: 'Tesouro IPCA+ 2035',
      minimo: 1,
      rentabilidade: 'IPCA + 5,79% (a.a)',
      liquidez: 'No Vencimento',
      vencimento: '15/05/2035',
      emissor: 'Governo Federal',
      garantia: 'Garantido pelo Tesouro Nacional',
      risco: 1,
    },
    {
      id: Guid.create().toString(),
      nome: 'CRA AGRO SÃO LUIZ',
      minimo: 5000,
      rentabilidade: '100% do CDI + 5% (a.a)',
      liquidez: 'No vencimento',
      vencimento: '01/01/2027',
      emissor: 'banco Inter',
      garantia: 'Sem garantia',
      risco: 4,
    },
    {
      id: Guid.create().toString(),
      nome: 'CRI IMOBIL SANTA LUIZA',
      minimo: 10000,
      rentabilidade: '100% do CDI + 10% (a.a)',
      liquidez: 'No vencimento',
      vencimento: '01/01/2032',
      emissor: 'banco Inter',
      garantia: 'Sem garantia',
      risco: 5,
    },
  ];

  escala: any = {
    1: '#38bdf8',
    2: '#4ade80',
    3: '#facc15',
    4: '#fb923c',
    5: '#dc2626',
  };
}
