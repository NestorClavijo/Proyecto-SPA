import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCancionComponent } from './registrar-cancion.component';

describe('RegistrarCancionComponent', () => {
  let component: RegistrarCancionComponent;
  let fixture: ComponentFixture<RegistrarCancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarCancionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
