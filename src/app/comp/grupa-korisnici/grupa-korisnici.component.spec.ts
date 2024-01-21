import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupaKorisniciComponent } from './grupa-korisnici.component';

describe('GrupaKorisniciComponent', () => {
  let component: GrupaKorisniciComponent;
  let fixture: ComponentFixture<GrupaKorisniciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupaKorisniciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupaKorisniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
