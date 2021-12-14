import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCatalogoComponent } from './tela-catalogo.component';

describe('TelaCatalogoComponent', () => {
  let component: TelaCatalogoComponent;
  let fixture: ComponentFixture<TelaCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
