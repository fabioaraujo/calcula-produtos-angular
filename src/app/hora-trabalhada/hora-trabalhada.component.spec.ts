import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraTrabalhadaComponent } from './hora-trabalhada.component';

describe('HoraTrabalhadaComponent', () => {
  let component: HoraTrabalhadaComponent;
  let fixture: ComponentFixture<HoraTrabalhadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoraTrabalhadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoraTrabalhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
