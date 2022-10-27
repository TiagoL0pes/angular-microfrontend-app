import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosRendaVariavelComponent } from './produtos-renda-variavel.component';

describe('ProdutosRendaVariavelComponent', () => {
  let component: ProdutosRendaVariavelComponent;
  let fixture: ComponentFixture<ProdutosRendaVariavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosRendaVariavelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosRendaVariavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
