import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaDetailsComponent } from './artista-details.component';

describe('ArtistaDetailsComponent', () => {
  let component: ArtistaDetailsComponent;
  let fixture: ComponentFixture<ArtistaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
