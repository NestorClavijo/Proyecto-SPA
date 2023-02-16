import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAlbumComponent } from './registrar-album.component';

describe('RegistrarAlbumComponent', () => {
  let component: RegistrarAlbumComponent;
  let fixture: ComponentFixture<RegistrarAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
