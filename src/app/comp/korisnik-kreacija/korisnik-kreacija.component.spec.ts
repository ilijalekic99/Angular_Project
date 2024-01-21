import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikKreacijaComponent } from './korisnik-kreacija.component';

describe('KorisnikKreacijaComponent', () => {
  let component: KorisnikKreacijaComponent;
  let fixture: ComponentFixture<KorisnikKreacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorisnikKreacijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikKreacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
