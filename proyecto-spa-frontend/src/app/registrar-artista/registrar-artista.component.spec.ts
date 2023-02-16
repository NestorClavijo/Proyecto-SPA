import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarArtistaComponent } from './registrar-artista.component';

describe('RegistrarArtistaComponent', () => {
  let component: RegistrarArtistaComponent;
  let fixture: ComponentFixture<RegistrarArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarArtistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
