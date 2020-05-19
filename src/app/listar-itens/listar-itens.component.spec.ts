import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarItensComponent } from './listar-itens.component';

describe('ListarItensComponent', () => {
  let component: ListarItensComponent;
  let fixture: ComponentFixture<ListarItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
