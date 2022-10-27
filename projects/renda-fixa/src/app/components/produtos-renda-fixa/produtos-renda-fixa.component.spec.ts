import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosRendaFixaComponent } from './produtos-renda-fixa.component';

describe('ProdutosRendaFixaComponent', () => {
  let component: ProdutosRendaFixaComponent;
  let fixture: ComponentFixture<ProdutosRendaFixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosRendaFixaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosRendaFixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
